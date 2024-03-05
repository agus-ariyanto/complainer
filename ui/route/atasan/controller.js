define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
    
        $scope.monitoring={
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            }
        }
        $scope.approval={
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            }
        }

        $scope.nav={
            disable:false,
            tabItem:[
                
                {id:0,icon:'user-check',title:'Approval',active:true, init:function(){}},
                {id:1,icon:'bell',title:'Monitoring',active:false, init:function(){}},
                {id:2,icon:'th-list',title:'Report',active:false, init:function(){}},
            ],
            rightItem:[
                {id:0,icon:'user',title:'Profil',init:function(){
                    $scope.profilFrm.open();
                }},
                {id:1,icon:'power-off',title:'Logout',init:function(){
                    console.log('Logout');
                }},
            ],
            interval:function(){
/* 
               tiap 5 detik ( lihat /component/nav)
                $loading.silent=true;
                if($scope.booking.data.id) $scope.booking.init();
                $scope.approve.reinit();
                $scope.approve.listdata.init();
                $loading.silent=false;
                return;
 */                
            }
        }
        $scope.nav.tabSelected=$scope.nav.tabItem[0];
        $scope.showImg={}
 
/*end controller*/
        }];
});
