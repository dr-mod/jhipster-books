(function() {
    'use strict';
    angular
        .module('jhipsterApp')
        .factory('Book', Book);

    Book.$inject = ['$resource', 'DateUtils'];

    function Book ($resource, DateUtils) {
        var resourceUrl =  'api/books/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.releaseDate = DateUtils.convertDateTimeFromServer(data.releaseDate);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
