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
    .when('/inicio', {
      template: '<mi-directiva> hola mundo </mi-directiva>'
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

$('document').on('ready', function(){
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('#aside').pushpin({ top:110, bottom:500 });
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInVpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5hbmd1bGFyXG4gIC5tb2R1bGUoJ215QXBwJyxbJ25nUm91dGUnXSlcbiAgLmNvbmZpZyhhcHBDb25maWcpXG4gIC5zZXJ2aWNlKCdNeVNlcnZpY2UnLCBNeVNlcnZpY2UpXG4gIC5zZXJ2aWNlKCdtZW51U2VydmljZScsIG1lbnVTZXJ2aWNlKVxuICAuZGlyZWN0aXZlKCdtaUl0ZW0nLCBtaUl0ZW0pXG4gIC5kaXJlY3RpdmUoJ21pRGlyZWN0aXZhJywgbWlEaXJlY3RpdmEpXG4gIC5jb250cm9sbGVyKCdtZW51Q3RybCcsIG1lbnVDdHJsKTtcblxuZnVuY3Rpb24gYXBwQ29uZmlnICgkcm91dGVQcm92aWRlciAsICRpbnRlcnBvbGF0ZVByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy9pbmljaW8nLCB7XG4gICAgICB0ZW1wbGF0ZTogJzxtaS1kaXJlY3RpdmE+IGhvbGEgbXVuZG8gPC9taS1kaXJlY3RpdmE+J1xuICAgIH0pXG4gICAgLm90aGVyd2lzZSh7XG4gICAgICByZWRpcmVjdFRvOiAnLydcbiAgICB9KTtcblxuICAkaW50ZXJwb2xhdGVQcm92aWRlclxuICAgIC5zdGFydFN5bWJvbCgne1t7JylcbiAgICAuZW5kU3ltYm9sKCd9XX0nKTtcbn1cblxuZnVuY3Rpb24gbWlEaXJlY3RpdmEgKCkge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7fSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihNeVNlcnZpY2UpIHtcbiAgICAgIHRoaXMucHJvZHVjdG9zID0gTXlTZXJ2aWNlLmdldERhdGEoKTtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogW1xuICAgICAgJzxoMT5MaXN0YWRvIGRlIFByb2R1Y3RvczwvaDE+JyxcbiAgICAgICc8dWw+JyxcbiAgICAgICAgJzxtaS1pdGVtIG5nLXJlcGVhdD1cInByb2R1Y3RvIGluIHZtLnByb2R1Y3Rvc1wiIGRhdGE9XCJwcm9kdWN0b1wiPicsXG4gICAgICAgICc8L21pLWl0ZW0+JyxcbiAgICAgICc8L3VsPidcbiAgICBdLmpvaW4oJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWlJdGVtICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgZGF0YTogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogW1xuICAgICAgJzxsaT4nLFxuICAgICAgICAnPHN0cm9uZz57W3sgZGF0YS50aXR1bG8gfV19PC9zdHJvbmc+OiAnLFxuICAgICAgICAne1t7IGRhdGEucHJlY2lvIHwgY3VycmVuY3kgfV19JyxcbiAgICAgICc8L2xpPidcbiAgICBdLmpvaW4oJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gTXlTZXJ2aWNlICgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXREYXRhOiBnZXREYXRhXG4gIH1cblxuICBmdW5jdGlvbiBnZXREYXRhICgpIHtcbiAgICAgIHZhciBkYXRvcyA9IFtcbiAgICAgICAgeyB0aXR1bG86IFwiSW5pY2lvXCIsIHJ1dGE6IFwiSW5pY2lvXCJ9LFxuICAgICAgICB7IHRpdHVsbzogXCJRdWllbmVzIFNvbW9zXCIsIHJ1dGE6IFwiY29tcGHDsWlhXCIgfSxcbiAgICAgICAgeyB0aXR1bG86IFwiQ29uZmlndXJhY2lvblwiICwgcnV0YSA6IFwiQ29uZmlnXCJ9XG4gICAgICBdO1xuICAgICAgcmV0dXJuIGRhdG9zO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lbnVDdHJsKG1lbnVTZXJ2aWNlKSB7XG4gIHRoaXMudGl0dWxvcyA9IG1lbnVTZXJ2aWNlLmdldERhdGEoKTtcbn1cblxuZnVuY3Rpb24gbWVudVNlcnZpY2UgKCkge1xuICByZXR1cm4ge1xuICAgIGdldERhdGE6IGdldERhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEgKCkge1xuICAgICAgdmFyIGRhdG9zID0gW1xuICAgICAgICB7IHRpdHVsbzogXCJJbmljaW9cIiwgcnV0YTogXCJpbmljaW9cIn0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlF1aWVuZXMgU29tb3NcIiwgcnV0YTogXCJjb21wYcOxaWFcIiB9LFxuICAgICAgICB7IHRpdHVsbzogXCJDb25maWd1cmFjaW9uXCIgLCBydXRhIDogXCJDb25maWdcIn1cbiAgICAgIF07XG4gICAgICByZXR1cm4gZGF0b3M7XG4gIH1cbn1cbiIsIiQoJ2RvY3VtZW50Jykub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcbiAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpO1xuICAkKCcubW9kYWwtdHJpZ2dlcicpLmxlYW5Nb2RhbCgpO1xuICAkKCcjYXNpZGUnKS5wdXNocGluKHsgdG9wOjExMCwgYm90dG9tOjUwMCB9KTtcbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
