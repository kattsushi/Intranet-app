(function(){
  'use strict'
  function menuService () {
    return {
      getData: getData
    }

    function getData () {
        var datos = [
          { titulo: "Inicios", ruta: "inicio"},
          { titulo: "Quienes Somos", ruta: "compañia" },
          { titulo: "Configuracion" , ruta : "Config"}
        ];
        return datos;
    }
  }
  angular.module('App')
         .service('menuService',menuService);

})();
