define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.images=[];
        $scope.data={}
        $scope.title='Kartu ID';

        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        /* overide parent */
        $scope.uploadImage=function(){
            return;
        }
        $scope.delImage=function(val){
            var i=$scope.images.indexOf(val);
            if(i>=0) $scope.images.splice(i,1);
        }
        $scope.submit=function(){
            $scope.data.image=$scope.images.join(',');
            $scope.data.user_id=$auth.user.id;
            $scope.data.sub_id=$auth.user.sbu_id;
            $scope.data.identitas='kartu id';
            
            Api.Post('proses/idcard',$scope.data)
            .then(function(r){
                $scope.data=r.data;
                $scope.saved=true;
                $scope.close();
            });
        }

        /*end controller*/
    }];
});
