'use strict';
angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'textAngular', 'app.ui.ctrls', 'app.ui.directives', 'app.ui.services', 'app.controllers', 'app.page.ctrls']).config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      redirectTo: '/inicio'
    }).when('/inicio', {
      templateUrl: 'views/inicio.html'
    }).when('/dashboard1', {
      templateUrl: 'views/dashboard1.html'
    }).when('/404', {
      templateUrl: 'views/pages/404.html'
    }).when('/pages/500', {
      templateUrl: 'views/pages/500.html'
    }).otherwise({
      redirectTo: '/404'
    });
  }
]);
