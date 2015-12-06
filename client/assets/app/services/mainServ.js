(function(){
  'use strict'
  function mainService ($resource) {
       return $resource('http://192.168.1.30:3000/menu');
      }
  angular.module('App')
         .factory('mainService',mainService);

})();
