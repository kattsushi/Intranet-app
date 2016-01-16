(function(){
  'use strict'
  function usuarioServ ($resource) {

    var factory = {
        iniciar : $resource('https://intranet-app.herokuapp.com/inicio'	, {} , {
          sesion:{method:'GET', isArray : true, params: {nombreUsuario: '@nombreUsuario', clave: '@clave'}}
          })
        }
     return factory;
      }

  angular.module('App')
         .factory('usuarioServ',usuarioServ);

})();
