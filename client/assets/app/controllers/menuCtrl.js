(function(){
    'use strict'
    function menuCtrl(menuService,mainService) {
      this.titulos = menuService.getData();
    
      this.menu = mainService.query();
      console.log(this.menu);
    }
      angular.module('App')
             .controller('menuCtrl',menuCtrl);
})();
