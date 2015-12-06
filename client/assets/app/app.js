'use strict';
var app = angular
  .module('App',['ngRoute','ngAnimate','ngResource','angularSpinner'])
  .config(appConfig)
  /*.service('menuService', menuService)
  .controller('menuCtrl', menuCtrl)*/;

function appConfig ($routeProvider,
                    $locationProvider,
                    $interpolateProvider,
                    usSpinnerConfigProvider) {
  // configurar rutas
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/main.html',
      controller : 'mainCtrl'
    })
    .when('/agenda', {
      templateUrl: 'app/views/agenda.html',
      controller : 'agendaCtrl',
      controllerAs: 'ag'
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
}
