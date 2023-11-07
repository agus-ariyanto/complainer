define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.title='';
        $scope.icon='';
        $scope.data={};
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
                }
                $scope.sbuDlg.active=false;
            }
        }
        $scope.officeDlg={
            close:function(){
                if($scope.officeDlg.saved) {
                    $scope.data.office_id=$scope.officeDlg.data.id;
                    $scope.data.office_nama=$scope.officeDlg.data.nama;
                }
                $scope.officeDlg.active=false;
            }
            
        }
        $scope.bidangDlg={
            close:function(){
                if($scope.bidangDlg.saved) {
                    $scope.data.bidang_id=$scope.bidangDlg.data.id;
                    $scope.data.bidang_nama=$scope.bidangDlg.data.nama;
                }
                $scope.bidangDlg.active=false;
            }
        }

        /*end controller*/
    }];
});
