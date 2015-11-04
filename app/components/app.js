
(function () {
    'use strict';
    
    var _templateBase = './components';
    
    angular.module('app', [
        'ui.router',
        'ngMaterial',
        'ngAnimate',
        'ngPrettyJson'
    ])
    .config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('blue-grey');

        $stateProvider
            .state('splash', {
                url: '/',
                views: {
                    main: {
                        templateUrl: _templateBase + '/splash/splash.html',
                        controller: 'splashController'
                    }
                }
            })
            .state('boilerplate', {
                url: '/boilerplate',
                views: {
                    main: {
                        templateUrl: _templateBase + '/boilerplate/boilerplate.html',
                        controller: 'boilerplateController'
                    },
                    header: {
                        templateUrl: _templateBase + '/common/header.html'
                    },
                    sidenav: {
                      templateUrl: _templateBase + '/common/nav.html'  
                    }
                }
            })
            $urlRouterProvider.otherwise('/');
        }
    ]);

})();