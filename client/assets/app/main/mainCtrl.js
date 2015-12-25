(function(){
    'use strict'
    function mainCtrl($timeout,
                      $mdSidenav,
                      $rootScope,
                      mainService,
                      $mdDialog) {

            var vm = this;


           var datos = [
                    { "titulo": "Inicio", "ruta": "/",
                      "submenu" :[{
                              "titulo" : "vision",
                              "ruta" :"vision"
                              },
                              {
                              "titulo" : "vision",
                              "ruta" :"vision"
                              }]
                    },
                    { "titulo": "Quienes Somos", "ruta": "compañia" },
                    { "titulo": "Agenda", "ruta": "agenda"},
                    { "titulo": "Configuracion" , "ruta" : "config"}
                  ];


            // vm.titulos = mainService.query();
            vm.titulos = datos;
            console.log(vm.titulos);





            vm.onClickMenu = function () {
                $mdSidenav('left').toggle();
            }

            /*---------------------------------------------
            Barra del menu
            */
            var originatorEv;
            this.openMenu = function($mdOpenMenu, ev) {
              originatorEv = ev;
              $mdOpenMenu(ev);
            };
            this.announceClick = function(index) {
              $mdDialog.show(
                $mdDialog.alert()
                  .title('You clicked!')
                  .textContent('You clicked the menu item at index ' + index)
                  .ok('Nice')
                  .targetEvent(originatorEv)
              );
              originatorEv = null;
            };


    }
      angular.module('App')
             .controller('mainCtrl',['$timeout',
                      '$mdSidenav',
                      '$rootScope',
                      'mainService',
             mainCtrl]);
})();
