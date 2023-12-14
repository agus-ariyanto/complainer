define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.title='Overtime AC';
        $scope.data={}
        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.$watch('data.catatan',function(e){
            if(!e) return;
            $scope.data.catatan_length='';
            if(e.length>0) $scope.data.catatan_length=(120-e.length)+' Karakter tersisa';
        });       

        /*end controller*/
    }];
});
