define(['ui/system/helper','ui/system/api'], function(){
    return ['$scope','Api', function($scope,Api){

        $scope.active=false;
        $scope.saved=false;
        $scope.data={};
        $scope.items=[
            {id:1,nama:'Mampang'},
            {id:2,nama:'Jamsostek'},
            {id:3,nama:'Gandul'},
            {id:4,nama:'Cawang'}
        ];
        $scope.search_text='';
       
        
        $scope.open=function(val){
            $scope.search_text='';
            $scope.data={};
            $scope.saved=false;
            $scope.active=true;
        }

        
        $scope.submit=function(val){
            $scope.data=angular.copy(val);
            $scope.saved=true;
            $scope.close();
        }
        $scope.init=function(){
            /* 
            overide parent 
            Api.Get(url);
            */
            return;
        }
        $scope.close=function(){
            $scope.active=false;
        }


    }]
});
