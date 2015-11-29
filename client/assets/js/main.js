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

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();

  $(".search2").focus(function(){
        $(this).parent().addClass("search1");
      }).blur(function(){
        $(this).parent().removeClass("search1");
 })
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInVpLmpzIiwiY29uZmlnL3JvdXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5hbmd1bGFyXG4gIC5tb2R1bGUoJ215QXBwJyxbJ25nUm91dGUnXSlcbiAgLmNvbmZpZyhhcHBDb25maWcpXG4gIC5zZXJ2aWNlKCdNeVNlcnZpY2UnLCBNeVNlcnZpY2UpXG4gIC5zZXJ2aWNlKCdtZW51U2VydmljZScsIG1lbnVTZXJ2aWNlKVxuICAuY29udHJvbGxlcignbWVudUN0cmwnLCBtZW51Q3RybCk7XG5cbmZ1bmN0aW9uIGFwcENvbmZpZyAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkaW50ZXJwb2xhdGVQcm92aWRlcikge1xuICAvLyBjb25maWd1cmFyIHJ1dGFzXG4gICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy8nLCB7XG4gICAgICBjb250cm9sbGVyIDogbWVudUN0cmwgLFxuICAgICAgY29udHJvbGxlckFzIDogJ3ZtJyxcbiAgICAgIHRlbXBsYXRlOiAnPHA+IHBhZ2luYSA8L3A+J1xuICAgIH0pXG4gICAgLndoZW4oJy9pbmljaW8nLCB7XG4gICAgICB0ZW1wbGF0ZTogJzxwPiBwYWdpbmEgMiA8L3A+J1xuICAgIH0pXG4gICAgLm90aGVyd2lzZSh7XG4gICAgICByZWRpcmVjdFRvOiAnLydcbiAgICB9KTtcbiAgLy8gQ29uZmlndXJhY2lvbiBkZSBydXRhcyBkZWwgbmF2ZWdhZG9yXG4gICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJyEnKTtcbiAgLy8gY29uZmlmdXJhciBzaW50YXhpcyBkZSBpbnN0YW5jaWFcbiAgJGludGVycG9sYXRlUHJvdmlkZXJcbiAgICAuc3RhcnRTeW1ib2woJ3tbeycpXG4gICAgLmVuZFN5bWJvbCgnfV19Jyk7XG5cbn1cblxuXG5mdW5jdGlvbiBNeVNlcnZpY2UgKCkge1xuICByZXR1cm4ge1xuICAgIGdldERhdGE6IGdldERhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEgKCkge1xuICAgICAgdmFyIGRhdG9zID0gW1xuICAgICAgICB7IHRpdHVsbzogXCJJbmljaW9cIiwgcnV0YTogXCJJbmljaW9cIn0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlF1aWVuZXMgU29tb3NcIiwgcnV0YTogXCJjb21wYcOxaWFcIiB9LFxuICAgICAgICB7IHRpdHVsbzogXCJDb25maWd1cmFjaW9uXCIgLCBydXRhIDogXCJDb25maWdcIn1cbiAgICAgIF07XG4gICAgICByZXR1cm4gZGF0b3M7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVudUN0cmwobWVudVNlcnZpY2UpIHtcbiAgdGhpcy50aXR1bG9zID0gbWVudVNlcnZpY2UuZ2V0RGF0YSgpO1xufVxuXG5mdW5jdGlvbiBtZW51U2VydmljZSAoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0RGF0YTogZ2V0RGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YSAoKSB7XG4gICAgICB2YXIgZGF0b3MgPSBbXG4gICAgICAgIHsgdGl0dWxvOiBcIkluaWNpb1wiLCBydXRhOiBcImluaWNpb1wifSxcbiAgICAgICAgeyB0aXR1bG86IFwiUXVpZW5lcyBTb21vc1wiLCBydXRhOiBcImNvbXBhw7FpYVwiIH0sXG4gICAgICAgIHsgdGl0dWxvOiBcIkNvbmZpZ3VyYWNpb25cIiAsIHJ1dGEgOiBcIkNvbmZpZ1wifVxuICAgICAgXTtcbiAgICAgIHJldHVybiBkYXRvcztcbiAgfVxufVxuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgLy8gdGhlIFwiaHJlZlwiIGF0dHJpYnV0ZSBvZiAubW9kYWwtdHJpZ2dlciBtdXN0IHNwZWNpZnkgdGhlIG1vZGFsIElEIHRoYXQgd2FudHMgdG8gYmUgdHJpZ2dlcmVkXG4gICQoJy5tb2RhbC10cmlnZ2VyJykubGVhbk1vZGFsKCk7XG5cbiAgJChcIi5zZWFyY2gyXCIpLmZvY3VzKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJzZWFyY2gxXCIpO1xuICAgICAgfSkuYmx1cihmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwic2VhcmNoMVwiKTtcbiB9KVxufSk7XG4iLCIiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
