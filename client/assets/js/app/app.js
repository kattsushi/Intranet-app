'use strict';
angular
  .module('myApp',['ngRoute'])
  .config(appConfig)
  .service('MyService', MyService)
  .service('menuService', menuService)
  .directive('miItem', miItem)
  .directive('miDirectiva', miDirectiva)
  .controller('menuCtrl', menuCtrl);

function appConfig ($routeProvider , $interpolateProvider) {
  $routeProvider

    .when('/', {
      controller : menuCtrl ,
      controllerAs : 'vm',
      template: '<p> pagina </p>'
    })
    .when('/inicio', {
    })
    .otherwise({
      redirectTo: '/'
    });

  $interpolateProvider
    .startSymbol('{[{')
    .endSymbol('}]}');
}

function miDirectiva () {
  return {
    scope: {},
    controller: function(MyService) {
      this.productos = MyService.getData();
    },
    controllerAs: 'vm',
    template: [
      '<h1>Listado de Productos</h1>',
      '<ul>',
        '<mi-item ng-repeat="producto in vm.productos" data="producto">',
        '</mi-item>',
      '</ul>'
    ].join('')
  }
}

function miItem () {
  return {
    scope: {
      data: '='
    },
    template: [
      '<li>',
        '<strong>{[{ data.titulo }]}</strong>: ',
        '{[{ data.precio | currency }]}',
      '</li>'
    ].join('')
  }
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
