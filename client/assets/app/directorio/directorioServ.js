(function(){
  'use strict'
  function directorioServ ($q, $resource, $location) {

    // Promise-based API
    return $resource( $location.protocol() +'://'+location.host+'/directorio');
    //return $resource('http://localhost:3000/directorio');
  };

  angular.module('App')
         .service('directorioServ',['$q','$resource', '$location', directorioServ]);

})();
