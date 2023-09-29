define(['ui/system/api'], function(){
    return ['$scope','$auth','$message','Api',function($scope,$auth,$message,Api){
            $scope.init=function(){
                if($auth.islogin()){
                    var a='login';
                    if($auth.user.grup_id=='1') a='a';
                    if($auth.user.grup_id=='2') a='p';
                    if($auth.user.grup_id=='3') a='o';
                    window.location.href=alt.baseUrl + a;
                }
            }
            
        
        
            $scope.signin=function(){
                $auth.logout();
                $scope.data.username=$scope.data.username.replace('@iconpln.co.id','');
                Api.Post('login',$scope.data)
                .then(function(res){
                    if(res.data.token){
                        var u=res.data.user;
                        $auth.login(res.data.token);
                        if(u.bidang_id==0||u.unit_id==0) {
                            $scope.dialogAccount.open(u,false);
                            return ;
                        }
                        $auth.setUser(u);
                        $scope.init();
                        return;
                    }
                    $message.failed('Salah Username atau Password');
                });
            }
            
            $scope.dialogAccount={
                cancel:function(){
                    $scope.dialogAccount.active=false;
                    console.log($scope.dialogAccount.saved);
                    if($scope.dialogAccount.saved) {
                        $auth.setUser($scope.dialogAccount.data)
                        $scope.init();
                    }
                }
            }
           

    // $scope.init();

/*end controller*/
        }];
});
