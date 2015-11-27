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

$('document').on('ready', function(){
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  $('#aside').pushpin({ top:110, bottom:500 });
})

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInVpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuYW5ndWxhclxuICAubW9kdWxlKCdteUFwcCcsWyduZ1JvdXRlJ10pXG4gIC5jb25maWcoYXBwQ29uZmlnKVxuICAuc2VydmljZSgnTXlTZXJ2aWNlJywgTXlTZXJ2aWNlKVxuICAuc2VydmljZSgnbWVudVNlcnZpY2UnLCBtZW51U2VydmljZSlcbiAgLmRpcmVjdGl2ZSgnbWlJdGVtJywgbWlJdGVtKVxuICAuZGlyZWN0aXZlKCdtaURpcmVjdGl2YScsIG1pRGlyZWN0aXZhKVxuICAuY29udHJvbGxlcignbWVudUN0cmwnLCBtZW51Q3RybCk7XG5cbmZ1bmN0aW9uIGFwcENvbmZpZyAoJHJvdXRlUHJvdmlkZXIgLCAkaW50ZXJwb2xhdGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuXG4gICAgLndoZW4oJy8nLCB7XG4gICAgICBjb250cm9sbGVyIDogbWVudUN0cmwgLFxuICAgICAgY29udHJvbGxlckFzIDogJ3ZtJyxcbiAgICAgIHRlbXBsYXRlOiAnPHA+IHBhZ2luYSA8L3A+J1xuICAgIH0pXG4gICAgLndoZW4oJy9pbmljaW8nLCB7XG4gICAgfSlcbiAgICAub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgIH0pO1xuXG4gICRpbnRlcnBvbGF0ZVByb3ZpZGVyXG4gICAgLnN0YXJ0U3ltYm9sKCd7W3snKVxuICAgIC5lbmRTeW1ib2woJ31dfScpO1xufVxuXG5mdW5jdGlvbiBtaURpcmVjdGl2YSAoKSB7XG4gIHJldHVybiB7XG4gICAgc2NvcGU6IHt9LFxuICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKE15U2VydmljZSkge1xuICAgICAgdGhpcy5wcm9kdWN0b3MgPSBNeVNlcnZpY2UuZ2V0RGF0YSgpO1xuICAgIH0sXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIHRlbXBsYXRlOiBbXG4gICAgICAnPGgxPkxpc3RhZG8gZGUgUHJvZHVjdG9zPC9oMT4nLFxuICAgICAgJzx1bD4nLFxuICAgICAgICAnPG1pLWl0ZW0gbmctcmVwZWF0PVwicHJvZHVjdG8gaW4gdm0ucHJvZHVjdG9zXCIgZGF0YT1cInByb2R1Y3RvXCI+JyxcbiAgICAgICAgJzwvbWktaXRlbT4nLFxuICAgICAgJzwvdWw+J1xuICAgIF0uam9pbignJylcbiAgfVxufVxuXG5mdW5jdGlvbiBtaUl0ZW0gKCkge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7XG4gICAgICBkYXRhOiAnPSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiBbXG4gICAgICAnPGxpPicsXG4gICAgICAgICc8c3Ryb25nPntbeyBkYXRhLnRpdHVsbyB9XX08L3N0cm9uZz46ICcsXG4gICAgICAgICd7W3sgZGF0YS5wcmVjaW8gfCBjdXJyZW5jeSB9XX0nLFxuICAgICAgJzwvbGk+J1xuICAgIF0uam9pbignJylcbiAgfVxufVxuXG5mdW5jdGlvbiBNeVNlcnZpY2UgKCkge1xuICByZXR1cm4ge1xuICAgIGdldERhdGE6IGdldERhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEgKCkge1xuICAgICAgdmFyIGRhdG9zID0gW1xuICAgICAgICB7IHRpdHVsbzogXCJJbmljaW9cIiwgcnV0YTogXCJJbmljaW9cIn0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlF1aWVuZXMgU29tb3NcIiwgcnV0YTogXCJjb21wYcOxaWFcIiB9LFxuICAgICAgICB7IHRpdHVsbzogXCJDb25maWd1cmFjaW9uXCIgLCBydXRhIDogXCJDb25maWdcIn1cbiAgICAgIF07XG4gICAgICByZXR1cm4gZGF0b3M7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVudUN0cmwobWVudVNlcnZpY2UpIHtcbiAgdGhpcy50aXR1bG9zID0gbWVudVNlcnZpY2UuZ2V0RGF0YSgpO1xufVxuXG5mdW5jdGlvbiBtZW51U2VydmljZSAoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YTogZ2V0RGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSAoKSB7XG4gICAgICB2YXIgZGF0b3MgPSBbXG4gICAgICAgIHsgdGl0dWxvOiBcIkluaWNpb1wiLCBydXRhOiBcImluaWNpb1wifSxcbiAgICAgICAgeyB0aXR1bG86IFwiUXVpZW5lcyBTb21vc1wiLCBydXRhOiBcImNvbXBhw7FpYVwiIH0sXG4gICAgICAgIHsgdGl0dWxvOiBcIkNvbmZpZ3VyYWNpb25cIiAsIHJ1dGEgOiBcIkNvbmZpZ1wifVxuICAgICAgXTtcbiAgICAgIHJldHVybiBkYXRvcztcbiAgfVxufVxuIiwiJCgnZG9jdW1lbnQnKS5vbigncmVhZHknLCBmdW5jdGlvbigpe1xuICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XG4gICQoJy5tb2RhbC10cmlnZ2VyJykubGVhbk1vZGFsKCk7XG4gICQoJyNhc2lkZScpLnB1c2hwaW4oeyB0b3A6MTEwLCBib3R0b206NTAwIH0pO1xufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
