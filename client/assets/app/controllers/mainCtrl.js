(function(){
    'use strict'
    function mainCtrl(menuService) {
      this.titulos = menuService.getData();
            
    }
      angular.module('App')
             .controller('mainCtrl',mainCtrl);
})();