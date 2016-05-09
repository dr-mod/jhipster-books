(function() {
    'use strict';
    angular
        .module('jhipsterApp')
        .factory('Genre', Genre);

    Genre.$inject = ['$resource'];

    function Genre ($resource) {
        var resourceUrl =  'api/genres/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
