(function(){
    'use strict'
    function menuCtrl(menuService,mainService) {
      this.titulos = menuService.getData();
    
      this.menu = mainService.query();
    }
      angular.module('App')
             .controller('menuCtrl',menuCtrl);
})();
