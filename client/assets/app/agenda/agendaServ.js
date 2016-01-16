(function(){
  'use strict'
  function agendaServ ($q, $resource) {

    // Promise-based API
    return $resource('https://intranet-app.herokuapp.com/agenda');
  };

  angular.module('App')
         .service('agendaServ',['$q','$resource', agendaServ]);

})();
