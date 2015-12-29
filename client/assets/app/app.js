'use strict';
var app = angular
  .module('App', [
      'ngAnimate',
      'ngAria',
      'ngResource',
      'ngMaterial',
      'ngRoute',
      'ngCookies',
      'angularSpinner'
  ])
  .config(['$routeProvider',
           '$locationProvider',
           '$interpolateProvider',
           'usSpinnerConfigProvider',
           '$mdThemingProvider',
           '$mdIconProvider'
    ,appConfig])

    // Validacion de usuarios con cookies

  .run(['$rootScope',
        '$location',
        '$cookieStore'
    ,appRun]);



function appRun ($rootScope,
                 $location,
                 $cookieStore) {
 // Validacion de usuario en las rutas de la app
 $rootScope.$on('$routeChangeStart', function(event, next, current) {
   if ($cookieStore.get('estaConectado') == false || $cookieStore.get('estaConectado') == null) {
     if(next.templateUrl == 'views/tareas.html' || next.templateUrl == 'views/empleados.html' ) {
       $location.path('/inicio');
     }
   }
   else {
     var usuario = $cookieStore.get('usuario');

     if(next.templateUrl == 'views/inicio.html' || usuario.puesto != 1) {
       $location.path('/tareas');
     }
   }
 })
}


function appConfig ($routeProvider,
                    $locationProvider,
                    $interpolateProvider,
                    usSpinnerConfigProvider,
                    $mdThemingProvider,
                    $mdIconProvider) {
  // configurar rutas
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller : 'mainCtrl',
      constrollerAs: 'vm'
    })
    .when('/agenda', {
      templateUrl: 'app/agenda/agenda.html',
      controller : 'agendaCtrl',
      controllerAs: 'ag'
    })
    .when('/inicio',{
      templateUrl: '/app/inicio/inicio.html',
      controller : 'inicioCtrl',
      controllerAs: 'ini'
    })
    .otherwise({
      redirectTo: '/'
    });

  // Configuracion de rutas del navegador

  $locationProvider.hashPrefix('!');

  // confifurar sintaxis de instancia

  $interpolateProvider
    .startSymbol('{[{')
    .endSymbol('}]}');

  // configurar spinner de carga

  usSpinnerConfigProvider.setDefaults({
      lines: 7 // The number of lines to draw
    , length: 32 // The length of each line
    , width: 38 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 0.75 // Scales overall size of the spinner
    , corners: 0.3 // Corner roundness (0..1)
    , color: '#000' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 0.5 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: true // Whether to render a shadow
    , hwaccel: true // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
  })

  //Configuracion de Angular-Material

  $mdIconProvider
    .defaultIconSet("../svg/avatars.svg", 128)
    .icon("menu"       , "../svg/menu.svg"        , 24)
    .icon("share"      , "../svg/share.svg"       , 24)
    .icon("google_plus", "../svg/google_plus.svg" , 512)
    .icon("hangouts"   , "../svg/hangouts.svg"    , 512)
    .icon("twitter"    , "../svg/twitter.svg"     , 512)
    .icon("phone"      , "../svg/phone.svg"       , 512);
    //-------------
  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue',{'default':'900'})
    .accentPalette('blue-grey')
    .warnPalette('red');

}
