<?php 
class User extends Ctrl{
    function __construct(){
        parent::__construct();
        $this->model='user';
        $this->model_id=$this->query[0];
    }

    function select(){
        $user=$this->userdata;
        unset($user['pwd']);
        unset($user['token']);
        unset($user['usr']);
        $this->data($user);
    }
    function search(){
        parent::select();
    }
}
        
