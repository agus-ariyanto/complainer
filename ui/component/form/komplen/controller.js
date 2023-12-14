define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.title='Komplen';
        $scope.data={}
        $scope.open=function(){
            $scope.data={}
            $scope.saved=false;
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.submit=function(){
            $scope.data.user_id=$auth.user.id;
            $scope.data.sub_id=$auth.user.sbu_id;
            Api.Post('proses/complain',$scope.data)
            .then(function(r){
                $scope.data=r.data;
                $scope.saved=true;
                $scope.close();
            });
        }
        
        $scope.uploadImage=function(){
            return;
        }
        $scope.$watch('data.catatan',function(e){
            if(!e) return;
            $scope.data.catatan_length='';
            if(e.length>0) $scope.data.catatan_length=(120-e.length)+' Karakter tersisa';
        });
       

        $scope.officeDlg={
            close:function(){
                if($scope.officeDlg.saved){
                    $scope.data.office_nama=$scope.officeDlg.data.nama;
                    $scope.data.office_id=$scope.officeDlg.data.id;
                    $scope.data.lokasi_nama='';
                    $scope.data.lokasi_id='';
                    $scope.lokasiDlg.init();
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
        $scope.lokasiDlg={
            close:function(){
                if($scope.lokasiDlg.saved){
                    $scope.data.lokasi_nama=$scope.lokasiDlg.data.nama;
                    $scope.data.lokasi_id=$scope.lokasiDlg.data.id;
                }
                $scope.lokasiDlg.active=false;
            },
            init:function(){
                // if(!$scope.data.office_id) return;
                Api.Get('lokasi',{
                    office_id:{equal:$scope.data.office_id},
                    order:'nama ASC'
                })
                .then(function(r){
                    $scope.lokasiDlg.items=r.data;
                });
            }
        }  
        $scope.officeDlg.init();

        /*end controller*/
    }];
});
