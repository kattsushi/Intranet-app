(function(){
  'use strict'
  function menuService () {
    return {
      getData: getData
    }

    function getData () {
        var datos = [
                    { "titulo": "Inicio", "ruta": "/",
                      "submenu" :[{
                              "titulo" : "vision",
                              "ruta" :"vision"
                              },
                              {
                              "titulo" : "vision",
                              "ruta" :"vision"
                              }]
                    },
                    { "titulo": "Quienes Somos", "ruta": "compañia" },
                    { "titulo": "Agenda", "ruta": "agenda"},
                    { "titulo": "Configuracion" , "ruta" : "config"}
                  ];
        return datos;
    }
  }
  angular.module('App')
         .service('menuService',menuService);

})();
