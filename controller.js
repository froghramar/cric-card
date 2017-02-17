(function () {
    var app = angular.module("cric-app", ["ngRoute"]);
    configRounting();
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
                .when("/live", {
                    templateUrl : "live.html"
                });
        });
    }
})();
