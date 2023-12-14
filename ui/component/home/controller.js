define([''], function(){ return ['$scope','$rootScope','$auth',function($scope,$routeScope,$auth){

    $scope.komplen={
        active:false,
        icon:'comment-dots',
        title:'Komplen'
    }
    $scope.overtime={
        active:false,
        icon:'business-time',
        title:'Overtime AC'
    }
    $scope.pinjam={
        active:false,
        icon:'laptop-house',
        title:'Pinjam Aset'
    }
    $scope.akses={
        active:false,
        icon:'passport',
        title:'Kartu Akses'
    }
    $scope.idcard={
        active:false,
        icon:'id-badge',
        title:'Kartu ID'
    }
    $scope.parkir={
        active:false,
        icon:'credit-card',
        title:'Kartu Parkir'
    }

    
/* end controller */
    }]
});
