<?php
class Ctrl extends Base{
    protected $hari=array(
        'short'=>array('Sen','Sel','Rab','Kam','Jum','Sab'),
        'long'=>array('Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'),
    );
    protected $bulan=array(
        'short'=>array('Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des'),
        'long'=>array('Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'),
    );

    //protected $user=array();
    function __construct(){
        global $userdata;
        parent::__construct();
        $this->db=new DbJoin;
        $this->model=$this->query[0];
        $this->model_id=$this->query[1];
        $this->userdata=$userdata;
        $this->dblogs=new DbLogs;

    }

    protected function notfound(){
        $this->params->clear();
        $this->data(0);
        $this->status(404);
        return false;
    }
    protected function forbidden(){
        $this->params->clear();
        $this->data(0);
        $this->status(403);
        return false;
    }

    function index(){
        // get
        if($this->params->isGet){
            if(empty($this->model_id)){
                $this->select();
                return;
            }
            $this->id();
            return;
        }

        // insert
        if($this->params->isPost){
            //$this->params->del('id');
            $this->insert();
            return;
        }

        // edit put
        if($this->params->isPut){
            if(!empty($this->model_id)) {
                $this->update();
                return ;
            }
        }

        // delete
        if($this->params->isDelete){
            if(!empty($this->model_id)) {
                $this->delete();
                return;
            }
        }

        $this->notfound();
    }

    function select(){
        $optand=''; // option untuk ( params or  params or params) and (optand)
        if(!empty($this->params->key('optand'))) $optand=$this->params->key('optand');
        $this->data($this->db->select($this->model,$this->params,$optand));
        // $this->data($this->db->testQry());
    }


    function id(){
        $res=$this->db->id($this->model,$this->model_id);
        if(empty($res)) return $this->notfound();
        $this->data($res);
    }

    function insert(){
        $this->data( $this->db->insert($this->model,$this->params) );
    }


    function update(){
        if(!empty($this->model_id)){
            $this->insertLog('UPDATE');
            $this->data( $this->db->update($this->model,$this->params,$this->model_id) );
        }
    }

    function delete(){
        // if(!$this->isAdmin) return $this->forbidden();

        $model=$this->model;
        $this->addModel($model);
        $count=$this->$model->delete($this->model_id);
        $this->data( array('delete'=>$count) );
        $this->insertLog('DELETE');
    }

    function save(){
        if(empty($this->params->key('id'))) return $this->insert();
        $this->model_id=$this->params->key('id');
        $this->update();
    }

    function today(){
        $f=empty($this->params->key('format')) ? 'Y-m-d H:i:s' : $this->params->key('format');
        $d=new DateTime;
        $this->data($d->format($f));

    }

    function test(){
        $this->data($this->params->all());
    }
    
    protected function insertLog($qry){
        global $prefix;
        // log update
        $this->dblogs->colVal('user_id',$this->userdata['id']);
        $this->dblogs->colVal('tbname',strtolower($prefix).strtolower($this->model));
        $this->dblogs->colVal('tbid',$this->model_id);
        $this->dblogs->colVal('qry',$qry);
        $this->dblogs->save();
    }    
}
