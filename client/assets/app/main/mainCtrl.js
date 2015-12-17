(function(){
    'use strict'
    function mainCtrl(mainService) {
      this.titulos = mainService;
            
    }
      angular.module('App')
             .controller('mainCtrl',mainCtrl);
})();