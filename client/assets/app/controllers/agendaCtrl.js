(function(){
    'use strict'
    function agendaCtrl(agendaServ) {
      this.agenda = agendaServ.query();
    }
      angular.module('App')
             .controller('agendaCtrl',agendaCtrl);
})();