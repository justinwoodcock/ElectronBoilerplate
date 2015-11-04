(function() {
    'use strict';

    // var DiskDbService = require('./components/services/diskDbService.js');

    angular.module('app')
        .service('boilerplateService', ['$q', BoilerplateService]);

    function BoilerplateService($q) {
        return {
            getCollection: getCollection
        }

        function getCollection(collection, query) {
            return DiskDbService.getCollection(collection, query);
        };
    };

})();