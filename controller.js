(function () {
    var app = angular.module("cric-app", ["ngRoute"]);
    configRounting();
    configController();
    function configRounting() {
        app.config(function($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl : "home.html"
                })
                .when("/home", {
                    templateUrl : "home.html"
                })
                .when("/play", {
                    templateUrl : "play.html"
                })
                .when("/match/:matchid", {
                    templateUrl : "match.html"
                });
        });
    }
    function configController() {
        app.controller("match-ctrl", function($scope, $routeParams) {
            $scope.matchid = $routeParams.matchid;
        });
        app.controller('play-ctrl', function ($scope) {
            $scope.teamlist = ['Bangladesh', 'England', 'Australia', 'India'];
            $scope.team1 = 'Bangladesh';
            $scope.team2 = 'England';
            $scope.bowlingTeam = 'team1';
        })
    }
})();
