(function () {
    'use strict';
    angular.module('app')
        .controller('splashController', ['$scope', 'splashService', SplashController]);
    
    function SplashController($scope, splashService) {
        $scope.getUserData = function() {
          return splashService.getCollection('user');
        };
    }

})();