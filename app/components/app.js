
(function () {
    'use strict';
    
    var _templateBase = './components';
    
    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate',
        'ngPrettyJson'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/splash/splash.html' ,
                controller: 'splashController'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);

})();