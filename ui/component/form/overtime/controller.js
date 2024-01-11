define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.title='Overtime AC';
        $scope.data={}
        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
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
        $scope.submit=function(){
            $scope.data.jam_awal=Date.parse($scope.data.awal_jam).toString('HH:mm');
            $scope.data.jam_akhir=Date.parse($scope.data.akhir_jam).toString('HH:mm');
            $scope.data.tgl_awal=Date.parse($scope.data.awal_tgl).toString('yyyy-MM-dd');
            $scope.data.tgl_akhir=Date.parse($scope.data.akhir_tgl).toString('yyyy-MM-dd');

            // return console.log($scope.data);
            $scope.data.user_id=$auth.user.id;
            $scope.data.sub_id=$auth.user.sbu_id;
            
            Api.Post('proses/overtime',$scope.data)
            .then(function(r){
                $scope.data=r.data;
                $scope.saved=true;
                $scope.close();
            });
        } 
        $scope.delImage=function(val){
            var i=$scope.images.indexOf(val);
            if(i>=0) $scope.images.splice(i,1);
        }
      

        /*end controller*/
    }];
});
