(function(){
  'use strict'
  function usuarioServ ($resource) {

    var factory = {
        iniciar : $resource('http://localhost:3000/inicio'	, {} , {
          sesion:{method:'GET', isArray : true, params: {nombreUsuario: '@nombreUsuario', clave: '@clave'}}
          })
        }
     return factory;
      }

  angular.module('App')
         .factory('usuarioServ',usuarioServ);

})();
