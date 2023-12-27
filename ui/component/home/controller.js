define(['ui/system/api'], function(){ 
    return ['$scope','$rootScope','$auth','Api',function($scope,$routeScope,$auth,Api){

    $scope.komplen={
        active:false,
        icon:'comment-dots',
        title:'Komplen',
        uploadImage:function(){
            $scope.tab=1;
            $scope.upload.open();
        }
    }
    $scope.overtime={
        active:false,
        icon:'business-time',
        title:'Overtime AC',
        uploadImage:function(){
            $scope.tab=2;
            $scope.upload.open();
        }
    }
    $scope.pinjam={
        active:false,
        icon:'laptop-house',
        title:'Pinjam Aset',
        uploadImage:function(){
            $scope.tab=3;
            $scope.upload.open();
        }
    }
    $scope.akses={
        active:false,
        icon:'passport',
        title:'Kartu Akses',
        uploadImage:function(){
            $scope.tab=4;
            $scope.upload.open();
        }
    }

    $scope.idcard={
        active:false,
        icon:'id-badge',
        title:'Kartu ID',
        uploadImage:function(){
            $scope.tab=5;
            $scope.upload.open();
        }
    }
    $scope.parkir={
        active:false,
        icon:'credit-card',
        title:'Kartu Parkir',
        uploadImage:function(){
            $scope.tab=6;
            $scope.upload.open();
        }
    }
    $scope.tab=0;

    $scope.upload={
        close:function(){
            $scope.upload.active=false;
            if($scope.upload.saved){
                if($scope.tab==1) $scope.komplen.data.image=$scope.upload.data.url;
                if($scope.tab==2) $scope.overtime.data.image=$scope.upload.data.url;
                if($scope.tab==3) $scope.pinjam.data.image=$scope.upload.data.url;
                if($scope.tab==4) $scope.akses.data.image=$scope.upload.data.url;
                if($scope.tab==5) $scope.idcard.data.image=$scope.upload.data.url;
                if($scope.tab==6) $scope.parkir.data.image=$scope.upload.data.url;
            }
        }

    }

/* end controller */
    }]
});
