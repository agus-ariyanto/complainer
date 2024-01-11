define(['ui/system/helper'], function(){
    return ['$scope','Helper', function($scope,Helper){

        $scope.active=true;
        $scope.tnlist=['Ganti Sparepart','Ganti Baru','Service'];
        
        $scope.submit=function(){
          $scope.saved=true;
          $scope.cancel();
        }
      

        $scope.close=function(){
            $scope.active=false;
        }


    }]
});
