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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInVpLmpzIiwiY29uZmlnL3JvdXRlcy5qcyIsImNvbnRyb2xsZXJzL21lbnVDdHJsLmpzIiwic2VydmljZXMvbWVudVNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG52YXIgYXBwID0gYW5ndWxhclxyXG4gIC5tb2R1bGUoJ0FwcCcsWyduZ1JvdXRlJ10pXHJcbiAgLmNvbmZpZyhhcHBDb25maWcpXHJcbiAgLyouc2VydmljZSgnbWVudVNlcnZpY2UnLCBtZW51U2VydmljZSlcclxuICAuY29udHJvbGxlcignbWVudUN0cmwnLCBtZW51Q3RybCkqLztcclxuXHJcbmZ1bmN0aW9uIGFwcENvbmZpZyAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyLCAkaW50ZXJwb2xhdGVQcm92aWRlcikge1xyXG4gIC8vIGNvbmZpZ3VyYXIgcnV0YXNcclxuICAkcm91dGVQcm92aWRlclxyXG4gICAgLndoZW4oJy8nLCB7XHJcbiAgICAgIHRlbXBsYXRlOiAnPHA+IHBhZ2luYSA8L3A+J1xyXG4gICAgfSlcclxuICAgIC53aGVuKCcvaW5pY2lvJywge1xyXG4gICAgICB0ZW1wbGF0ZTogJzxwPiBwYWdpbmEgMiA8L3A+J1xyXG4gICAgfSlcclxuICAgIC5vdGhlcndpc2Uoe1xyXG4gICAgICByZWRpcmVjdFRvOiAnLydcclxuICAgIH0pO1xyXG4gIC8vIENvbmZpZ3VyYWNpb24gZGUgcnV0YXMgZGVsIG5hdmVnYWRvclxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmhhc2hQcmVmaXgoJyEnKTtcclxuICAvLyBjb25maWZ1cmFyIHNpbnRheGlzIGRlIGluc3RhbmNpYVxyXG4gICRpbnRlcnBvbGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhcnRTeW1ib2woJ3tbeycpXHJcbiAgICAuZW5kU3ltYm9sKCd9XX0nKTtcclxufVxyXG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gIC8vIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgLm1vZGFsLXRyaWdnZXIgbXVzdCBzcGVjaWZ5IHRoZSBtb2RhbCBJRCB0aGF0IHdhbnRzIHRvIGJlIHRyaWdnZXJlZFxyXG4gICQoJy5tb2RhbC10cmlnZ2VyJykubGVhbk1vZGFsKCk7XHJcblxyXG4gICQoXCIuc2VhcmNoMlwiKS5mb2N1cyhmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJzZWFyY2gxXCIpO1xyXG4gICAgICB9KS5ibHVyKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcInNlYXJjaDFcIik7XHJcbiB9KVxyXG59KTtcclxuIiwiIiwiKGZ1bmN0aW9uKCl7XHJcbiAgICAndXNlIHN0cmljdCdcclxuICAgIGZ1bmN0aW9uIG1lbnVDdHJsKG1lbnVTZXJ2aWNlKSB7XHJcbiAgICAgIHRoaXMudGl0dWxvcyA9IG1lbnVTZXJ2aWNlLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgICAgYW5ndWxhci5tb2R1bGUoJ0FwcCcpXHJcbiAgICAgICAgICAgICAuY29udHJvbGxlcignbWVudUN0cmwnLG1lbnVDdHJsKTtcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCl7XHJcbiAgJ3VzZSBzdHJpY3QnXHJcbiAgZnVuY3Rpb24gbWVudVNlcnZpY2UgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2V0RGF0YTogZ2V0RGF0YVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhdGEgKCkge1xyXG4gICAgICAgIHZhciBkYXRvcyA9IFtcclxuICAgICAgICAgIHsgdGl0dWxvOiBcIkluaWNpb3NcIiwgcnV0YTogXCJpbmljaW9cIn0sXHJcbiAgICAgICAgICB7IHRpdHVsbzogXCJRdWllbmVzIFNvbW9zXCIsIHJ1dGE6IFwiY29tcGHDsWlhXCIgfSxcclxuICAgICAgICAgIHsgdGl0dWxvOiBcIkNvbmZpZ3VyYWNpb25cIiAsIHJ1dGEgOiBcIkNvbmZpZ1wifVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIGRhdG9zO1xyXG4gICAgfVxyXG4gIH1cclxuICBhbmd1bGFyLm1vZHVsZSgnQXBwJylcclxuICAgICAgICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJyxtZW51U2VydmljZSk7XHJcblxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
