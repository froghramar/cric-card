(function () {
    var app = angular.module("cric-app");
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('base', {
                url: "",
                templateUrl: "views/home.html"
            })
            .state('home', {
                url: "/home",
                templateUrl: "views/home.html"
            })
            .state('match', {
                url: "/match/:matchid",
                templateUrl: "views/match.html"
            })
            .state('play', {
                url: "/play",
                templateUrl: "views/play.html",
                controller: 'play-ctrl'
            })
            .state('404', {
                url: "/404",
                templateUrl: "views/404.html"
            });
        $urlRouterProvider.otherwise("/404");
        $locationProvider.hashPrefix('');
    });
})();
