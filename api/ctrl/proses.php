<?php 
class Proses extends Ctrl{
    function __construct(){
        parent::__construct();
        $this->model='proses';
        $this->model_id=$this->query[0];
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
    function complain(){
        $this->setCode(1);
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
    function parkir(){
        $this->setCode(4);
        $this->index();
    }
    function access(){
        $this->setCode(5);
        $this->index();
    }
    function idcard(){
        $this->setCode(6);
        $this->index();
    }
    function insert(){
        /* item detail */
        $res=$this->db->insert('submission',$this->params);

        $this->params->set('submission_id',$res['id']);
        $this->params->set('step_id',1);
        $this->params->set('user_id',$this->userdata['id']);
        $this->params->set('sbu_id',$this->userdata['sbu_id']);
        $res=$this->db->insert($this->model,$this->params);
        /* return proses - join */
        $this->data($this->db->id($this->model,$res['id']));
    } 

}