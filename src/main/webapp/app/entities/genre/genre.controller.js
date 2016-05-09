(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('GenreController', GenreController);

    GenreController.$inject = ['$scope', '$state', 'Genre'];

    function GenreController ($scope, $state, Genre) {
        var vm = this;
        vm.genres = [];
        vm.loadAll = function() {
            Genre.query(function(result) {
                vm.genres = result;
            });
        };

        vm.loadAll();
        
    }
})();
