(function(){
    'use strict'
   /**
   * Controlador de inicio de sesion.
   * @param ini
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */

    function inicioCtrl ($scope, $q, usuarioServ, $log, $cookieStore, $location, $resource) {

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

    ini.iniciarSesion = function() {
      var usr = usuarioServ.iniciar.sesion({nombreUsuario: ini.usuario.nombreUsuario, clave: ini.usuario.clave})
        .$promise.then(function(usr) {
          inicioSesion.resolve(usr);
       
        });
    };
}
      angular.module('App')
             .controller('inicioCtrl',['$scope',
                                       '$q',
                                       'usuarioServ',
                                       '$log',
                                       '$cookieStore',
                                       '$location',
                                       '$resource',
                                        inicioCtrl]);
})();
