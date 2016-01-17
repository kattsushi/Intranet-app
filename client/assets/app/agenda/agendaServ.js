(function(){
  'use strict'
  function agendaServ ($q, $resource, $location) {

    // Promise-based API
    return $resource( $location.protocol() +'://'+location.host+'/agenda');
    //return $resource('http://localhost:3000/agenda');
  };

  angular.module('App')
         .service('agendaServ',['$q','$resource', '$location', agendaServ]);

})();
