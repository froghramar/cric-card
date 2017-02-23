(function () {
    'use strict';
    var app = angular.module("cricApp");
    app.controller('playController', Constructor);
    function Constructor(storageService) {
        var vm = this;
        vm.teamlist = ['Bangladesh', 'England', 'Australia', 'India'];
        vm.team1 = 'Bangladesh';
        vm.team2 = 'England';
        vm.bowlingTeam = 'team1';
    }
})();
