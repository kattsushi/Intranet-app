'use strict';
var app = angular
  .module('App',['ngRoute','ngAnimate','ngResource'])
  .config(appConfig)
  /*.service('menuService', menuService)
  .controller('menuCtrl', menuCtrl)*/;

function appConfig ($routeProvider, $locationProvider, $interpolateProvider) {
  // configurar rutas
  $routeProvider
    .when('/', {
      templateUrl: 'js/app/views/main.html',
      controller : 'mainCtrl'
    })
    .when('/agenda', {
      templateUrl: 'js/app/views/agenda.html',
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
}
