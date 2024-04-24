define(['ui/system/helper','ui/system/api'], function(){
    return ['$scope','$auth','Helper','Api', function($scope,$auth, Helper,Api){

        $scope.active=false;
        $scope.saved=false;
        $scope.data={}
        $scope.open=function(val){
            $scope.data={
                rejectlog:'',
                id:val.id,
                grup_id:$auth.user.grup_id
            };
            $scope.saved=false;
            $scope.active=true;
        }
        
        $scope.submit=function(){
            Api.Post('proses/reject',$scope.data)
            .then(function(r){
                $scope.saved=true;
            }); 
            $scope.saved=true;
            $scope.close();
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.$watch('data.rejectlog', function(e){
            $scope.data.rejectlog_length='';
            if(e) $scope.data.rejectlog_length=(200-e.length)+' Karakter tersisa';
        });

    }]
});
