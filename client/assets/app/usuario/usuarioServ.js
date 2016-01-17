(function(){
  'use strict'
  function usuarioServ ($resource, $location) {
    var uri = $location.protocol() +'://'+location.host+'/inicio';
    var factory = {
        iniciar : $resource( uri, {} , {
          sesion:{method:'GET', isArray : true, params: {nombreUsuario: '@nombreUsuario', clave: '@clave'}}
          })
        }
     return factory;
      }

  angular.module('App')
         .factory('usuarioServ',['$resource','$location',usuarioServ]);

})();
