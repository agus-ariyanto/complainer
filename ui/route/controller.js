define(['ui/system/api'], function(){
    return ['$scope','$auth','$message','Api',function($scope,$auth,$message,Api){
            $scope.init=function(){
                if($auth.islogin()){
                    var a='login';
                    if($auth.user.grup_id=='1') a='admin';
                    if($auth.user.grup_id=='2') a='appr';
                    if($auth.user.grup_id=='3') a='pic';
                    if($auth.user.grup_id=='4') a='user';
                    if(!$auth.user.bidang_id||!$auth.user.office_id||!$auth.user.atasan_id) a='profil';
                    window.location.href=alt.baseUrl + a;
                }
            }
            
        
        
            $scope.signin=function(){
                $auth.logout();
                $scope.data.username=$scope.data.username.replace('@iconpln.co.id','');
                Api.Post('login',$scope.data)
                .then(function(res){
                    if(res.data.token){
                        var u=res.data.userdata;
                        $auth.login(res.data.token);
                        $auth.setUser(u);
                        $scope.init();
                    }    
                    $message.failed('Salah Username atau Password');
                });
            }
            
            // $scope.dialogAccount={
            //     cancel:function(){
            //         $scope.dialogAccount.active=false;
            //         console.log($scope.dialogAccount.saved);
            //         if($scope.dialogAccount.saved) {
            //             $auth.setUser($scope.dialogAccount.data)
            //             $scope.init();
            //         }
            //     }
            // }
           

    // $scope.init();

/*end controller*/
        }];
});
