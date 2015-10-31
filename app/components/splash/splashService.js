(function() {
    'use strict';

    var DiskDbService = require('./components/server/diskDbService.js');

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