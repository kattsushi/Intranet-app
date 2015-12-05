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
    function agendaCtrl(agendaServ) {
      this.agenda = agendaServ.getData();
    }
      angular.module('App')
             .controller('agendaCtrl',agendaCtrl);
})();
(function(){
    'use strict'
    function mainCtrl(menuService) {
      this.titulos = menuService.getData();
    }
      angular.module('App')
             .controller('mainCtrl',mainCtrl);
})();
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
  function agendaServ () {
    return {
      getData: getData
    }

    function getData () {
        var datos = [
      {
        nombre:'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),
        salario: 12000, telefono:'5587687687', bono: 1.456789
      },
      {
        nombre:'Adrian', paterno: 'Romero', materno: 'Paez', primerDia:  new Date(),
        salario: 12000, telefono:'5512345678', bono: 9.654321
      },
      {
        nombre:'Rodolfo', paterno: 'Solares', materno: 'Madero', primerDia:  new Date(),
        salario: 14000, telefono:'5587654321', bono: 7.333333
      },
      {
        nombre:'Manuel', paterno: 'Perez', materno: 'Solin', primerDia:  new Date(),
        salario: 11000, telefono:'5518273645', bono: 5.272727
      },
      {
        nombre:'Dana', paterno: 'Roman', materno: 'Herrera', primerDia:  new Date(),
        salario: 20000, telefono:'5581726354', bono: 1.444444
      },
      {
        nombre:'Alejandro', paterno: 'Mena', materno: 'Morales', primerDia:  new Date(),
        salario: 5000, telefono:'5512312312', bono: 12.989898
      }
    ];;
        return datos;
    }
  }
  angular.module('App')
         .service('agendaServ',agendaServ);

})();

