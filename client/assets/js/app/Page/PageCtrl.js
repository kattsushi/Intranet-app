'use strict';
angular.module('app.page.ctrls', [])
.controller('invoiceCtrl', [
  '$scope', '$window', function($scope, $window) {
    return $scope.printInvoice = function() {
      var originalContents, popupWin, printContents;
      printContents = document.getElementById('invoice').innerHTML;
      originalContents = document.body.innerHTML;
      popupWin = window.open();
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">" + printContents + "</html>');
      return popupWin.document.close();
    };
  }]);
  .controller('PaginaCtrl', ['$scope', function($scope) {
    $scope.mensaje='Texto cargado desde el controlador Pagina1Controller';

    $scope.menus = [{'id' : 001 , 'name' : 'Automovil' , 'iconf' : 'fa fa-car', 'categoria' : 'M',
           'ruta' : ' ',
            'submenu' : [{
                'id' : 002, 'name' : 'Pre-listado Ind' , 'categoria' : 'L',
                'ruta' : 'reporte1'} ,{
                'id' : 003, 'name' : 'Pre-listado flota' , 'categoria' : 'L',
                'ruta' : 'reporte2'} , {
                'id' : 004, 'name' : 'Tarifas' , 'categoria' : 'L',
                'ruta' : 'reporte3'} , {
                'id' : 005, 'name' : 'Tarifas' , 'categoria' : 'L',
                'ruta' : 'reporte3'
                        }]
       },
       {
           'id' : 006 , 'name' : 'Siniestros' , 'iconf' : 'fa fa-plus-square', 'categoria' : 'M',
            'ruta' : ' ',
            'submenu' : [{
                'id' : 002, 'name' : 'Ordenes de Pago' , 'categoria' : 'L',
                'ruta' : 'reporte1'} ,{
                'id' : 003, 'name' : 'Ordenes de Compra' , 'categoria' : 'L',
                'ruta' : 'reporte2'} , {
                'id' : 004, 'name' : 'Declaracion de Siniestros' , 'categoria' : 'L',
                'ruta' : 'reporte3'}],
       },
        {
            'id' : 010 , 'name' : 'Personas' ,  'iconf' : 'fa fa-male', 'categoria' : 'M',
            'ruta' : ' ',
            'submenu' : [{
                'id' : 002, 'name' : 'HCM individual' , 'categoria' : 'L',
                'ruta' : 'reporte1'} ,{
                'id' : 003, 'name' : 'Solidarios' , 'categoria' : 'L',
                'ruta' : 'reporte2'} , {
                'id' : 004, 'name' : 'GEH' , 'categoria' : 'L',
                'ruta' : 'reporte3'} , {
                'id' : 005, 'name' : 'Declaracion' , 'categoria' : 'L',
                'ruta' : 'reporte3'
                        }],

        },
        {
           'id' : 006 , 'name' : 'Intranet' , 'iconf': 'fa fa-globe', 'categoria' : 'M',
            'ruta' : ' ',
            'submenu' : [{
                'id' : 002, 'name' : 'Reporte 1' , 'categoria' : 'L',
                'ruta' : 'reporte1'} ,{
                'id' : 003, 'name' : 'Reporte 2' , 'categoria' : 'L',
                'ruta' : 'reporte2'}]
              } ] ;
}]);
