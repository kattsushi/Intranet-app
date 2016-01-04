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

              var datos2 = [{"id":1,"usuario":69,
                             "titulo":"inicio","link":"inicio",
                             "activo":"Y","tags":" ",
                             "descripcion":" ","creado":"12-12-2015",
                             "actualizado":"12-12-2015",
                             "Submenu":[{"id":1,"nombre":"Al dia",
                             "ruta":"Aldia","paginaId":1}]},
                            {"id":2,"usuario":69,
                              "titulo":"quienes somos","link":"compañia",
                              "activo":"Y","tags":" ",
                              "descripcion":" ","creado":"12-12-2015",
                              "actualizado":"12-12-2015",
                              "Submenu":
                                   [{"id":1,"nombre":"Mision",
                                   "ruta":"mision","paginaId":2},
                                   {"id":2,"nombre":"Vision",
                                   "ruta":"mision","paginaId":2},
                                   {"id":3,"nombre":"Politicas",
                                   "ruta":"politicas","paginaId":2},
                                   {"id":4,"nombre":"Valores",
                                   "ruta":"valores","paginaId":2},
                                   {"id":5,"nombre":"Reseña Historica",
                                   "ruta":"reseña","paginaId":2},
                                   {"id":6,"nombre":"Junta Directiva",
                                   "ruta":"junta","paginaId":2},
                                   {"id":7,"nombre":"Organigrama",
                                   "ruta":"organigrama","paginaId":2}]},
                             {"id":3,"usuario":69,
                               "titulo":"informacion general","link":"informacion",
                               "activo":"Y","tags":" ",
                               "descripcion":" ","creado":"12-12-2015",
                               "actualizado":"12-12-2015",
                               "Submenu":
                                    [{"id":1,"nombre":"Normativas Generales",
                                    "ruta":"Normativas","paginaId":3},
                                    {"id":2,"nombre":"Codigo de Etica",
                                    "ruta":"codigo","paginaId":3},
                                    {"id":3,"nombre":"Sucursales",
                                    "ruta":"Sucursales","paginaId":3},
                                    {"id":4,"nombre":"Estadisticas Generales",
                                    "ruta":"Estadisticas","paginaId":3},
                                    {"id":5,"nombre":"Herramientas de Analisis",
                                    "ruta":"Herramientas","paginaId":3},
                                    {"id":6,"nombre":"Factores de Prestamo Hipotec.",
                                    "ruta":"factores","paginaId":3},
                                    {"id":7,"nombre":"Circular Prestadores de Servicios y Proveedores",
                                    "ruta":"circular","paginaId":3}]},
                            {"id":4,"usuario":69,
                              "titulo":"productos","link":"productos",
                              "activo":"Y","tags":" ","descripcion":" ",
                              "creado":"12-12-2015","actualizado":"12-12-2015",
                              "Submenu":
                                    [{"id":1,"nombre":"Personas",
                                    "ruta":"personas","paginaId":4},
                                    {"id":2,"nombre":"Automovil y Recuperaciones",
                                    "ruta":"automovil","paginaId":4},
                                    {"id":3,"nombre":"Patrimoniales",
                                    "ruta":"Patrimoniales","paginaId":4},
                                    {"id":4,"nombre":"Fianzas",
                                    "ruta":"Fianzas","paginaId":4},
                                    {"id":5,"nombre":"Ingenieria",
                                    "ruta":"Ingenieria","paginaId":4},
                                    {"id":6,"nombre":"Riesgos Diversos",
                                    "ruta":"Riesgos","paginaId":4},
                                    {"id":7,"nombre":"Reaseguro",
                                    "ruta":"Reaseguro","paginaId":4},
                                    {"id":8,"nombre":"Embarcacion Transporte y Aviacion",
                                    "ruta":"transporte","paginaId":4}]},
                            {"id":5,"usuario":69,
                              "titulo":"area administrativa","link":"administracion",
                              "activo":"Y","tags":" ",
                              "descripcion":" ","creado":"12-12-2015",
                              "actualizado":"12-12-2015",
                              "Submenu":
                                    [{"id":1,"nombre":"Administracion",
                                    "ruta":"administracion","paginaId":5},
                                    {"id":2,"nombre":"Fianzas",
                                    "ruta":"Fianzas","paginaId":5},
                                    {"id":3,"nombre":"Informatica",
                                    "ruta":"Informatica","paginaId":5},
                                    {"id":4,"nombre":"Recursos Humanos",
                                    "ruta":"rrhh","paginaId":5}]},
                            {"id":6,"usuario":69,
                              "titulo":"unidades de control","link":"unidades",
                              "activo":"Y","tags":" ","descripcion":" ",
                              "creado":"12-12-2015","actualizado":"12-12-2015",
                              "Submenu":
                                    [{"id":1,"nombre":"Auditoria Interna",
                                    "ruta":"Auditoria","paginaId":6},
                                    {"id":2,"nombre":"Legitimacion de Capitales",
                                    "ruta":"Legitimacion","paginaId":6},
                                    {"id":3,"nombre":"Consultoria Juridica",
                                    "ruta":"Consultoria","paginaId":6},
                                    {"id":4,"nombre":"Seguridad",
                                    "ruta":"seguridad","paginaId":6},
                                    {"id":4,"nombre":"Relaciones Publicas e Institucionales",
                                    "ruta":"Relaciones","paginaId":6}]},
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
         { title: 'One', content: "<p>Tabs will become paginated if there isn't enough room for them.</p>"},
         { title: 'Two', content: "<p>You can swipe left and right on a mobile device to change tabs.</p>"},
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
     //if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
    // if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
   });
   vm.addTab = function (title, view) {
     view = view || title + " Content View";
     tabs.push({ title: title, content: view, disabled: false});
   };
   vm.removeTab = function (tab) {
     var index = vm.tabs.indexOf(tab);
     console.log(index);
     tabs.splice(index, 1);
   };

    //------------------------------------------------------------------------------------------------------
    // Control y configuracion del Editor WYSIWYG
    //------------------------------------------------------------------------------------------------------

   $scope.content = '<p><strong>Hello World!</strong></p><img style="width: 30%;" src="images/logo.png">';
       $scope.editorConfig = {
     sanitize: false,
     toolbar: [
         { name: 'basicStyling', items: ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'leftAlign', 'centerAlign', 'rightAlign', 'blockJustify', '-'] },
         { name: 'paragraph', items: ['orderedList', 'unorderedList', 'outdent', 'indent', '-'] },
         { name: 'doers', items: ['removeFormatting', 'undo', 'redo', '-'] },
         { name: 'colors', items: ['fontColor', 'backgroundColor', '-'] },
         { name: 'links', items: ['image', 'hr', 'symbols', 'link', 'unlink', '-'] },
         { name: 'tools', items: ['print', '-'] },
         { name: 'styling', items: ['font', 'size', 'format'] },
     ]
       };
       //describe api
       $scope.api = {
     scope: $scope,
     insertImage: function() {
         var deferred = $q.defer();
         $timeout(function() {
       var val = prompt('Enter image url', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg');
       if(val) {
           deferred.resolve('<img src="' + val + '" style="width: 30%;">');
       }
       else {
           deferred.reject(null);
       }
         }, 1000);
         return deferred.promise;
     }
       };
       $scope.$watch('content', function(newValue) {
     $log.info(newValue);
       });
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
