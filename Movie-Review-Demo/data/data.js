(function () {

    "use strict";
    
    //Creating Module
    var app = angular.module("moviesApp", ["ui.router", "common.services"]);
    
   //Creating Routes
    //app.config(function($routeProvider) {
    //    $routeProvider.when("/", {
    //        controller: "moviesCtrl",
    //        templateUrl: "/app/home/home.html"
    //    });
    //    $routeProvider.when("/newMovie", {
    //        controller: "newMovieCtrl",
    //        templateUrl: "/app/newMovie/newMovie.html"
    //    });
    //    $routeProvider.otherwise({ templateUrl: 'app/notfound/notFound.html' });
    //});
    app.config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
           /* $urlRouterProvider.otherwise({ templateUrl: 'app/notfound/notFound.html' });*/
            $stateProvider
                .state("movies", {
                    url: "/",
                    templateUrl: "app/home/home.html",
                    controller: "moviesCtrl"
                })
                .state("newMovie", {
                    url: "/newMovie",
                    templateUrl: "app/newMovie/newMovie.html",
                    controller: "newMovieCtrl",
                });
        }]);

}());