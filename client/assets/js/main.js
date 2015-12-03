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

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();

  $(".search2").focus(function(){
        $(this).parent().addClass("search1");
      }).blur(function(){
        $(this).parent().removeClass("search1");
 })
});


(function(){
    'use strict'
    function menuCtrl(menuService) {
      this.titulos = menuService.getData();
    }
      angular.module('App')
             .controller('menuCtrl',menuCtrl);
})();

(function(){
  'use strict'
  function menuService () {
    return {
      getData: getData
    }

    function getData () {
        var datos = [
          { titulo: "Inicios", ruta: "inicio"},
          { titulo: "Quienes Somos", ruta: "compañia" },
          { titulo: "Configuracion" , ruta : "Config"}
        ];
        return datos;
    }
  }
  angular.module('App')
         .service('menuService',menuService);

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInVpLmpzIiwiY29uZmlnL3JvdXRlcy5qcyIsImNvbnRyb2xsZXJzL21lbnVDdHJsLmpzIiwic2VydmljZXMvbWVudVNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGFwcCA9IGFuZ3VsYXJcbiAgLm1vZHVsZSgnQXBwJyxbJ25nUm91dGUnXSlcbiAgLmNvbmZpZyhhcHBDb25maWcpXG4gIC8qLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJywgbWVudVNlcnZpY2UpXG4gIC5jb250cm9sbGVyKCdtZW51Q3RybCcsIG1lbnVDdHJsKSovO1xuXG5mdW5jdGlvbiBhcHBDb25maWcgKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlciwgJGludGVycG9sYXRlUHJvdmlkZXIpIHtcbiAgLy8gY29uZmlndXJhciBydXRhc1xuICAkcm91dGVQcm92aWRlclxuICAgIC53aGVuKCcvJywge1xuICAgICAgdGVtcGxhdGU6ICc8cD4gcGFnaW5hIDwvcD4nXG4gICAgfSlcbiAgICAud2hlbignL2luaWNpbycsIHtcbiAgICAgIHRlbXBsYXRlOiAnPHA+IHBhZ2luYSAyIDwvcD4nXG4gICAgfSlcbiAgICAub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgIH0pO1xuICAvLyBDb25maWd1cmFjaW9uIGRlIHJ1dGFzIGRlbCBuYXZlZ2Fkb3JcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaGFzaFByZWZpeCgnIScpO1xuICAvLyBjb25maWZ1cmFyIHNpbnRheGlzIGRlIGluc3RhbmNpYVxuICAkaW50ZXJwb2xhdGVQcm92aWRlclxuICAgIC5zdGFydFN5bWJvbCgne1t7JylcbiAgICAuZW5kU3ltYm9sKCd9XX0nKTtcbn1cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIC8vIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgLm1vZGFsLXRyaWdnZXIgbXVzdCBzcGVjaWZ5IHRoZSBtb2RhbCBJRCB0aGF0IHdhbnRzIHRvIGJlIHRyaWdnZXJlZFxuICAkKCcubW9kYWwtdHJpZ2dlcicpLmxlYW5Nb2RhbCgpO1xuXG4gICQoXCIuc2VhcmNoMlwiKS5mb2N1cyhmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwic2VhcmNoMVwiKTtcbiAgICAgIH0pLmJsdXIoZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcInNlYXJjaDFcIik7XG4gfSlcbn0pO1xuIiwiIiwiKGZ1bmN0aW9uKCl7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gbWVudUN0cmwobWVudVNlcnZpY2UpIHtcbiAgICAgIHRoaXMudGl0dWxvcyA9IG1lbnVTZXJ2aWNlLmdldERhdGEoKTtcbiAgICB9XG4gICAgICBhbmd1bGFyLm1vZHVsZSgnQXBwJylcbiAgICAgICAgICAgICAuY29udHJvbGxlcignbWVudUN0cmwnLG1lbnVDdHJsKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnXG4gIGZ1bmN0aW9uIG1lbnVTZXJ2aWNlICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0RGF0YTogZ2V0RGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERhdGEgKCkge1xuICAgICAgICB2YXIgZGF0b3MgPSBbXG4gICAgICAgICAgeyB0aXR1bG86IFwiSW5pY2lvc1wiLCBydXRhOiBcImluaWNpb1wifSxcbiAgICAgICAgICB7IHRpdHVsbzogXCJRdWllbmVzIFNvbW9zXCIsIHJ1dGE6IFwiY29tcGHDsWlhXCIgfSxcbiAgICAgICAgICB7IHRpdHVsbzogXCJDb25maWd1cmFjaW9uXCIgLCBydXRhIDogXCJDb25maWdcIn1cbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGRhdG9zO1xuICAgIH1cbiAgfVxuICBhbmd1bGFyLm1vZHVsZSgnQXBwJylcbiAgICAgICAgIC5zZXJ2aWNlKCdtZW51U2VydmljZScsbWVudVNlcnZpY2UpO1xuXG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
