(function(){
  'use strict'
  function paginaServ ($resource) {
       return $resource('http://localhost:3000/paginas/:id', {},
       {get :{method:'GET',transformResponse:
            function (data, headers) {return JSON.parse(data).list; }},
            isArray: true 
          });
      }

  angular.module('App')
         .factory('paginaServ',paginaServ);

})();
