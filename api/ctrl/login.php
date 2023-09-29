<?php
class Login{
    function __construct(){
        global $prefix;
        $a=ucfirst(strtolower($prefix)).'Auth';
        $this->Model=new $a;
        $this->Params=new Params;
        $this->Data=array();
    }

    protected function Ok(){
        $token=$this->Data['token'];
        unset($this->Data['pwd']);
        unset($this->Data['token']);

        $kode=empty($this->Data['unit_id'])||empty($this->Data['bidang_id'])||empty($this->Data['phone'])?0:1;
        header('Content-Type: application/json');
        echo json_encode(array(
            'kode'=>$kode,
            'user'=>$this->Data,
            'token'=>$token,
        ));
        http_response_code(200);
    }

    
    protected function createToken(){
        global $jwt;
        unset($this->Data['pwd']);
        unset($this->Data['token']);
        $token=JWT::encode($this->Data,$jwt['key'],$jwt['alg']);
        $this->Model->colVal('token',$token);
        $this->Model->save($this->Data['id']);
        $this->Data=$this->Model->select($this->Data['id']);
    }

    protected function updateUser(){
        $this->Model->colVal('usr',$this->Params->key('username'));
        $this->Model->colVal('pwd',sha1($this->Params->key('password')));
        $this->Model->save($this->Data['id']);
        $this->Data=$this->Model->select($this->Data['id']);
        return $this->Data;
    }

    function index(){
        // kosong
        if(empty($this->Params->key('username'))|| empty($this->Params->key('password'))) return  http_response_code(403);

        // check database lokal
        $local=$this->local();

        // lokal nggak ada 
        if($local==0){
            echo json_encode(array(
                'error'=>1,
                'ermesg'=>'invalid username or password',
            ));
            http_response_code(200);
            return ;
        } 
        // login oke
        if($local==1)  return $this->Ok();

   /*      $ldap=$this->ldap();

        if($ldap){ 
            $this->updateUser();
            $this->createToken();
            return $this->Ok();
        } 
    */
        http_response_code(403);
    }

     protected function local(){
        $this->Model->andWhere('usr',$this->Params->key('username'));
        $this->Model->limit(1);
        $res=$this->Model->select();
        // echo $this->Model->testQry();
        // tidak ada akun check LDAP
        if(empty(count($res))) return 0;

        $this->Data=$res[0];

        $pwd=sha1($this->Params->key('password'));

        if($this->Data['pwd']==$pwd){
            // bikin token bila tak punya token
            if(empty($this->Data['token']))  $this->createToken();
            return 1;
        }
        // password tidak cocok, check LDAP
        // return 2;
        return 0;
     }


    // check username valid di LDAP
/* 
    protected function ldap(){
        $ico='iconpln.co.id';
        // $host='ldap://10.14.23.75:389';
        $host='ldap://10.14.23.75';
        $port='389';
        $user=explode('@',$this->Params->key('username'))[0];
        // $dn = 'DC=iconpln,DC=co,DC=id';
        $dn = 'uid='.$user.'@'.$ico.',ou=people,dc=iconpln,dc=co,dc=id';
        $pwd=$this->Params->key('password');
        // $ldap=ldap_connect($host) or die('error');
        $ldap=ldap_connect($host,$port) or die('error');
        if($ldap){
            // echo 'connect';

            ldap_set_option(NULL, LDAP_OPT_DEBUG_LEVEL,7);
            ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);
            ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
            // $bind=ldap_bind($ldap,$dn,$pwd);
            $bind=ldap_bind($ldap,$user.'@'.$ico,$pwd);
            if($bind){
                // echo 'binded';
                ldap_unbind($ldap);
                return true;
            }
        }
        return false;
    }
 */
    // otentifikasi header bearer
    function check(){
        // return true;
        $header=getallheaders();
        if(empty($header['Authorization'] || $header['authorization'])) {
            http_response_code(403);
            return false;
        }

        if(empty($header['authorization'])){
            $token=str_replace('Bearer ','',$header['Authorization']);
        } else {
            $token=str_replace('Bearer ','',$header['authorization']);
        }

        $this->Model->andWhere('token',trim($token));
        $this->Model->limit(1);
        $res=$this->Model->select();
        if(empty(count($res))){
            http_response_code(403);
            return false;
        }
        return $res[0];
    }
/*
    function ldaptest(){
        $ico='iconpln.co.id';
        $dn = 'DC=iconpln,DC=co,DC=id';
        $user=explode('@',$this->Params->key('username'))[0];
        $pwd=$this->Params->key('password');
        
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
*/

}
