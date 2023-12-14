define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.title='Kartu ID';

        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        /* overide parent */
        $scope.uploadImage=function(){
            return;
        }

        /*end controller*/
    }];
});
