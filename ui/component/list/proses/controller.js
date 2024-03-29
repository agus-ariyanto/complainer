define(['ui/system/api','ui/system/helper'], function(){
    return ['$scope','$auth','$loading','Api','Helper', function($scope,$auth,$loading,Api,Helper){
        $scope.helper=Helper;
        $scope.items=[];
        $scope.showImg={}
        $scope.reject={
            close:function(){
                $scope.reject.active=false;
                if($scope.reject.saved)
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
             var w={}
             if($auth.user.grup_id<2) 
                w={
                    approval_id:{equal:$auth.user.id},
                    step_id:{equal:1},
                    and:1
                }
             if($auth.user.grup_id==3) 
                w={
                    pic_id:{equal:$auth.user.id},
                    step_id:{in:'2,3'},
                    and:1
                }
              Api.Get('proses',w)
              .then(function(r){
                  $scope.items=r.data;
                  $scope.parseImages();
              });      
         }
         $scope.approve=function(val){
             Api.Post('proses/approve/'+val.id)
             .then(function(r){
                 $scope.init();
             });
         }
         $scope.tindaklanjut=function(){
             Api.Post('proses/tindaklanjut'+val.id)
             .then(function(r){
                 $scope.init();
             });
         }
         $scope.tindaklanjut=function(){
            Api.Post('proses/tindaklanjut'+val.id)
            .then(function(r){
                $scope.init();
            });
        }
        $scope.selesai=function(){
            Api.Post('proses/selesai'+val.id)
            .then(function(r){
                $scope.init();
            });
        }

        /*end controller*/
    }];
});
