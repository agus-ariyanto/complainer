define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
       $scope.profil={
           close:function(){
               if($scope.profil.saved)  {
                var a='login';
                if($auth.user.grup_id=='1') a='admin';
                if($auth.user.grup_id=='2') a='appr';
                if($auth.user.grup_id=='3') a='pic';
                if($auth.user.grup_id=='4') a='user';
                if(!$auth.user.bidang_id||!$auth.user.office_id||!$auth.user.atasan_id) a='profil';
                window.location.href=alt.baseUrl + a;}
            }
       }
/*end controller*/
        }];
});
