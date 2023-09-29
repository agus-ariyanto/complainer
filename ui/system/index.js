define([], function(){
    alt.factory('System', ['$api','$loading',  function($api,$loading){
        return function(url){
            return $api(url, '', {
                connect: function(params){
                    $loading.show();
                },
                success: function(response){
                    $loading.close();
                },
                error: function(error, params, deferred, iscancelled){
                    $loading.close();
                }
            });
        };
    }]);
});
