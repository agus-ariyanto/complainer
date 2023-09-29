define([''], function(){ return ['$scope',function($scope){
        $scope.active = false;

        $scope.confirmed=false;

        $scope.active=false;
        $scope.data={};
        $scope.reset=function(){
            $scope.data={
                title:'',
                icon:'info',
                color:'secondary',
                body:'',
                confirm:false
            }
            $scope.confirmed=false;
        }

        $scope.open=function(data){
            $scope.reset();
            $scope.data=data;
            $scope.active=true;
        }
        $scope.ok=function(){
            $scope.confirmed=true;
            $scope.cancel();
        }
        $scope.cancel=function(){
            $scope.active=false;
        }
        $scope.confirm=function(data={}){
            $scope.data=data;
            $scope.data.confirm=true;
            $scope.active=true;
        };

    }]
});
