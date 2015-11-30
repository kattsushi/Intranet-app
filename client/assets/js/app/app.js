'use strict';
var app = angular
  .module('App',['ngRoute'])
  .config(appConfig)
  /*.service('menuService', menuService)
  .controller('menuCtrl', menuCtrl)*/;

function appConfig ($routeProvider, $locationProvider, $interpolateProvider) {
  // configurar rutas
  $routeProvider
    .when('/', {
      template: '<p> pagina </p>'
    })
    .when('/inicio', {
      template: '<p> pagina 2 </p>'
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
}
