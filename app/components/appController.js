(function () {
    'use strict';
    angular.module('app')
        .controller('appController', ['$scope', '$mdSidenav', AppController]);
    
    function AppController($scope, $mdSidenav) {

        $scope.toggleNav = function(navId) {
          $mdSidenav(navId).toggle();
        };

        $scope.openNotifications = function($mdOpenMenu, $event) {
          $mdOpenMenu($event);
        };

        $scope.openUserMenu = function($mdOpenMenu, $event) {
          $mdOpenMenu($event);
        };

        $scope.navItems = [
          {
            title: 'Splash',
            sub: 'Back to the splash screen.',
            link: 'splash'
          },
          {
            title: 'Boilerplate',
            sub: 'Quick boilerplate to create a new view.',
            link: 'boilerplate'
          }
        ];

        $scope.getCollection = function(collection) {
          return boilerplateService.getCollection(collection);
        };

    }

})();