(function(){
    'use strict'
    function agendaCtrl(agendaServ) {
      this.agenda = agendaServ.getData();
    }
      angular.module('App')
             .controller('agendaCtrl',agendaCtrl);
})();