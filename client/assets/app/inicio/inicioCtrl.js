(function(){
    'use strict'
   /**
   * Controlador de inicio de sesion.
   * @param ini
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */

    function inicioCtrl ($q, usuarioServ, $log, $cookieStore, $location) {

    var ini = this;
    var inisioSesion = $q.defer();

    inisioSesion.promise.then(usrASesion);

    function usrASesion(usr) {
      ini.usrConectado.nombre = usr.nombre;
      ini.usrConectado.puesto = usr.puesto;
      ini.usrConectado.estaConectado = true;

      $log.info(ini.usrConectado);

      $cookieStore.put('estaConectado', true);
      $cookieStore.put('usuario', usr);

      $location.path('/');
    };

    ini.inisiarSesion = function() {
      var usr = usuarioServ.iniciar.sesion({nombreUsuario: ini.usuario.nombreUsuario, clave: ini.usuario.clave})
        .$promise.then(function(usr) {
          inisioSesion.resolve(usr);
        });
    };
}
      angular.module('App')
             .controller('inicioCtrl',['$q',
                                       'usuarioServ',
                                       '$log',
                                       '$cookieStore',
                                       '$location',
                                        inicioCtrl]);
})();
