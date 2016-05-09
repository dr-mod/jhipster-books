(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('GenreDeleteController',GenreDeleteController);

    GenreDeleteController.$inject = ['$uibModalInstance', 'entity', 'Genre'];

    function GenreDeleteController($uibModalInstance, entity, Genre) {
        var vm = this;
        vm.genre = entity;
        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        vm.confirmDelete = function (id) {
            Genre.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };
    }
})();
