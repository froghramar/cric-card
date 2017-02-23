(function (angular) {

    'use strict';

    var app = angular.module("cricApp");
    app.factory('repositoryFactory', factory);

    function factory(storageService) {

        function getAllData() {
            return storageService.getAllMatchData();
        }

        return {

        };

    }

})(window.angular);