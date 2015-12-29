(function(){
    'use strict'
    function mainCtrl($timeout,
                      $mdSidenav,
                      $rootScope,
                      mainService,
                      $mdDialog,
                      $cookieStore,
                      $location) {

            var vm = this;


           var datos = [
                    { "titulo": "Inicio", "ruta": "/",
                      "submenu" :[{
                              "titulo" : "vision",
                              "ruta" :"vision"
                              },
                              {
                              "titulo" : "Mision",
                              "ruta" :"Vision"
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
            Control de cookies para autenticar usuario
            */
            vm.usrConectado = {nombre: "", puesto: '', estaConectado: ''};

            var usr = $cookieStore.get('usuario');

            if (usr != null) {
              vm.usrConectado.nombre = usr.nombre;
              vm.usrConectado.puesto = usr.puesto;
              vm.usrConectado.estaConectado = true;
            };

            vm.salir = function() {
              vm.usrConectado = {nombre: "", puesto: '', estaConectado: ''};

              $cookieStore.remove('estaConectado');
              $cookieStore.remove('usuario');

              $location.path('/inicio');
            };


    }
      angular.module('App')
             .controller('mainCtrl',['$timeout',
                                     '$mdSidenav',
                                     '$rootScope',
                                     'mainService',
                                     '$mdDialog',
                                     '$cookieStore',
                                     '$location',
                                     mainCtrl]);
})();
