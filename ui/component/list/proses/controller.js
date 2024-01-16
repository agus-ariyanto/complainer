define(['ui/system/api'], function(){
    return ['$scope','$auth','$loading','Api',function($scope,$auth,$loading,Api){
        $scope.active=false;
        $scope.saved=false;
        $scope.title='';
        $scope.icon='';
        $scope.items=[];
        $scope.showImg={
            open:function(url){
                console.log('click');
            },
            active:true
        }
        $scope.open=function(){
            $scope.active=true;
        }
        $scope.close=function(){
            $scope.active=false;
        }

        $scope.parseImages=function(){
            if($scope.items.length>0){
                for(var i=0;i<$scope.items.length;i++){
                    if($scope.items[i].image)
                         $scope.items[i].images=$scope.items[i].image.split(',');
                }
            }
         }
         $scope.init=function(){
 
         }

        /*end controller*/
    }];
});
