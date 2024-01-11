<?php

class Login extends Base{

     function __construct(){
         parent::__construct();
         $this->params=new Params;
         $this->addModel('auth');
         $this->db=new DbJoin;
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
        //  $this->auth->colVal('pwd',sha1($password));
         $this->auth->colVal('token',$token);
         $this->auth->save($id);
         return $token;
    }

    protected function createUser(){
        $this->auth->colVal('usr',$this->params->key('username'));
        $this->auth->colVal('pwd',sha1($this->params->key('password')));
        $this->auth->colVal('grup_id',4);
        $this->auth->colVal('nama',strtoupper(str_replace('.',' ',$this->params->key('username'))));
        $id=$this->auth->save();
        $token=$this->createToken($id);
        $userdata=$this->db->id('user',$id);
        return array(
            'token'=>$token,
            'userdata'=>$userdata,
        );
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
             /* unset($data['token']);
             unset($data['pwd']); */
             $userdata=$this->db->id('user',$data['id']);
             // email dan password ada di table lokal
             if($res[0]['pwd']==sha1($password)){
                 $token=empty($res[0]['token']) ? $this->createToken($res[0]['id']) : $res[0]['token'];
                 $userdata=$this->db->id('user',$res[0]['id']);
                 return array(
                     'success'=>1,
                     'userdata'=>$userdata,
                     'token'=>$token,
                 );
             }

             // email ada tapi password salah
             return array(
                 'success'=>2,
                 'userdata'=>$userdata,
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




     function index(){
         $local=$this->local();
         if($local['success']==1) 
             return $this->data($local);
          $ldap=$this->ldap();
          if($ldap){
              if($local['success']==0){
                  $data=$this->createUser();
                  $data['success']=3;
                /*    $token = $data['token'];
                   $userdata=$this->userid($data['id']);   */
                  return $this->data($data);
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

/*     
    function ldaptest(){
        $ico='iconpln.co.id';
        $dn = 'DC=iconpln,DC=co,DC=id';
        $user=explode('@',$this->params->key('email'))[0];
        $pwd=$this->params->key('password');
        
        $ldap=ldap_connect('ldap://'.$ico.':389');
         ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);
         ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
         $bind=ldap_bind($ldap,$user.'@'.$ico,$pwd);
         if($bind){
             $this->data('Ok');
             return true;
         }
         ldap_unbind($ldap);
    }
    function tabletest(){
        $a=array('action','auth','bidang','code','grup','lokasi','office','proses','rate','sbu','step','submission');
        $b=array();
        foreach($a as $value){
            $this->addModel($value);
            $b[]=$this->$value->testQry();
        }
        $this->data($b);
    }
    function ticket(){
        
        
        $cm=new CmFuncts;
        $this->data($cm->createTicket());
    }
 */

}

