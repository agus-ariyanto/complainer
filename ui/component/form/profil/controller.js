define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.title='';
        $scope.message='Testing';
        $scope.data=angular.copy($auth.user);
        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        $scope.sbuDlg={
            close:function(){
                if($scope.sbuDlg.saved) {
                    $scope.data.sbu_id=$scope.sbuDlg.data.id;
                    $scope.data.sbu_nama=$scope.sbuDlg.data.nama;
                    $scope.officeDlg.init();
                }
                $scope.sbuDlg.active=false;
            },
            init:function(){
                $scope.sbuDlg.getData('sbu',{order:'id ASC'});
            }
        }
        $scope.officeDlg={
            close:function(){
                if($scope.officeDlg.saved) {
                    $scope.data.office_id=$scope.officeDlg.data.id;
                    $scope.data.office_nama=$scope.officeDlg.data.nama;
                }
                $scope.officeDlg.active=false;
            },
            init:function(){
                $scope.officeDlg.getData('office',{sbu_id:{equal:$scope.data.sbu_id}});
            }
        }
        $scope.bidangDlg={
            close:function(){
                if($scope.bidangDlg.saved) {
                    $scope.data.bidang_id=$scope.bidangDlg.data.id;
                    $scope.data.bidang_nama=$scope.bidangDlg.data.nama;
                }
                $scope.bidangDlg.active=false;
            },
            init:function(){
                $scope.bidangDlg.getData('bidang',{order:'id ASC'});
            }
        }
        $scope.atasanDlg={
            close:function(){
                if($scope.bidangDlg.saved) {
                    $scope.data.atasan_id=$scope.atasanDlg.data.id;
                    $scope.data.atasan_nama=$scope.atasanDlg.data.nama;
                }
                $scope.atasanDlg.active=false;
            },
            init:function(){
               $scope.atasanDlg.getData('user',{grup_id:{equal:2},order:'nama ASC'});
            }
        }
        $scope.$watch('data.nama',function(e){
            if(e) $scope.data.nama=e.toUpperCase();
        });

        $scope.submit=function(){
            $scope.data.nama=$scope.data.nama.toUpperCase();
            Api.Put('user',$auth.user.id,$scope.data)
            .then(function(r){
                return Api.Get('user/'+$auth.user.id,{});
            })
            .then(function(r){
                $auth.setUser(r.data);
                window.location.reload();
            });
        }
        

        /*end controller*/
    }];
});
