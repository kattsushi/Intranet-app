'use strict';
angular
  .module('myApp',['ngRoute'])
  .config(appConfig)
  .service('MyService', MyService)
  .service('menuService', menuService)
  .controller('menuCtrl', menuCtrl);

function appConfig ($routeProvider, $locationProvider, $interpolateProvider) {
  // configurar rutas
  $routeProvider
    .when('/', {
      controller : menuCtrl ,
      controllerAs : 'vm',
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


function MyService () {
  return {
    getData: getData
  }

  function getData () {
      var datos = [
        { titulo: "Inicio", ruta: "Inicio"},
        { titulo: "Quienes Somos", ruta: "compañia" },
        { titulo: "Configuracion" , ruta : "Config"}
      ];
      return datos;
  }
}

function menuCtrl(menuService) {
  this.titulos = menuService.getData();
}

function menuService () {
  return {
    getData: getData
  }

  function getData () {
      var datos = [
        { titulo: "Inicio", ruta: "inicio"},
        { titulo: "Quienes Somos", ruta: "compañia" },
        { titulo: "Configuracion" , ruta : "Config"}
      ];
      return datos;
  }
}
