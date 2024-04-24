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
        $scope.action={
            close:function(){
                $scope.action.active=false;
                if($scope.action.saved)
                $scope.init();
            }
        }
        $scope.confirm={
            close:function(){
                $scope.confirm.active=false;
                if($scope.confirm.saved)
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
            // console.log($auth.user);
             var w={}
             var pic_id=[0,$auth.user.id];

             if($auth.user.grup_id<=2) 
                w={
                    approval_id:{equal:$auth.user.id},
                    step_id:{equal:1},
                    and:1
                }
             if($auth.user.grup_id==3) 
                w={
                    pic_id:{in:pic_id.join(',')},
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
             Api.Post('proses/approve',{id:val.id})
             .then(function(r){
                 $scope.init();
             });
         }
/*
 array(
            'id'=>2,
            'nama'=>'Overtime AC',
        ),
        array(
            'id'=>3,
            'nama'=>'Pinjam Assets',
        ), 
 */
         $scope.follup=function(val){
            if(val.code_id==2||val.code_id==3){
                val.tindakan='Telah dikonfirmasi, Siap dipakai';
                return $scope.confirm.open(val);
            }
            Api.Post('proses/follup',{id:val.id})
            .then(function(r){
                $scope.init();
            });
         }
         $scope.actdone=function(val){
            if(val.code_id>3){
                val.tindakan='Request telah selesai';
                return $scope.confirm.open(val);
            }
            $scope.action.open(val);
         }
       

        /*end controller*/
    }];
});
