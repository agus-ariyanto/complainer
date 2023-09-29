var message = function(){
    if(typeof alt.modules.message !== 'undefined')
        return;

    alt.modules.message = angular.module('alt-message', [])
        .factory('$message', ['$rootScope',  function($rootScope) {
            return {
                success:function(txt){
                    txt=txt||'Data berhasil dikirim';
                    this.open({
                        icon:'handshake',
                        title:'Sukses',
                        body:txt,
                        color:'success'
                    });

                },
                failed:function(txt){
                    txt=txt||'Tak bisa mengirim data';
                    this.open({
                        icon:'ban',
                        title:'Gagal',
                        body:txt,
                        color:'danger'
                    });
                },
                error:function(txt){
                    txt=txt||'Check network';
                    this.open({
                        icon:'globe',
                        title:'Error',
                        body:txt,
                        color:'danger'
                    });
                },
                info:function(txt){
                    txt=txt||'Tidak ada info';
                    this.open({
                        icon:'info',
                        body:txt,
                        title:'Info',
                        color:'info'
                    });
                },
                open: function(data){
                    $rootScope.$message.open(data);
                },
                cancel: function(){
                    $rootScope.$message.cancel();
                },
                confirm:function(data){
                    txt=txt||'Check network';
                    this.open
                    $rootScope.$message.confirm({
                        icon:'question',
                        title:'Confirm',
                        body:txt,
                        color:'secondary'
                    });
                }
            };
        }])
        .run(['$rootScope', '$message', function($rootScope, $message){
            $rootScope.$message = {};
        }]);

    alt.module('alt-message', alt.modules.message);
};

if(typeof define !== 'undefined') {
    define([], function () {
        message();
    });
}else{
    message();
}
