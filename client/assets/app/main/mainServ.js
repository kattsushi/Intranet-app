(function(){
  'use strict'
  function mainService ($resource) {
       return $resource('http://192.168.1.16:3000/menu');
      }
   
  angular.module('App')
         .factory('mainService',mainService);
         
})();
