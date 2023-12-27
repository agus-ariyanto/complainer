alt.application = 'TemanSapa';
alt.title = 'Teman Sapa';
alt.description = 'Sistem Pelayanan Terpadu Sarana Prasarana';
alt.version = '0.1';
alt.environment = 'development';

alt.serverUrl = '';

var d=Date.today().toString('yyyy.MM.dd');
alt.urlArgs = '_v=' + alt.version+'&t='+d;
alt.routeFolder = 'ui/route';
alt.componentFolder = 'ui/component';
// alt.loginRoute = 'login';
// alt.defaultRoute = 'login';
alt.loginRoute = '';
alt.defaultRoute = '';
alt.secure = {};


/* module disini */
alt.module('ngSanitize');
alt.module('datePicker');
alt.module('720kb.tooltips');
alt.module('ngImgCrop');
// set window title
document.title = alt.title;

// advanced configuration
alt.run(['$rootScope','$auth',
  function($rootScope,$auth){
//       $rootScope.$auth = $auth;
//       $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
//        /*paksa kembali ke login bila belum login */
//        $rootScope.template='';
//        if(currRoute.params.altaction!=alt.defaultRoute){
//            if(!$auth.islogin())
//                 window.location.href = alt.baseUrl + alt.defaultRoute;
//        }
//      });
    $rootScope.menuActive=false;
 }]);
