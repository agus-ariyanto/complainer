define(['ui/system/helper'], function(){
    return ['$scope','Helper', function($scope,Helper){

        $scope.active=false;
        $scope.saved=false;
        $scope.id='';
        $scope.open=function(val){
            $scope.data={};
            $scope.id=val.id;
            $scope.saved=false;
            $scope.active=true;
        }
        
        $scope.submit=function(){
            Api.Post('proses/reject'+$scope.id,$scope.data)
            .then(function(r){
                $scope.saved=true;
            });
            $scope.close();
        }
        $scope.close=function(){
            $scope.active=false;
        }

    }]
});
