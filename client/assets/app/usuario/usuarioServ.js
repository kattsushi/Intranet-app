(function(){
  'use strict'
  function usuarioServ ($resource) {

    var factory = {
        iniciar : $resource('http://192.168.1.2:3000/incio'	, {} , {
          sesion:{method:'GET', params: {nombreUsuario: '@nombreUsuario', clave: '@clave'}}
          })
        }
     return factory;
      }

  angular.module('App')
         .factory('usuarioServ',usuarioServ);

})();
