define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
            $auth.userlevel(8);
            $scope.monitoring={};
            /* $scope.approve={
                dialog:{
                    active:false,
                    cancel:function(){
                        $scope.approve.init()
                        .then(function(){
                            $scope.approve.dialog.active=false;
                        });
                    }
                },
                table:[],
                booking:[],
                init:function(){
                    var w={
                        step_id:{equal:1},
                        atasan_id:{equal:$auth.user.id},
                        and:1
                    }
                    return Api.Get('booking',w)
                    .then(function(r){
                        $scope.approve.table=[];
                        $scope.approve.booking=[];
                        if(r.data.length){
                            angular.forEach(r.data, function(val){
                                var a={
                                    data:val,
                                    nama_user:val.user_nama
                                };
                                $scope.approve.table.push(a);
                                $scope.approve.booking.push(val);
                            });
                        }
                        $scope.nav.notifText='';
                        $scope.nav.showNotif=0;
                        return true;
                    });
                },
                reinit:function(){
                    if($scope.approve.dialog.active) return;
                    $scope.approve.init()
                    .then(function(){
                        if($scope.approve.booking.length && !$scope.nav.tabItem[1].active){
                            $scope.nav.showNotif=$scope.approve.booking.length;
                            $scope.nav.notifText='Terdapat '+$scope.approve.booking.length+' pengajuan booking yang perlu di-approve';
                        }
                    });
                }
            } */
            $scope.approve={
                dialog:{
                    active:false,
                    cancel:function(){
                        $scope.approve.init()
                        .then(function(){
                            $scope.approve.dialog.active=false;
                        });
                    }
                },
                table:[],
                booking:[],
                init:function(){
                    var w={
                        step_id:{equal:1},
                        atasan_id:{equal:$auth.user.id},
                        order:'id DESC',
                        and:1
                    }
                    return Api.Get('booking',w)
                    .then(function(r){
                        $scope.approve.table=[];
                        $scope.approve.table.length=0;
                        if(r.data.length){
                            var a=[];
                            angular.forEach(r.data, function(val){
                                a.push({
                                    data:val,
                                    nama_user:val.user_nama
                                });
                            });
                            $scope.approve.table=angular.copy(a);
                        }
                        $scope.approve.booking=r.data;
                        $scope.nav.notifText='';
                        $scope.nav.showNotif=0;
                        return true;
                    });
                },
                reinit:function(){
                    if($scope.approve.dialog.active) return;
                    $scope.approve.init()
                    .then(function(){
                        if($scope.approve.booking.length && !$scope.nav.tabItem[0].active){
                            $scope.nav.showNotif=$scope.approve.booking.length;
                            $scope.nav.notifText='Terdapat '+$scope.approve.booking.length+' pengajuan booking yang perlu di-approve';
                        }
                    });
                }
            }

            $scope.dashboard={}

            $scope.nav={
                tabItem:[
                    {id:0,icon:'user-check',title:'Approve',active:true, init:function(){
                        $scope.approve.init();
                    }},
                    {id:1,icon:'laptop',title:'Monitoring',active:false, init:function(){
                        $scope.monitoring.init();
                    }},
                ],
            /*     interval:function(){
                    // tiap 5 detik ( lihat /component/nav)
                    $loading.silent=true;
                    $scope.approve.reinit();
                    $loading.silent=false;
                    return;
                }
            } */
                interval:function(){
                    // tiap 5 detik ( lihat /component/nav)
                    $loading.silent=true;
                    // if($scope.booking.data.id) $scope.booking.init();
                    $scope.approve.reinit();
                    $loading.silent=false;
                    return;
                }
            }

            $scope.nav.notifClick=function(){
                $scope.nav.toTab(0);
            }
            $scope.approve.init();
            $scope.nav.tabSelected=$scope.nav.tabItem[0];

/*end controller*/
        }];
});
