'use strict';
angular
  .module('myApp',['ngRoute'])
  .config(appConfig)
  .service('MyService', MyService)
  .directive('miItem', miItem)
  .directive('miDirectiva', miDirectiva);

function appConfig ($routeProvider , $interpolateProvider) {
  $routeProvider
    .when('/', {
      template: '<mi-directiva></mi-directiva>'
    });
  $interpolateProvider
    .startSymbol('{[{')
    .endSymbol('}]}');
}

function miDirectiva () {
  return {
    scope: {},
    controller: function(MyService) {
      this.productos = MyService.getData();
    },
    controllerAs: 'vm',
    template: [
      '<h1>Listado de Productos</h1>',
      '<ul>',
        '<mi-item ng-repeat="producto in vm.productos" data="producto">',
        '</mi-item>',
      '</ul>'
    ].join('')
  }
}

function miItem () {
  return {
    scope: {
      data: '='
    },
    template: [
      '<li>',
        '<strong>{[{ data.titulo }]}</strong>: ',
        '{[{ data.precio | currency }]}',
      '</li>'
    ].join('')
  }
}

function MyService () {
  return {
    getData: getData
  }

  function getData () {
      var datos = [
        { titulo: "Producto 1", precio: 2 },
        { titulo: "Producto 2", precio: 1.5 },
        { titulo: "Producto 3", precio: 4.2 },
        { titulo: "Producto 4", precio: 3 },
        { titulo: "Producto 5", precio: 2.5 }
      ];
      return datos;
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmFuZ3VsYXJcbiAgLm1vZHVsZSgnbXlBcHAnLFsnbmdSb3V0ZSddKVxuICAuY29uZmlnKGFwcENvbmZpZylcbiAgLnNlcnZpY2UoJ015U2VydmljZScsIE15U2VydmljZSlcbiAgLmRpcmVjdGl2ZSgnbWlJdGVtJywgbWlJdGVtKVxuICAuZGlyZWN0aXZlKCdtaURpcmVjdGl2YScsIG1pRGlyZWN0aXZhKTtcblxuZnVuY3Rpb24gYXBwQ29uZmlnICgkcm91dGVQcm92aWRlciAsICRpbnRlcnBvbGF0ZVByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy8nLCB7XG4gICAgICB0ZW1wbGF0ZTogJzxtaS1kaXJlY3RpdmE+PC9taS1kaXJlY3RpdmE+J1xuICAgIH0pO1xuICAkaW50ZXJwb2xhdGVQcm92aWRlclxuICAgIC5zdGFydFN5bWJvbCgne1t7JylcbiAgICAuZW5kU3ltYm9sKCd9XX0nKTtcbn1cblxuZnVuY3Rpb24gbWlEaXJlY3RpdmEgKCkge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7fSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbihNeVNlcnZpY2UpIHtcbiAgICAgIHRoaXMucHJvZHVjdG9zID0gTXlTZXJ2aWNlLmdldERhdGEoKTtcbiAgICB9LFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICB0ZW1wbGF0ZTogW1xuICAgICAgJzxoMT5MaXN0YWRvIGRlIFByb2R1Y3RvczwvaDE+JyxcbiAgICAgICc8dWw+JyxcbiAgICAgICAgJzxtaS1pdGVtIG5nLXJlcGVhdD1cInByb2R1Y3RvIGluIHZtLnByb2R1Y3Rvc1wiIGRhdGE9XCJwcm9kdWN0b1wiPicsXG4gICAgICAgICc8L21pLWl0ZW0+JyxcbiAgICAgICc8L3VsPidcbiAgICBdLmpvaW4oJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWlJdGVtICgpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgZGF0YTogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogW1xuICAgICAgJzxsaT4nLFxuICAgICAgICAnPHN0cm9uZz57W3sgZGF0YS50aXR1bG8gfV19PC9zdHJvbmc+OiAnLFxuICAgICAgICAne1t7IGRhdGEucHJlY2lvIHwgY3VycmVuY3kgfV19JyxcbiAgICAgICc8L2xpPidcbiAgICBdLmpvaW4oJycpXG4gIH1cbn1cblxuZnVuY3Rpb24gTXlTZXJ2aWNlICgpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXREYXRhOiBnZXREYXRhXG4gIH1cblxuICBmdW5jdGlvbiBnZXREYXRhICgpIHtcbiAgICAgIHZhciBkYXRvcyA9IFtcbiAgICAgICAgeyB0aXR1bG86IFwiUHJvZHVjdG8gMVwiLCBwcmVjaW86IDIgfSxcbiAgICAgICAgeyB0aXR1bG86IFwiUHJvZHVjdG8gMlwiLCBwcmVjaW86IDEuNSB9LFxuICAgICAgICB7IHRpdHVsbzogXCJQcm9kdWN0byAzXCIsIHByZWNpbzogNC4yIH0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlByb2R1Y3RvIDRcIiwgcHJlY2lvOiAzIH0sXG4gICAgICAgIHsgdGl0dWxvOiBcIlByb2R1Y3RvIDVcIiwgcHJlY2lvOiAyLjUgfVxuICAgICAgXTtcbiAgICAgIHJldHVybiBkYXRvcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
