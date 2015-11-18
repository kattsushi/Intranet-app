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
      template: '<mi-directiva></mi-directiva>'
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
        { titulo: "Informacion General", ruta: "info" },
        { titulo: "Productos", ruta: "productos"},
        { titulo: "Area Administrativa", ruta: "administracion",
          titulo: "Configuracion" , ruta : "Config"}
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
        { titulo: "Inicio", ruta: "Inicio"},
        { titulo: "Quienes Somos", ruta: "compañia" },
        { titulo: "Informacion General", ruta: "info" },
        { titulo: "Productos", ruta: "productos"},
        { titulo: "Area Administrativa", ruta: "administracion",
          titulo: "Configuracion" , ruta : "Config"}
      ];
      return datos;
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhclxuICAubW9kdWxlKCdteUFwcCcsWyduZ1JvdXRlJ10pXG4gIC5jb25maWcoYXBwQ29uZmlnKVxuICAuc2VydmljZSgnTXlTZXJ2aWNlJywgTXlTZXJ2aWNlKVxuICAuc2VydmljZSgnbWVudVNlcnZpY2UnLCBtZW51U2VydmljZSlcbiAgLmRpcmVjdGl2ZSgnbWlJdGVtJywgbWlJdGVtKVxuICAuZGlyZWN0aXZlKCdtaURpcmVjdGl2YScsIG1pRGlyZWN0aXZhKVxuICAuY29udHJvbGxlcignbWVudUN0cmwnLCBtZW51Q3RybCk7XG5cbmZ1bmN0aW9uIGFwcENvbmZpZyAoJHJvdXRlUHJvdmlkZXIgLCAkaW50ZXJwb2xhdGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAgIC53aGVuKCcvJywge1xuICAgICAgdGVtcGxhdGU6ICc8bWktZGlyZWN0aXZhPjwvbWktZGlyZWN0aXZhPidcbiAgICB9KTtcbiAgJGludGVycG9sYXRlUHJvdmlkZXJcbiAgICAuc3RhcnRTeW1ib2woJ3tbeycpXG4gICAgLmVuZFN5bWJvbCgnfV19Jyk7XG59XG5cbmZ1bmN0aW9uIG1pRGlyZWN0aXZhICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge30sXG4gICAgY29udHJvbGxlcjogZnVuY3Rpb24oTXlTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnByb2R1Y3RvcyA9IE15U2VydmljZS5nZXREYXRhKCk7XG4gICAgfSxcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgdGVtcGxhdGU6IFtcbiAgICAgICc8aDE+TGlzdGFkbyBkZSBQcm9kdWN0b3M8L2gxPicsXG4gICAgICAnPHVsPicsXG4gICAgICAgICc8bWktaXRlbSBuZy1yZXBlYXQ9XCJwcm9kdWN0byBpbiB2bS5wcm9kdWN0b3NcIiBkYXRhPVwicHJvZHVjdG9cIj4nLFxuICAgICAgICAnPC9taS1pdGVtPicsXG4gICAgICAnPC91bD4nXG4gICAgXS5qb2luKCcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1pSXRlbSAoKSB7XG4gIHJldHVybiB7XG4gICAgc2NvcGU6IHtcbiAgICAgIGRhdGE6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6IFtcbiAgICAgICc8bGk+JyxcbiAgICAgICAgJzxzdHJvbmc+e1t7IGRhdGEudGl0dWxvIH1dfTwvc3Ryb25nPjogJyxcbiAgICAgICAgJ3tbeyBkYXRhLnByZWNpbyB8IGN1cnJlbmN5IH1dfScsXG4gICAgICAnPC9saT4nXG4gICAgXS5qb2luKCcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIE15U2VydmljZSAoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YTogZ2V0RGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSAoKSB7XG4gICAgICB2YXIgZGF0b3MgPSBbXG4gICAgICAgIHsgdGl0dWxvOiBcIkluaWNpb1wiLCBydXRhOiBcIkluaWNpb1wifSxcbiAgICAgICAgeyB0aXR1bG86IFwiUXVpZW5lcyBTb21vc1wiLCBydXRhOiBcImNvbXBhw7FpYVwiIH0sXG4gICAgICAgIHsgdGl0dWxvOiBcIkluZm9ybWFjaW9uIEdlbmVyYWxcIiwgcnV0YTogXCJpbmZvXCIgfSxcbiAgICAgICAgeyB0aXR1bG86IFwiUHJvZHVjdG9zXCIsIHJ1dGE6IFwicHJvZHVjdG9zXCJ9LFxuICAgICAgICB7IHRpdHVsbzogXCJBcmVhIEFkbWluaXN0cmF0aXZhXCIsIHJ1dGE6IFwiYWRtaW5pc3RyYWNpb25cIixcbiAgICAgICAgICB0aXR1bG86IFwiQ29uZmlndXJhY2lvblwiICwgcnV0YSA6IFwiQ29uZmlnXCJ9XG4gICAgICBdO1xuICAgICAgcmV0dXJuIGRhdG9zO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lbnVDdHJsKG1lbnVTZXJ2aWNlKSB7XG4gIHRoaXMudGl0dWxvcyA9IG1lbnVTZXJ2aWNlLmdldERhdGEoKTtcbn1cblxuZnVuY3Rpb24gbWVudVNlcnZpY2UgKCkge1xuICByZXR1cm4ge1xuICAgIGdldERhdGE6IGdldERhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEgKCkge1xuICAgICAgdmFyIGRhdG9zID0gW1xuICAgICAgICB7IHRpdHVsbzogXCJJbmljaW9cIiwgcnV0YTogXCJJbmljaW9cIn0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlF1aWVuZXMgU29tb3NcIiwgcnV0YTogXCJjb21wYcOxaWFcIiB9LFxuICAgICAgICB7IHRpdHVsbzogXCJJbmZvcm1hY2lvbiBHZW5lcmFsXCIsIHJ1dGE6IFwiaW5mb1wiIH0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlByb2R1Y3Rvc1wiLCBydXRhOiBcInByb2R1Y3Rvc1wifSxcbiAgICAgICAgeyB0aXR1bG86IFwiQXJlYSBBZG1pbmlzdHJhdGl2YVwiLCBydXRhOiBcImFkbWluaXN0cmFjaW9uXCIsXG4gICAgICAgICAgdGl0dWxvOiBcIkNvbmZpZ3VyYWNpb25cIiAsIHJ1dGEgOiBcIkNvbmZpZ1wifVxuICAgICAgXTtcbiAgICAgIHJldHVybiBkYXRvcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
