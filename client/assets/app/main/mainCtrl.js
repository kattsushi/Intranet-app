(function(){
    'use strict'
    function mainCtrl($timeout,
                      $mdSidenav,  
                      $rootScope,
                      mainService) {
          
            var vm = this;
           
           
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
           
           
            // vm.titulos = mainService.query();
            vm.titulos = datos;
            console.log(vm.titulos);  
             
             
             
             
             
               
            vm.onClickMenu = function () {
                $mdSidenav('left').toggle();
            }
            
                        
    }
      angular.module('App')
             .controller('mainCtrl',['$timeout',
                      '$mdSidenav',  
                      '$rootScope',
                      'mainService',    
             mainCtrl]);
})();