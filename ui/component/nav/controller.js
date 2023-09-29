define([''], function(){ return ['$scope','$rootScope','$auth',function($scope,$routeScope,$auth){
        $scope.active = false;
        $scope.menuActive=function(val){
            $scope.active=val;
            $routeScope.menuActive=val;
        }
        $scope.smallDevice=false;
        $scope.tab=0;
        $scope.tabSelected={}
        $scope.showNotif=0;
        $scope.notifText='';

        $scope.toTab=function(id){
            var a=$scope.tabItem.map(function(e){
                return e.id;
            }).indexOf(id);

            $scope.tab=a;
            $scope.tabSelected=$scope.tabItem[a];
            for(var i=0;i<$scope.tabItem.length;i++)
                $scope.tabItem[i].active=false;

            $scope.tabItem[a].active=true;
            $scope.tabItem[a].init();
            $scope.menuActive(!$scope.smallDevice);
        }

        $scope.logout=function(){
            $auth.logout();
            window.location.href=alt.baseUrl+alt.loginRoute;

        }
        // 5 detik interval
        $scope.init=function(){
            var box = document.querySelector('#nav-wrapper');
            var width = box.offsetWidth;
            $scope.smallDevice=width<768;
            $scope.menuActive(!$scope.smallDevice);
            setInterval($scope.callInterval,2000);
        }

        // overwrite di parent untuk dijalankan setiap 5 detik
        $scope.interval=function(){
            return;
        }

        $scope.callInterval=function(){
            if($auth.islogin())  $scope.interval();
        }

        // overwrite lihat di route/admin
        $scope.tabItem=[];

        $scope.init();
    }]
});
