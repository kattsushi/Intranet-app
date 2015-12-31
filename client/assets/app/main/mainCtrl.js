(function(){
    'use strict'
    function mainCtrl($scope,
                      $timeout,
                      $mdSidenav,
                      $rootScope,
                      mainService,
                      $mdDialog,
                      $cookieStore
                      ,$location,
                      $http) {

            var vm = this;


           var datos = [
                    { "titulo": "Inicio", "ruta": "/",
                      "Submenu" :[{
                              "nombre" : "vision",
                              "ruta" :"vision"
                              },
                              {
                              "nombre" : "Mision",
                              "ruta" :"Vision"
                              }]
                    },
                    { "titulo": "Quienes Somos", "ruta": "compañia" },
                    { "titulo": "Agenda", "ruta": "agenda"},
                    { "titulo": "Configuracion" , "ruta" : "config"}
                  ];

              var datos2 = [{"id":1,"usuario":69,
                             "titulo":"inicio","link":"inicio",
                             "activo":"Y","tags":" ",
                             "descripcion":" ","creado":"12-12-2015",
                             "actualizado":"12-12-2015",
                             "Submenu":
                                  [{"id":1,"nombre":"Mision",
                                  "ruta":"mision","paginaId":1},
                                  {"id":2,"nombre":"Vision",
                                  "ruta":"mision","paginaId":1}]},
                            {"id":2,"usuario":69,
                              "titulo":"quienes somos","link":"compañia",
                              "activo":"Y","tags":" ",
                              "descripcion":" ","creado":"12-12-2015",
                              "actualizado":"12-12-2015",
                              "Submenu":[]},
                            {"id":4,"usuario":69,
                              "titulo":"productos","link":"productos",
                              "activo":"Y","tags":" ","descripcion":" ",
                              "creado":"12-12-2015","actualizado":"12-12-2015",
                              "Submenu":[]},
                            {"id":5,"usuario":69,
                              "titulo":"area administrativa","link":"administracion",
                              "activo":"Y","tags":" ",
                              "descripcion":" ","creado":"12-12-2015",
                              "actualizado":"12-12-2015",
                              "Submenu":[]},
                            {"id":6,"usuario":69,
                              "titulo":"unidades de control","link":"unidades",
                              "activo":"Y","tags":" ","descripcion":" ",
                              "creado":"12-12-2015","actualizado":"12-12-2015",
                              "Submenu":[]},
                            {"id":7,"usuario":69,
                            "titulo":"empleado","link":"empleado",
                            "activo":"Y","tags":" ",
                            "descripcion":" ","creado":"12-12-2015",
                            "actualizado":"12-12-2015",
                            "Submenu":[]}
                          ];


        //    vm.titulos = mainService.query();
            // vm.titulos = datos;
           vm.titulos = datos2;


            //    console.log(JSON.parse(vm.titulos));

            vm.onClickMenu = function () {
                $mdSidenav('left').toggle();
            }

            /*---------------------------------------------
            Control de cookies para autenticar usuario
            */
            $scope.usrConectado = {nombre: "", nivel: '', estaConectado: ''};

            var usr = $cookieStore.get('usuario');

            if (usr != null) {
              $scope.usrConectado.nombre = usr.nombre;
              $scope.usrConectado.nivel = usr.nivel;
              $scope.usrConectado.estaConectado = true;
            }else {
              $scope.usrConectado.valogin = false
            };

            vm.salir = function() {
              $scope.usrConectado = {nombre: '', nivel: '', estaConectado: ''};

              $cookieStore.remove('estaConectado');
              $cookieStore.remove('usuario');

              $location.path('/inicio');
            };


    }
      angular.module('App')
             .controller('mainCtrl',['$scope',
                                     '$timeout',
                                     '$mdSidenav',
                                     '$rootScope',
                                     'mainService',
                                     '$mdDialog',
                                     '$cookieStore',
                                     '$location',
                                     '$http',
                                     mainCtrl]);
})();
