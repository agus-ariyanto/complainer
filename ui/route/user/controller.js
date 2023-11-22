define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.home={
            active:true,
        }
        $scope.imageTabs=0;
        $scope.uploadImage={
            close:function(){
                $scope.uploadImage.active=false;    
                if(!$scope.uploadImage.saved) return;
                if($scope.imageTabs==1) 
                    $scope.complainFrm.data.image=$scope.uploadImage.data.url;
                if($scope.imageTabs==2) 
                    $scope.accessFrm.data.image=$scope.uploadImage.data.url;    
                if($scope.imageTabs==3) 
                    $scope.parkirFrm.data.image=$scope.uploadImage.data.url;        
                if($scope.imageTabs==4) 
                    $scope.idcardFrm.data.image=$scope.uploadImage.data.url;        
            }
        }
        $scope.complainFrm={
            uploadImage:function(){
                $scope.imageTabs=1;
                $scope.uploadImage.open();
            }
        }
        $scope.accessFrm={
            uploadImage:function(){
                $scope.imageTabs=2;
                $scope.uploadImage.open();
            }
        }
        $scope.parkirFrm={
            uploadImage:function(){
                $scope.imageTabs=3;
                $scope.uploadImage.open();
            }
        }
        $scope.idcardFrm={
            uploadImage:function(){
                $scope.imageTabs=4;
                $scope.uploadImage.open();
            }
        }
        $scope.pinjamFrm={
            uploadImage:function(){
                $scope.imageTabs=5;
                $scope.uploadImage.open();
            }
        } 
        $scope.overtimeFrm={}
        $scope.profilFrm={}
        $scope.history={}
       
        $loading.active=true;
        $scope.closeAll=function(){
            $scope.complainFrm.close();
            $scope.overtimeFrm.close();
            $scope.pinjamFrm.close(); 
            $scope.parkirFrm.close();
            $scope.accessFrm.close();
            $scope.idcardFrm.close(); 
            $scope.profilFrm.close(); 
        };
        $scope.rate={};
        
        $scope.nav={
            disable:false,
            tabItem:[
                
                {id:0,icon:'home',title:'Home',active:true, init:function(){
                    $scope.closeAll();
                    $scope.home.open();
                }},
                /* lihat model tskode */
                {id:1,icon:'comment-dots',title:'Komplain',active:false, init:function(){
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
                }},
                /* ----- */

                {id:7,icon:'history',title:'Riwayat',active:false, init:function(){
                    $scope.closeAll();
                    $scope.history.open();
                }},
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
        // $scope.nav.disable=!($auth.sbu_id&&$auth.office_id&&$auth.bidang_id&&$auth.atasan_id);
        // $scope.nav.disable=true;
/*end controller*/
        }];
});
