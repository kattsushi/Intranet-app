(function(){
  'use strict'
  function agendaServ ($resource) {
     return $resource('http://192.168.1.16:3000/usuario')
  }
  angular.module('App')
         .service('agendaServ',agendaServ);

})();
