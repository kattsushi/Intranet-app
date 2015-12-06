(function(){
    'use strict'
    function menuCtrl(menuService) {
      this.titulos = menuService.getData();
    }
      angular.module('App')
             .controller('menuCtrl',menuCtrl);
})();
