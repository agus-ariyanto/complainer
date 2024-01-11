define(['ui/system/helper','ui/system/api'], function(){
    return ['$scope','Api', function($scope,Api){

        $scope.active=false;
        $scope.saved=false;
        $scope.data={};
        
        $scope.submit=function(){
            if($scope.data.image=='') return;
            Api.Post('image/post/png',$scope.data)
            .then(function(r){
                if(r.data.success){
                    $scope.data.url=r.data.image;
                    $scope.saved=true;
                    $scope.close();
                }
            });
        }
        $scope.open=function(){
            clearCanvas();
            $scope.data.image='';
            $scope.saved=false;
            $scope.active=true;
        }
        $scope.selectImage=function(){
            $('#photo-upload').click();
        }

        $scope.init=function(){
           
            return;
        }
        $scope.close=function(){
            $scope.active=false;
        }
        function clearCanvas(){
            var canvas = document.getElementById('temp-canvas');
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // capture canvas untuk resize
        function render(src){
            var image = new Image();
            image.onload=function(){
                var c=680;
                var canvas = document.getElementById('temp-canvas');
                var ar=image.width/image.height;
                image.width=c*ar;
                image.height=c;
                canvas.width=image.width;
                canvas.height=image.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0,image.width,image.height);
                $scope.data.image = canvas.toDataURL();
            }
            image.src=src;
        }
    
        $scope.photoOnChange=function(el){
            var f=el.files[0];
            var reader=new FileReader();
            reader.onload=function(res){
                render(res.target.result);
            }
            reader.readAsDataURL(f);
        }
    


    }]
});
