define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
            // data-scope view.html
            $auth.userlevel(2);
            $scope.dashboard={}
            $scope.booking={
                data:{}
            }
            $scope.history={}
            $scope.report={}
            $scope.monitoring={}
            $scope.voucher={}

            $scope.nav={
                tabItem:[
                    {id:0,icon:'home',title:'Home',active:true, init:function(){
                        $scope.dashboard.init();
                    }},
                    {id:1,icon:'book-open',title:'Booking',active:false, init:function(){
                        $scope.booking.init();
                    }},
                    {id:2,icon:'history',title:'History',active:false, init:function(){
                        $scope.history.init();
                    }},
                    // {id:3,icon:'user-check',title:'Approve',active:false, init:function(){
                    //     $scope.approve.init();
                    // }},
                    // {id:4,icon:'laptop',title:'Monitoring',active:false, init:function(){
                    //     $scope.monitoring.init();
                    // }},
                    {id:3,icon:'columns',title:'Report',active:false, init:function(){
                        $scope.report.init();
                    }},
                    {id:4,icon:'ticket-alt',title:'Voucher',active:false, init:function(){
                        $scope.voucher.init();
                    }}
                ],
                interval:function(){
                   // tiap 5 detik ( lihat /component/nav)
                    $loading.silent=true;
                    if($scope.booking.data.id) $scope.booking.init();
                    // $scope.approve.reinit();
                    $loading.silent=false;
                    return;
                }
            }
            $scope.nav.notifClick=function(){
                $scope.nav.toTab(3);
            }
            // $scope.approve.init();
            $scope.nav.tabSelected=$scope.nav.tabItem[0];
/*end controller*/
        }];
});
