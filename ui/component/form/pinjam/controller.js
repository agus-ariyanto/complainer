define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.icon='';
        $scope.title='Pinjam Aset';
        $scope.idens=['Lahan','Gedung','Mobil','Motor','Meja','Kursi'];
        $scope.images=[];
        $scope.data={}
        /* overide di parent */
        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.uploadImage=function(){
            return;
        }
        
        $scope.$watch('data.catatan',function(e){
            if(!e) return;
            $scope.data.catatan_length='';
            if(e.length>0) $scope.data.catatan_length=(120-e.length)+' Karakter tersisa';
        });
        $scope.submit=function(){
            $scope.data.tgl_awal=Date.parse($scope.data.awal_tgl).toString('yyyy-MM-dd');
            $scope.data.tgl_akhir=Date.parse($scope.data.akhir_tgl).toString('yyyy-MM-dd');
            $scope.data.image=$scope.images.join(',');
            $scope.data.user_id=$auth.user.id;
            $scope.data.sub_id=$auth.user.sbu_id;
            Api.Post('proses/pinjam',$scope.data)
            .then(function(r){
                $scope.data=r.data;
                $scope.saved=true;
                $scope.close();
            });
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
        $scope.asetDlg={
            close:function(){
                if($scope.asetDlg.saved){
                    $scope.data.aset_nama=$scope.asetDlg.data.nama;
                    $scope.data.aset_id=$scope.asetDlg.data.id;
                }
                $scope.asetDlg.active=false;
            },
            init:function(){
                // if(!$scope.data.office_id) return;
                Api.Get('aset',{
                    order:'nama ASC'
                })
                .then(function(r){
                    $scope.asetDlg.items=r.data;
                });
            }
        }
        $scope.delImage=function(val){
            var i=$scope.images.indexOf(val);
            if(i>=0) $scope.images.splice(i,1);
        }

        
        /*end controller*/
    }];
});
