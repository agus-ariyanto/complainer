define(['ui/system/helper'], function(){
    return ['$scope','Helper', function($scope,Helper){

        $scope.active=true;
        $scope.data={};
        
        $scope.submit=function(){
          $scope.saved=true;
          $scope.cancel();
        }
        $scope.bintang=0;
        
      

        $scope.close=function(){
            $scope.active=false;
        }
        $scope.$watch('data.ulasan', function(e){
            $scope.data.ulasan_length='';
            if(e.length>0) 
                $scope.data.ulasan_length=(60-e.length)+' Karakter tersisa';
        });


    }]
});
