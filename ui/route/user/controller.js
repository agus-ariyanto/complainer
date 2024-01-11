define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.home={
            active:true,
            init:function(){
                Api.Get('proses',{
                    user_id:{equal:$auth.user.id},
                    step_id:{lte:3},
                    and:1
                })
                .then(function(r){
                    $scope.home.items=r.data;
                });
            }
        }
        $scope.monitoring={}
        $scope.closeAll=function(){
            $scope.monitoring.active=false;
            $scope.home.active=false;
        }
        $scope.nav={
            disable:false,
            tabItem:[
                
                {id:0,icon:'home',title:'Home',active:true, init:function(){
                    $scope.closeAll();
                    $scope.home.active=true;
                }},
                /* lihat model tskode */
               /*  {id:1,icon:'comment-dots',title:'Komplain',active:false, init:function(){
                    $scope.closeAll();
                    $scope.complainFrm.open();
                }},
                {id:2,icon:'business-time',title:'Overtime AC',active:false, init:function(){
                    $scope.closeAll();
                    $scope.overtimeFrm.open();
                }},
                {id:3,icon:'laptop-house',title:'Pinjam Asset',active:false, init:function(){
                    $scope.closeAll();
                    $scope.pinjamFrm.open();
                }},
                {id:4,icon:'credit-card',title:'Kartu Parkir',active:false, init:function(){
                    $scope.closeAll();
                    $scope.parkirFrm.open();
                }},
                {id:5,icon:'passport',title:'Kartu Access',active:false, init:function(){
                    $scope.closeAll();
                    $scope.accessFrm.open();
                }},
                {id:6,icon:'id-badge',title:'Kartu ID',active:false, init:function(){
                    $scope.closeAll();
                    $scope.idcardFrm.open();
                }}, */
                /* ----- */

                {id:1,icon:'bell',title:'Monitoring',active:false, init:function(){
                    $scope.closeAll();
                    $scope.monitoring.active=true;
                }},
                {id:2,icon:'history',title:'Riwayat',active:false, init:function(){
                    $scope.closeAll();
                    $scope.history.open();
                }},
                {id:3,icon:'user',title:'Profil',active:false, init:function(){
                    $scope.closeAll();
                    $scope.history.open();
                }},
                {id:4,icon:'power-off',title:'Logout',active:false, init:function(){
                    $scope.closeAll();
                    $scope.history.open();
                }}
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
 
/*end controller*/
        }];
});
