define(['ui/system/helper'], function(){
    return ['$scope','Helper', function($scope,Helper){

        $scope.active=false;
        $scope.saved=false;
        $scope.data={
            tahun:Date.today().toString('yyyy'),
            bulanan:1
        };
        $scope.bulanan=1;
        $scope.bulan=Helper.getBulan();

        
        $scope.open=function(bulanan=1){
            $scope.data.bulanan=bulanan;
            $scope.saved=false;
            $scope.active=true;
        }


        $scope.submit=function(){
          $scope.saved=true;
          $scope.cancel();
        }
      

        $scope.cancel=function(){
            $scope.active=false;
        }


    }]
});
