alt.modules.auth = angular.module('alt-auth', [])
    .factory('$auth',['$log', function($log){
        // mengambil data token yang disimpan di lokal
        store.set(alt.application + 'a', store.get(alt.application + 'a') || 0);
        store.set(alt.application + 'b', store.get(alt.application + 'b') || 0);

        // nilai default token 0 bila belum login
        return {
            token: 0,
            init:0,
            user:{},
            setToken: function(token){
                this.token = token;
                store.set(alt.application + 'b', this.token);
            },
            setUser: function(data){
                this.user = data;
                var a=btoa(JSON.stringify(data));
                store.set(alt.application + 'a', a);
            },
            getUser: function(){
                var a=JSON.parse(atob(store.get(alt.application + 'a')));
                this.user=a;
            },

            login: function(data){
                this.setToken(data);
            },
            logout: function(){
                this.token = 0;
                store.set(alt.application + 'a', 0);
                store.set(alt.application + 'b', 0);
            },
            islogin: function(){
                return this.token != 0;
            },
            userlevel:function(group_id){
                if(this.user.grup_id!= group_id)
                return window.location.href=alt.baseUrl+alt.loginRoute;
            }
        };
    }])
    .config(['$provide', '$httpProvider', function($provide, $httpProvider){
        $provide.factory('authHttpInterceptor', ['$auth',function($auth){
            return {
                request: function(config){
                    if($auth.islogin()) config.headers['Authorization']='Bearer '+$auth.token;
                    return config;
                }
            };
        }]);

        $httpProvider.interceptors.reverse().push('authHttpInterceptor');
        $httpProvider.interceptors.reverse();
    }])
    .run(['$auth', function($auth){
        var token = store.get(alt.application + 'b');
        if(token) {
            $auth.login(token);
            $auth.getUser();
        }
    }]);

alt.module('alt-auth', alt.modules.auth);
