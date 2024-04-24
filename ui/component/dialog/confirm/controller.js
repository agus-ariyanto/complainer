define(['ui/system/helper','ui/system/api'], function(){
    return ['$scope','Helper','Api', function($scope,Helper,Api){

        $scope.active=false;
        $scope.data={}
        $scope.submit=function(){
            Api.Post('proses/action',$scope.data)
            .then(function(r){
                $scope.saved=true;
                $scope.close();
            });
        }
        $scope.open=function(val){
            $scope.data={
                id:val.id,
                tindakan:val.tindakan
            }
            $scope.saved=false;
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.$watch('data.catatan', function(e){
            $scope.data.catatan_length='';
            if(e) $scope.data.catatan_length=(200-e.length)+' Karakter tersisa';
        });
    }]
});
