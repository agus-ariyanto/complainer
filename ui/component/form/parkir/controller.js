define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.title='Kartu Parkir';
        $scope.images=[];
        $scope.data={}
        $scope.idens=['Sepeda','Motor','Mobil','Bus','Truck'];
        /* overide parent */
        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.uploadImage=function(){
            return;
        }
        $scope.officeDlg={
            close:function(){
                if($scope.officeDlg.saved){
                    $scope.data.office_nama=$scope.officeDlg.data.nama;
                    $scope.data.office_id=$scope.officeDlg.data.id;
                }   
                $scope.officeDlg.active=false;
            },
            init:function(){
                Api.Get('office',{
                    sbu_id:{equal:$auth.user.sbu_id}
                })
                .then(function(r){
                    $scope.officeDlg.items=r.data;
                });
            }
        }
        $scope.submit=function(){
            $scope.data.user_id=$auth.user.id;
            $scope.data.sub_id=$auth.user.sbu_id;
            $scope.data.identitas='kartu parkir';
            Api.Post('proses/parkir',$scope.data)
            .then(function(r){
                $scope.data=r.data;
                $scope.saved=true;
                $scope.close();
            });
        }
      
        $scope.officeDlg.init();
        /*end controller*/
    }];
});
