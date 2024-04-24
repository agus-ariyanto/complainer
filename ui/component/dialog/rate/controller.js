define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope','Api','Helper', function($scope,Api,Helper){

        $scope.active=false;
        $scope.data={
            star:0,
            ulasan:''
        }
        
        $scope.submit=function(){

          $scope.saved=true;
          $scope.cancel();
        }
        
        $scope.open=function(val){
            $scope.data={
                star:0,
                ulasan:'',
                id:val.id
            }
            $scope.saved=false;
            $scope.active=true;
        }
        $scope.submit=function(){
            Api.Post('proses/rate',$scope.data)
            .then(function(r){
                $scope.saved=true;
                $scope.close();
            });
        }

        $scope.close=function(){
            $scope.active=false;
        }
        $scope.$watch('data.ulasan', function(e){
            $scope.data.ulasan_length='';
            if(e) $scope.data.ulasan_length=(120-e.length)+' Karakter tersisa';
        });


    }]
});
