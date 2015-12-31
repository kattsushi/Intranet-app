(function(){
  'use strict'
  function agendaFilt () {

    return function (input, start) {
      start = +start;
      return input.slice(start);
    }
  };

  angular.module('App')
         .filter('startFrom',[agendaFilt]);

})();
