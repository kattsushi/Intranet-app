(function(){
    'use strict'
   /**
   * Controlador de la Administracion de la aplicacion
   * @param ini
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */

    function paginaCtrl ($scope, $q, $log, $timeout, $cookieStore, $resource, mainService, $sce) {

     var pag = this ;


      //------------------------------------------------------------------------------------------------------
      // Control y configuracion del Editor WYSIWYG
      //------------------------------------------------------------------------------------------------------


      $scope.content = '<p><strong>Hello World!</strong></p><img style="width: 30%;" src="images/logo.png">';
          $scope.editorConfig = {
        sanitize: true,
        toolbar: [
            { name: 'basicStyling', items: ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'leftAlign', 'centerAlign', 'rightAlign', 'blockJustify', '-'] },
            { name: 'paragraph', items: ['orderedList', 'unorderedList', 'outdent', 'indent', '-'] },
            { name: 'doers', items: ['removeFormatting', 'undo', 'redo', '-'] },
            { name: 'colors', items: ['fontColor', 'backgroundColor', '-'] },
            { name: 'links', items: ['image', 'hr', 'symbols', 'link', 'unlink', '-'] },
            { name: 'tools', items: ['print', '-'] },
            { name: 'styling', items: ['font', 'size', 'format'] },
        ]
          };
          //describe api
        $scope.api = {
        scope: $scope,
        insertImage: function() {
            var deferred = $q.defer();
            $timeout(function() {
          var val = prompt('Enter image url', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg');
          if(val) {
              deferred.resolve('<img src="' + val + '" style="width: 30%;">');
          }
          else {
              deferred.reject(null);
          }
            }, 1000);
            return deferred.promise;
        }
          };
          $scope.$watch('content', function(newValue) {
                          $log.info(newValue);
                            });

        pag.categorias = mainService.duro;

        var myEl = angular.element( document.querySelector( '#divID' ) );



        var e;
        pag.Guardar = function (text) {
          e = text;
          myEl.prepend(e);
        }


    }
      angular.module('App')
             .controller('paginaCtrl',['$scope', '$q', '$log', '$timeout', '$cookieStore',  '$resource', 'mainService', '$sce' , paginaCtrl])

             .filter('html', ['$sce', function ($sce) {
                  return function (text) {
                    return $sce.trustAsHtml(text);
                    };
                }])
})();
