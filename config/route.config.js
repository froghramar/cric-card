(function () {
    var app = angular.module("cric-app");
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
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
              templateUrl: "views/play.html"
          });
    });
})();
