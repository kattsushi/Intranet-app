'use strict';
angular.module('app', [
    # Angular modules
    'ngRoute'
    'ngAnimate'
    # 3rd Party Modules
    'ui.bootstrap'
    'textAngular'
    # Custom modules
    'app.ui.ctrls'
    'app.ui.directives'
    'app.ui.services'
    'app.controllers'
    'app.page.ctrls'
])

.config([
    '$routeProvider'
    ($routeProvider) ->
        $routeProvider
            # dashboard
            .when(
                '/'
                redirectTo: '/inicio'
            )
            .when(
                '/inicio'
                templateUrl: 'views/inicio.html'
            )
            .when(
                '/dashboard1'
                templateUrl: 'views/dashboard1.html'
            )
            .when(
                '/404'
                templateUrl: 'views/pages/404.html'
            )
            .when(
                '/pages/500'
                templateUrl: 'views/pages/500.html'
            )
            .otherwise(
                redirectTo: '/404'
            )
])
# .run([
#     '$rootScope'
#     ($rootScope) ->

#         $rootScope.$on('$routeChangeStart', (event, next, current) ->
#             console.log 'routeChangeStart'
#         )

#         $rootScope.$on('$routeChangeSuccess', (event, current, previous, rejection) ->
#             console.log 'routeChangeSuccess'
#         )
# ])
