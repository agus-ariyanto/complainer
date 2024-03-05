<?php 
class Proses extends Ctrl{
    function __construct(){
        parent::__construct();
        $this->model='proses';
        $this->model_id=$this->query[0];
        $d=new DateTime;
        $this->ymd=$d->format('Y-m-d H:i:s');
        
    }
    /* 
         array(
            'id'=>1,
            'nama'=>'Komplain',
        ),
        array(
            'id'=>2,
            'nama'=>'Overtime AC',
        ),
        array(
            'id'=>3,
            'nama'=>'Pinjam Assets',
        ),
        array(
            'id'=>4,
            'nama'=>'Kartu Parkir',
        ),
        array(
            'id'=>5,
            'nama'=>'Kartu Access',
        ),
        array(
            'id'=>6,
            'nama'=>'Kartu ID',
        ),
     */
    protected function setCode($val){
        if($this->params->isPost) $this->params->set('code_id',$val);
        if($this->params->isGet){
            $this->params->set('code_id',array('equal'=>$val));
            $this->params->set('and',1);
        }
    }
    
    function komplain(){
        $this->setCode(1);
        $this->params->set('step_id',2);
        $this->params->set('tgl_approval',$this->ymd);
        $this->index();
    }
    function overtime(){
        $this->setCode(2);
        $this->index();
    }
    function pinjam(){
        $this->setCode(3);
        $this->index();
    }
    function akses(){
        $this->setCode(5);
        $this->index();
    }
    function parkir(){
        $this->setCode(4);
        $this->index();
    }
    function idcard(){
        $this->setCode(6);
        $this->index();
    }
    function rate(){
        $proses_id=$this->params->key('proses_id');
        $res=$this->db->insert('rate',$this->params);
        $this->params->clear();
        $this->params->set('tgl_rate',$this->ymd);
        $this->params->set('rate_id',$res['id']);
        $this->params->set('step_id',10);
        $data=$this->db->update($this->model,$this->params,$proses_id);
        $this->data($data);
    }

    function insert(){
        /* item detail */
        if(empty($this->params->key('start'))) $this->params->set('start',$this->ymd);
        $res=$this->db->insert('submission',$this->params);

        
        $this->params->set('submission_id',$res['id']);
        $this->params->set('tgl_submit',$this->ymd);
        if(empty($this->params->key('step_id')))
            $this->params->set('step_id',1);

        /* ticket numerator */
        $cf=new CmFuncts;
        $this->params->set('tiket',$cf->createTicket($this->params->key('code_id')));
        
        $this->params->set('user_id',$this->userdata['id']);
        $this->params->set('approval_id',$this->userdata['atasan_id']);
        
        $this->params->set('sbu_id',$this->userdata['sbu_id']);

        $res=$this->db->insert($this->model,$this->params);
        /* return proses - join */
        $this->data($this->db->id($this->model,$res['id']));
    }



}