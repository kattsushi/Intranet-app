(function(){
    'use strict'
   /**
   * Controlador de la Administracion de la aplicacion
   * @param ini
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */

    function AdminCtrl ($scope, $q, usuarioServ, $log, $cookieStore, $location, $resource,$mdDialog) {


}
      angular.module('App')
             .controller('AdminCtrl',['$scope',
                                       '$q',
                                       'usuarioServ',
                                       '$log',
                                       '$cookieStore',
                                       '$location',
                                       '$resource',
                                       '$mdDialog',
                                        AdminCtrl]);
})();
