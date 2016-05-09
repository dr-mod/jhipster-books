(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('BookDetailController', BookDetailController);

    BookDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Book', 'Author', 'Genre'];

    function BookDetailController($scope, $rootScope, $stateParams, entity, Book, Author, Genre) {
        var vm = this;
        vm.book = entity;
        
        var unsubscribe = $rootScope.$on('jhipsterApp:bookUpdate', function(event, result) {
            vm.book = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
