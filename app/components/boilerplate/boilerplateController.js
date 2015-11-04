(function () {
    'use strict';
    angular.module('app')
        .controller('boilerplateController', ['$scope', '$state', 'boilerplateService', '$mdSidenav', BoilerplateController]);
    
    function BoilerplateController($scope, boilerplateService, $mdSidenav) {

    };

})();