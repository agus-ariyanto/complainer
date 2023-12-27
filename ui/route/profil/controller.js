define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
       $scope.profil={
           close:function(){
               if($scope.profil.saved) window.location.href=alt.baseUrl+'user';
           }
       }
/*end controller*/
        }];
});
