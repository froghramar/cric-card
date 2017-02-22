(function () {
    var app = angular.module("cric-app");
    app.controller('play-ctrl', function ($scope) {
        $scope.teamlist = ['Bangladesh', 'England', 'Australia', 'India'];
        $scope.team1 = 'Bangladesh';
        $scope.team2 = 'England';
        $scope.bowlingTeam = 'team1';
    });
})();
