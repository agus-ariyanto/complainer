define(['ui/system/helper','ui/system/api'], function(){
    return ['$scope','Api', function($scope,Api){

        $scope.active=false;
        $scope.saved=false;
        $scope.data={
            url:''
        };
      

        $scope.open=function(url){
            $scope.data.url=url;
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
    
    


    }]
});
