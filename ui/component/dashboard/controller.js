define(['ui/system/api'], function(){
  return ['$scope','Api',function($scope,Api){
      $scope.data={};
      $scope.dialog={
        data:{
          tahun:Date.today().toString('yyyy'),
          bulanan:0,
          bulan:Date.today().toString('MM')
        },
        cancel:function(){
          $scope.dialog.active=false;
          if($scope.dialog.saved){
            $scope.init();
          }
        }
      }
      $scope.init=function(){
        Api.Get('booking/dashboard',$scope.dialog.data)
        .then(function(r){
          $scope.data=r.data;
          $scope.bar('barChart');// canvas id="barChart"
          $scope.line('lineChart');// canvas id="lineChart"
          $scope.pie('pieChart'); // canvas id="pieChart"
        });
      }
      $scope.init();
      $scope.pie=function(val){
          new Chart(val, {
            type: 'pie',
            data: {
              labels: $scope.data.label,
              datasets: [{
                backgroundColor: ['#FF6384','#FFC107','#4BC0C0'],
                // borderColor: 'silver',
                data: $scope.data.count
              }]
            },
            options: {
              responsive: true,
              title: {
                display: false,
                text: $scope.data.title
              },
              legend: {
                display:true,
                position: 'top',
              }
            }
          });
        
      }
      $scope.bar=function(val){
        new Chart(val, {
          type: 'bar',
          data: {
            labels: $scope.data.items_x,
            datasets: [{
              backgroundColor: '#36A2EB',
              data: $scope.data.items_y
            }]
          },
          options: {
            responsive: true,
            legend: {display: false},
            title: {
              display: false,
              text: 'Total Booking'
            }
          }
        });

      }
  
       $scope.line=function(val){
             new Chart(val, {
               type: 'line',
               data: {
                 labels: $scope.data.items_x,
                 datasets: [{
                   label:'Voucher',
                   data: $scope.data.voucher,
                   borderColor:'#FF6384',
                   borderWidth:1,
                   fill: false
                 },
                 {
                   label:'Internal',
                   data: $scope.data.internal,
                   borderColor: '#FFC107',
                   borderWidth:1,
                   fill: false
                 },
                 {
                   label:'Alokasi', 
                   data:$scope.data.alokasi,
                   borderColor: '#4BC0C0',
                   borderWidth:1,
                   fill: false
                 }]
               },
               options: {
                responsive: true,
                legend: {
                  display:true,
                  position: 'top',
                }
              }
             });
       }

       

    }]
});