(function(){
  'use strict'
  function menuService () {
    return {
      getData: getData
    }

    function getData () {
        var datos = [
          { titulo: "Inicio", ruta: "/"},
          { titulo: "Quienes Somos", ruta: "compañia" },
          { titulo: "Agenda", ruta: "agenda"},
          { titulo: "Configuracion" , ruta : "config"}
        ];
        return datos;
    }
  }
  angular.module('App')
         .service('menuService',menuService);

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInVpLmpzIiwiY29uZmlnL3JvdXRlcy5qcyIsImNvbnRyb2xsZXJzL2FnZW5kYUN0cmwuanMiLCJjb250cm9sbGVycy9tYWluQ3RybC5qcyIsImNvbnRyb2xsZXJzL21lbnVDdHJsLmpzIiwic2VydmljZXMvYWdlbmRhU2Vydi5qcyIsInNlcnZpY2VzL21lbnVTZXJ2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xudmFyIGFwcCA9IGFuZ3VsYXJcbiAgLm1vZHVsZSgnQXBwJyxbJ25nUm91dGUnLCduZ0FuaW1hdGUnLCduZ1Jlc291cmNlJ10pXG4gIC5jb25maWcoYXBwQ29uZmlnKVxuICAvKi5zZXJ2aWNlKCdtZW51U2VydmljZScsIG1lbnVTZXJ2aWNlKVxuICAuY29udHJvbGxlcignbWVudUN0cmwnLCBtZW51Q3RybCkqLztcblxuZnVuY3Rpb24gYXBwQ29uZmlnICgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRpbnRlcnBvbGF0ZVByb3ZpZGVyKSB7XG4gIC8vIGNvbmZpZ3VyYXIgcnV0YXNcbiAgJHJvdXRlUHJvdmlkZXJcbiAgICAud2hlbignLycsIHtcbiAgICAgIHRlbXBsYXRlVXJsOiAnanMvYXBwL3ZpZXdzL21haW4uaHRtbCcsXG4gICAgICBjb250cm9sbGVyIDogJ21haW5DdHJsJ1xuICAgIH0pXG4gICAgLndoZW4oJy9hZ2VuZGEnLCB7XG4gICAgICB0ZW1wbGF0ZVVybDogJ2pzL2FwcC92aWV3cy9hZ2VuZGEuaHRtbCcsXG4gICAgICBjb250cm9sbGVyIDogJ2FnZW5kYUN0cmwnLFxuICAgICAgY29udHJvbGxlckFzOiAnYWcnXG4gICAgfSlcbiAgICAub3RoZXJ3aXNlKHtcbiAgICAgIHJlZGlyZWN0VG86ICcvJ1xuICAgIH0pO1xuICAvLyBDb25maWd1cmFjaW9uIGRlIHJ1dGFzIGRlbCBuYXZlZ2Fkb3JcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaGFzaFByZWZpeCgnIScpO1xuICAvLyBjb25maWZ1cmFyIHNpbnRheGlzIGRlIGluc3RhbmNpYVxuICAkaW50ZXJwb2xhdGVQcm92aWRlclxuICAgIC5zdGFydFN5bWJvbCgne1t7JylcbiAgICAuZW5kU3ltYm9sKCd9XX0nKTtcbn1cbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIC8vIHRoZSBcImhyZWZcIiBhdHRyaWJ1dGUgb2YgLm1vZGFsLXRyaWdnZXIgbXVzdCBzcGVjaWZ5IHRoZSBtb2RhbCBJRCB0aGF0IHdhbnRzIHRvIGJlIHRyaWdnZXJlZFxuICAkKCcubW9kYWwtdHJpZ2dlcicpLmxlYW5Nb2RhbCgpO1xuXG4gICQoXCIuc2VhcmNoMlwiKS5mb2N1cyhmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwic2VhcmNoMVwiKTtcbiAgICAgIH0pLmJsdXIoZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcInNlYXJjaDFcIik7XG4gfSlcbn0pO1xuIiwiIiwiKGZ1bmN0aW9uKCl7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gYWdlbmRhQ3RybChhZ2VuZGFTZXJ2KSB7XG4gICAgICB0aGlzLmFnZW5kYSA9IGFnZW5kYVNlcnYuZ2V0RGF0YSgpO1xuICAgIH1cbiAgICAgIGFuZ3VsYXIubW9kdWxlKCdBcHAnKVxuICAgICAgICAgICAgIC5jb250cm9sbGVyKCdhZ2VuZGFDdHJsJyxhZ2VuZGFDdHJsKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gbWFpbkN0cmwobWVudVNlcnZpY2UpIHtcbiAgICAgIHRoaXMudGl0dWxvcyA9IG1lbnVTZXJ2aWNlLmdldERhdGEoKTtcbiAgICB9XG4gICAgICBhbmd1bGFyLm1vZHVsZSgnQXBwJylcbiAgICAgICAgICAgICAuY29udHJvbGxlcignbWFpbkN0cmwnLG1haW5DdHJsKTtcbn0pKCk7IiwiKGZ1bmN0aW9uKCl7XG4gICAgJ3VzZSBzdHJpY3QnXG4gICAgZnVuY3Rpb24gbWVudUN0cmwobWVudVNlcnZpY2UpIHtcbiAgICAgIHRoaXMudGl0dWxvcyA9IG1lbnVTZXJ2aWNlLmdldERhdGEoKTtcbiAgICB9XG4gICAgICBhbmd1bGFyLm1vZHVsZSgnQXBwJylcbiAgICAgICAgICAgICAuY29udHJvbGxlcignbWVudUN0cmwnLG1lbnVDdHJsKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgJ3VzZSBzdHJpY3QnXG4gIGZ1bmN0aW9uIGFnZW5kYVNlcnYgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXREYXRhOiBnZXREYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF0YSAoKSB7XG4gICAgICAgIHZhciBkYXRvcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbm9tYnJlOidBbmEnLCBwYXRlcm5vOiAnR3V6bWFuJywgbWF0ZXJubzogJ0d1em1hbicsIHByaW1lckRpYTogbmV3IERhdGUoKSxcbiAgICAgICAgc2FsYXJpbzogMTIwMDAsIHRlbGVmb25vOic1NTg3Njg3Njg3JywgYm9ubzogMS40NTY3ODlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vbWJyZTonQWRyaWFuJywgcGF0ZXJubzogJ1JvbWVybycsIG1hdGVybm86ICdQYWV6JywgcHJpbWVyRGlhOiAgbmV3IERhdGUoKSxcbiAgICAgICAgc2FsYXJpbzogMTIwMDAsIHRlbGVmb25vOic1NTEyMzQ1Njc4JywgYm9ubzogOS42NTQzMjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5vbWJyZTonUm9kb2xmbycsIHBhdGVybm86ICdTb2xhcmVzJywgbWF0ZXJubzogJ01hZGVybycsIHByaW1lckRpYTogIG5ldyBEYXRlKCksXG4gICAgICAgIHNhbGFyaW86IDE0MDAwLCB0ZWxlZm9ubzonNTU4NzY1NDMyMScsIGJvbm86IDcuMzMzMzMzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub21icmU6J01hbnVlbCcsIHBhdGVybm86ICdQZXJleicsIG1hdGVybm86ICdTb2xpbicsIHByaW1lckRpYTogIG5ldyBEYXRlKCksXG4gICAgICAgIHNhbGFyaW86IDExMDAwLCB0ZWxlZm9ubzonNTUxODI3MzY0NScsIGJvbm86IDUuMjcyNzI3XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub21icmU6J0RhbmEnLCBwYXRlcm5vOiAnUm9tYW4nLCBtYXRlcm5vOiAnSGVycmVyYScsIHByaW1lckRpYTogIG5ldyBEYXRlKCksXG4gICAgICAgIHNhbGFyaW86IDIwMDAwLCB0ZWxlZm9ubzonNTU4MTcyNjM1NCcsIGJvbm86IDEuNDQ0NDQ0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBub21icmU6J0FsZWphbmRybycsIHBhdGVybm86ICdNZW5hJywgbWF0ZXJubzogJ01vcmFsZXMnLCBwcmltZXJEaWE6ICBuZXcgRGF0ZSgpLFxuICAgICAgICBzYWxhcmlvOiA1MDAwLCB0ZWxlZm9ubzonNTUxMjMxMjMxMicsIGJvbm86IDEyLjk4OTg5OFxuICAgICAgfVxuICAgIF07O1xuICAgICAgICByZXR1cm4gZGF0b3M7XG4gICAgfVxuICB9XG4gIGFuZ3VsYXIubW9kdWxlKCdBcHAnKVxuICAgICAgICAgLnNlcnZpY2UoJ2FnZW5kYVNlcnYnLGFnZW5kYVNlcnYpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICd1c2Ugc3RyaWN0J1xuICBmdW5jdGlvbiBtZW51U2VydmljZSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldERhdGE6IGdldERhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXRhICgpIHtcbiAgICAgICAgdmFyIGRhdG9zID0gW1xuICAgICAgICAgIHsgdGl0dWxvOiBcIkluaWNpb1wiLCBydXRhOiBcIi9cIn0sXG4gICAgICAgICAgeyB0aXR1bG86IFwiUXVpZW5lcyBTb21vc1wiLCBydXRhOiBcImNvbXBhw7FpYVwiIH0sXG4gICAgICAgICAgeyB0aXR1bG86IFwiQWdlbmRhXCIsIHJ1dGE6IFwiYWdlbmRhXCJ9LFxuICAgICAgICAgIHsgdGl0dWxvOiBcIkNvbmZpZ3VyYWNpb25cIiAsIHJ1dGEgOiBcImNvbmZpZ1wifVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gZGF0b3M7XG4gICAgfVxuICB9XG4gIGFuZ3VsYXIubW9kdWxlKCdBcHAnKVxuICAgICAgICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJyxtZW51U2VydmljZSk7XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
