define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){

            $auth.userlevel(4);
            /* 
            <div alt-component="nav" data-scope="nav"> </div>
            <div alt-component="dashboard" data-scope="dashboard" ng-show="nav.tabItem[0].active"></div>
            <div alt-component="master/unit" data-scope="unit" ng-show="nav.tabItem[1].active"></div>
            <div alt-component="master/bidang" data-scope="bidang" ng-show="nav.tabItem[2].active"></div>
            <div alt-component="master/armada" data-scope="armada" ng-show="nav.tabItem[3].active"></div>
            <div alt-component="master/driver" data-scope="driver" ng-show="nav.tabItem[4].active"></div>
            <div alt-component="master/vendor" data-scope="vendor" ng-show="nav.tabItem[5].active"></div>
            <div alt-component="master/voucher" data-scope="voucher" ng-show="nav.tabItem[6].active"></div>
            <div alt-component="report" data-scope="report" ng-show="nav.tabItem[7].active"></div>
            */
            $scope.dashboard={};
            $scope.unit={};
            $scope.bidang={};
            $scope.armada={};
            $scope.driver={};
            $scope.vendor={};
            $scope.voucher={};
            $scope.report={};
            $scope.account={};

            $scope.nav={
                tabItem:[
                    {id:0,icon:'home',title:'Home',active:true, init:function(){
                        $scope.dashboard.init();
                    }},
                    {id:1,icon:'building',title:'Unit',active:false, init:function(){
                        $scope.unit.init();
                    }},
                    {id:2,icon:'couch',title:'Bidang',active:false, init:function(){
                        $scope.bidang.init();
                    }},
                    {id:3,icon:'car-side',title:'Armada',active:false, init:function(){
                        $scope.armada.init();
                    }},
                    {id:4,icon:'user-nurse',title:'Driver',active:false, init:function(){
                        $scope.driver.init();
                    }},
                    {id:5,icon:'wallet',title:'Vendor',active:false, init:function(){
                        $scope.vendor.init();
                    }},
                    {id:6,icon:'ticket-alt',title:'Voucher',active:false, init:function(){
                        $scope.voucher.init();
                    }},
                    {id:7,icon:'user-friends',title:'Akun',active:false, init:function(){
                        $scope.account.init();
                    }},
                    {id:8,icon:'columns',title:'Report',active:false, init:function(){
                        $scope.report.init();
                    }},
                ],
                interval:function(){
                    // // tiap 5 detik ( lihat /component/nav)
                    // $loading.silent=true;
                    // if($scope.booking.data.id) $scope.booking.init();
                    // // $scope.monitoring.init();
                    // $loading.silent=false;
                    return;
                }
            }
            // $scope.monitoring.init();
            $scope.nav.tabSelected=$scope.nav.tabItem[0];


/*end controller*/
        }];
});
