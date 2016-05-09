(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .controller('GenreDialogController', GenreDialogController);

    GenreDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Genre', 'Book'];

    function GenreDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Genre, Book) {
        var vm = this;
        vm.genre = entity;
        vm.books = Book.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        var onSaveSuccess = function (result) {
            $scope.$emit('jhipsterApp:genreUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.genre.id !== null) {
                Genre.update(vm.genre, onSaveSuccess, onSaveError);
            } else {
                Genre.save(vm.genre, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
