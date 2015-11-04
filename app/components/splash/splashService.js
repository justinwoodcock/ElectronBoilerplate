(function() {
    'use strict';

    var DiskDbService = require('./components/services/diskDbService.js');

    angular.module('app')
        .service('splashService', ['$q', SplashService]);

    function SplashService($q) {
        return {
            getCollection: getCollection
        }

        function getCollection(collection) {
            return DiskDbService.getCollection(collection);
        };
    };

})();