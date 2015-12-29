(function(){
  'use strict'
  function mainService ($resource) {
       return $resource('http://localhost:3000/menu/:id', {},
       {get :{method:'GET',transformResponse:
            function (data, headers) {return JSON.parse(data).list; }},
            isArray: true //since your list property is an array
          });
      }

  angular.module('App')
         .factory('mainService',mainService);

})();
