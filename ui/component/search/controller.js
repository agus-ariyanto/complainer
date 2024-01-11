define(['ui/system/helper','ui/system/api'], function(){
    return ['$scope','Api', function($scope,Api){

        $scope.active=false;
        $scope.saved=false;
        $scope.data={};
        $scope.items=[];
        $scope.search_text='';
       
        
        $scope.open=function(val){
            if($scope.items.length<1) $scope.init();
            $scope.search_text='';
            $scope.data={};
            $scope.saved=false;
            $scope.active=true;
        }

        
        $scope.submit=function(val){
            $scope.data=angular.copy(val);
            $scope.saved=true;
            $scope.close();
        }
       
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.init=function(){
            return;
        }

    }]
});
