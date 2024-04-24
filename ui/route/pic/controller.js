define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
    
        $scope.monitoring={
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            }
        }
        $scope.proses={
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            }
        }
        $scope.showImg={

        }
        $scope.nav={
            disable:false,
            tabItem:[
                
                {id:0,icon:'user-check',title:'Proses',active:true, init:function(){
                    $scope.proses.init();
                }},
          
                {id:1,icon:'bell',title:'Monitoring',active:false, init:function(){
                    $scope.monitoring.init();
                }},
                {id:2,icon:'user-clock',title:'Riwayat User',active:false, init:function(){
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
        setTimeout(function(){
            $scope.proses.init();
        },1000);
        $scope.nav.tabSelected=$scope.nav.tabItem[0];
        $scope.showImg={}
 
/*end controller*/
        }];
});
