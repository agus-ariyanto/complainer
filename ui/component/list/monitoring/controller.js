define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope','$auth','$loading','Api','Helper', function($scope,$auth,$loading,Api,Helper){
        $scope.helper=Helper;
        $scope.items=[];
        $scope.showImg={}
        $scope.rate={
            close:function(){
                $scope.rate.active=false;
                if($scope.rate.saved)
                    $scope.init();
            }
        }

        $scope.parseImages=function(val){
            for(var i=0;i<$scope.items.length;i++){
                $scope.items[i].images=[];
                if($scope.items[i].submission_image){
                    $scope.items[i].images=$scope.items[i].submission_image.split(',');
                }
            }
        }
         $scope.init=function(){
             var w={
                 user_id:{equal:$auth.user.id},
                 step_id:{lte:4},
                 and:1
                }
             if($auth.user.grup_id<2) 
                w={
                    approval_id:{equal:$auth.user.id},
                    step_id:{lte:4},
                    and:1
                }
             if($auth.user.grup_id==3) 
                w={
                    pic_id:{equal:$auth.user.id},
                    step_id:{lte:4},
                    and:1
                }
              Api.Get('proses',w)
              .then(function(r){
                  $scope.items=r.data;
                  $scope.parseImages();
              });      
         }

        /*end controller*/
    }];
});
