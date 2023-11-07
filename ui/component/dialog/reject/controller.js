define(['ui/system/helper'], function(){
    return ['$scope','Helper', function($scope,Helper){

        $scope.active=true;
        
        $scope.submit=function(){
          $scope.saved=true;
          $scope.cancel();
        }
        $scope.bintang=0;
        
      

        $scope.close=function(){
            $scope.active=false;
        }


    }]
});
