(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('GenreDetailController', GenreDetailController);

    GenreDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Genre', 'Book'];

    function GenreDetailController($scope, $rootScope, $stateParams, entity, Genre, Book) {
        var vm = this;
        vm.genre = entity;
        
        var unsubscribe = $rootScope.$on('jhipsterApp:genreUpdate', function(event, result) {
            vm.genre = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
