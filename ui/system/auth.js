alt.modules.auth = angular.module('alt-auth', [])
    .factory('$auth',['$log', function($log){
        // mengambil data token yang disimpan di lokal
        store.set(alt.application + '_token', store.get(alt.application + '_token') || 0);
        store.set(alt.application + '_user', store.get(alt.application + '_user') || {});
        store.set(alt.application + '_init', store.get(alt.application + '_init') || 0);

        // nilai default token 0 bila belum login
        return {
            token: 0,
            init:0,
            user:{},
            setToken: function(token){
                this.token = token;
                store.set(alt.application + '_token', this.token);
            },

            setUser: function(data){
                this.user = data;
                store.set(alt.application + '_user', this.user);
            },

            login: function(data){
                this.setToken(data);
            },
            logout: function(){
                this.token = 0;
                store.set(alt.application + '_token', this.token);
                this.setUser({});
            },
            islogin: function(){
                return this.token != 0;
            },
            userlevel:function(group_id){
                // console.log(group_id);
                // console.log(this.user.grup_id);
                if(this.user.grup_id!= group_id)
                    return window.location.href=alt.baseUrl+alt.loginRoute;
            },
            setInit:function(value){
                this.init=value;
                store.set(alt.application + '_init', value);
            },
            hasinit:function(){
                return this.init!=0;
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
        var token = store.get(alt.application + '_token');
        if(token) {
            $auth.login(token);
            $auth.setUser(store.get(alt.application + '_user'));
            $auth.setInit(store.get(alt.application + '_init'));
        }
    }]);

alt.module('alt-auth', alt.modules.auth);
