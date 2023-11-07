<?php

class Login extends Base{

     function __construct(){
         parent::__construct();
         $this->params=new Params;
         $this->addModel('auth');
    }

    //create token untuk auth
    //isi data ldap_bind
    // token jwt diganti pwd
    protected function createToken($id){
         global $jwt;
         $username=$this->params->key('username');
         $password=$this->params->key('password');
         $data=array(
             'id'=>$id,
             'username'=>$username,
            // 'password'=>$pwd,
         );
         $token=JWT::encode($data,$jwt['key'],$jwt['alg']);
         //$pwd=sha1($pwd);
         $this->auth->colVal('pwd',sha1($password));
         $this->auth->colVal('token',$token);
         $this->auth->save($id);
         return $token;
    }

    protected function local(){
        $username=$this->params->key('username');
        $password=$this->params->key('password');
        $this->auth->andWhere('usr',$username);
        $this->auth->andWhere('grup_id',10,'<');
        $this->auth->limit(1);
        $res=$this->auth->select();

         if(count($res)>0){

             $data=$res[0];
             unset($data['token']);
             unset($data['pwd']);

             // email dan password ada di table lokal
             if($res[0]['pwd']==sha1($password)){
                 $token=empty($res[0]['token']) ? $this->createToken($res[0]['id']) : $res[0]['token'];
                 return array(
                     'success'=>1,
                     'userdata'=>$data,
                     'token'=>$token,
                 );
             }

             // email ada tapi password salah
             return array(
                 'success'=>2,
                 'userdata'=>$data,
                 'token'=>0,
             );
         }

         // email dan password tidak ada
         return array(
             'success'=>0,
             'userdata'=>array(),
             'token'=>0,
         );
    }



    protected function ldap(){
        $ico='iconpln.co.id';
        $host='ldap://10.14.23.75:389';
        $dn = 'DC=iconpln,DC=co,DC=id';
        $user=explode('@',$this->params->key('username'))[0];
        $pwd=$this->params->key('password');
        $ldap=ldap_connect($host) or die('error');
        if($ldap){
            ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);
            ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
            $bind=ldap_bind($ldap,$user.'@'.$ico,$pwd);
            if($bind){
                ldap_unbind($ldap);
                return true;
            }
        }
        return false;
      }


      protected function createUser(){
          $this->auth->colVal('usr',$this->params->key('username'));
          $this->auth->colVal('pwd',sha1($this->params->key('password')));
          $this->auth->colVal('grup_id',4);
          
          $id=$this->auth->save();
          $this->createToken($id);
          return $this->auth->select($id);
      }


     function index(){
         $local=$this->local();
         if($local['success']==1) return $this->data($local);

          $ldap=$this->ldap();
          if($ldap){
              if($local['success']==0){
                  $data=$this->createUser();
                  $token = $data['token'];
                  unset($data['pwd']);
                  unset($data['token']);
                  return $this->data(array(
                     'success' =>3,
                     'userdata'=>$data,
                     'token'=>$token,
                  ));
              }
              $local['token']=$this->createToken($local['userdata']['id']);
              return $this->data($local);
          }
          $this->data(array(
            'success'=>0,
            'userdata'=>array(),
            'token'=>0,
        ));
     }

    function check(){
        $this->render(false);

        $header=getallheaders();
        if(empty($header['Authorization'])){
            $this->status(403);
            return false;
        }
        $token=str_replace('Bearer ','',$header['Authorization']);
        $this->auth->andWhere('token',trim($token));
        $this->auth->limit(1);
        $res=$this->auth->select();

        if(count($res)>0) {
            $auth=$res[0];
            unset($auth['pwd']);
            unset($auth['token']);
            return $auth;
        }
        $this->status(403);
        return false;
    }

    function ldaptest(){
        // $ico='iconpln.co.id';
        // $dn = 'DC=iconpln,DC=co,DC=id';
        // $user=explode('@',$this->params->key('email'))[0];
        // $pwd=$this->params->key('password');
        //
        // $ldap=ldap_connect('ldap://'.$ico.':389');
        //  ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);
        //  ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
        //  $bind=ldap_bind($ldap,$user.'@'.$ico,$pwd);
        //  if($bind){
        //      $this->data('Ok');
        //      return true;
        //  }
        //  ldap_unbind($ldap);
    }
}