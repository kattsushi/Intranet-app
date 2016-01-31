(function(){
    'use strict'
   /**
   * Controlador de inicio de sesion.
   * @param ini
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
    function inicioCtrl ($scope, $q,
                         usuarioServ, $log,
                         $cookieStore, $location,
                         $resource, $mdDialog) {
      var ini = this;
      var inicioSesion = $q.defer();
      inicioSesion.promise.then(usrASesion);

      function usrASesion(usr) {
        console.log(usr);
        $scope.usrConectado.nombre = usr[0].nombre;
        $scope.usrConectado.nivel = usr[0].nivel;
        $scope.usrConectado.estaConectado = true;
        $log.info($scope.usrConectado);
        $cookieStore.put('estaConectado', true);
        $cookieStore.put('usuario', usr);
        $location.path('/');
      };

      ini.iniciarSesion = function(ev) {
        var inicio = {
              nombreUsuario: ini.usuario.nombreUsuario,
              clave: ini.usuario.clave
            };

        var usr = usuarioServ.iniciar.sesion(inicio)
          .$promise.then(function(usr,ev) {
            if (usr.length != 0) {
              inicioSesion.resolve(usr);
            }else{
              console.log("usuario o contraseña incorrectos");
              inicioSesion.reject(usr);

              (function(ev) {
                // Appending dialog to document.body to cover sidenav in docs app
                // Modal dialogs should fully cover application
                // to prevent interaction outside of dialog
                $mdDialog.show(
                $mdDialog.alert()

                  .clickOutsideToClose(true)
                  .title('Atencion')
                  .textContent('El Usuario o Contraseña ingresados son invalidos')
                  .ariaLabel('Alert Dialog')
                  .ok('Ok')
                  .targetEvent(ev)
                );
              })();
                  $location.path('/');
            }
          });
        };

        ini.ubicaciones = $resource( $location.protocol() +'://'+location.host+'/ubicacion').query();
        console.log(ini.ubicaciones);

        ini.registrar = function (ev) {
          var registro = {
            usuario : ini.nombreUsuario,
            nombre  : ini.nombre,
            apellido: ini.apellido,
            correo  : ini.correo,
            telefono: ini.telefono,
            ubicacion: ini.ubicacion,
            contraseña: ini.pass,
            confircontraseña : ini.pass2
          }
          usuarioServ.iniciar.registro(registro).save();
            }
      }
      angular.module('App')
             .controller('inicioCtrl',['$scope',
                                       '$q',
                                       'usuarioServ',
                                       '$log',
                                       '$cookieStore',
                                       '$location',
                                       '$resource',
                                       '$mdDialog',
                                        inicioCtrl])
             .directive('confirmPwd', function($interpolate, $parse) {
                            return {
                              require: 'ngModel',
                              link: function(scope, elem, attr, ngModelCtrl) {

                                var pwdToMatch = $parse(attr.confirmPwd);
                                var pwdFn = $interpolate(attr.confirmPwd)(scope);

                                scope.$watch(pwdFn, function(newVal) {
                                    ngModelCtrl.$setValidity('password', ngModelCtrl.$viewValue == newVal);
                                })

                                ngModelCtrl.$validators.password = function(modelValue, viewValue) {
                                  var value = modelValue || viewValue;
                                  return value == pwdToMatch(scope);
                                };

                              }
                            }
                          });
})();
