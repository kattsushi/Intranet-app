(function(){
    'use strict'
    function mainCtrl($scope,
                      $timeout,
                      $mdSidenav,
                      $rootScope,
                      mainService,
                      $mdDialog,
                      $cookieStore,
                      $location,
                      $http,
                      $q,
                      $log ) {

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

      vm.titulos = datos2;

         var data = mainService.query().$promise.then(function (data) {
                    var x = 1+1;
         });
            // vm.titulos = datos;
        //   vm.titulos = datos2;


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


    /*
    Seccion que controla el contendido
    */
    //------------------------------------------------------------------------------------------------------
    var tabs = [
         { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
         { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
         { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
         { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
         { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
         { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
         { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
         { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
         { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
         { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
          ],
   selected = null,
   previous = null;
   vm.tabs = tabs;
   vm.selectedIndex = 2;
   $scope.$watch('selectedIndex', function(current, old){
     previous = selected;
     selected = tabs[current];
     if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
     if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
   });
   vm.addTab = function (title, view) {
     view = view || title + " Content View";
     tabs.push({ title: title, content: view, disabled: false});
   };
   vm.removeTab = function (tab) {
     var index = tabs.indexOf(tab);
     tabs.splice(index, 1);
   };

    //------------------------------------------------------------------------------------------------------




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
                                     '$q',
                                     '$log',
                                     mainCtrl]);
})();
