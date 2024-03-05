define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
     
        $scope.monitoring={
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            }
        }
        $scope.history={
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            },
            init:function(){
          
             var w={
                 user_id:{equal:$auth.user.id},
                 step_id:{gte:10},
                 and:1
                }
                Api.Get('proses',w)
                .then(function(r){
                    $scope.history.items=r.data;
                    $scope.history.parseImages();
                });      
            }
        }
    
        $scope.nav={
            disable:false,
            tabItem:[
                
                {id:0,icon:'home',title:'Home',active:true, init:function(){}},
                {id:1,icon:'bell',title:'Monitoring',active:false, init:function(){
                    $scope.monitoring.init();
                }},
                {id:2,icon:'history',title:'Riwayat',active:false, init:function(){
                    $scope.history.init();
                }}
            ],
            /* rightItem:[
                {id:0,icon:'user',title:'Profil',init:function(){
                    $scope.profilFrm.open();
                }},
                {id:1,icon:'power-off',title:'Logout',init:function(){
                    console.log('Logout');
                }},
            ], */
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
        $scope.upload={
            close:function(){
                $scope.upload.active=false;
                if($scope.upload.saved){
                    if($scope.home.tab==1) $scope.home.komplain.images.push($scope.upload.data.url);
                    // if($scope.home.tab==2) $scope.home.overtime.images.push($scope.upload.data.url);
                    if($scope.home.tab==3) $scope.home.pinjam.images.push($scope.upload.data.url);
                    if($scope.home.tab==4) $scope.home.akses.images.push($scope.upload.data.url);
                    if($scope.home.tab==5) $scope.home.idcard.images.push($scope.upload.data.url);
                    if($scope.home.tab==6) $scope.home.parkir.images.push($scope.upload.data.url);
                }
            } 
        }
        $scope.home={
            init:function(){
                Api.Get('proses',{
                    user_id:{equal:$auth.user.id},
                    step_id:{lte:3},
                    and:1
                })
                .then(function(r){
                    $scope.home.items=r.data;
                });
            },
            showImg:{
                open:function(val){
                    $scope.showImg.open(val);
                }
            },
            upload:{
                open:function(){
                    $scope.upload.open();
                }
            }
        }        
 
/*end controller*/
        }];
});
