(function(){
  'use strict'
  function agendaServ ($q, $resource) {

    // Promise-based API
    return $resource('http://localhost:3000/agenda');
  };

  angular.module('App')
         .service('agendaServ',['$q','$resource', agendaServ]);

})();
