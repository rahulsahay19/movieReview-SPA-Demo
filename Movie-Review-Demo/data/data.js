(function () {

    "use strict";
    
    //Creating Module
    var app = angular.module("moviesApp", ["ngRoute"]);
    
   //Creating Routes
    app.config(function($routeProvider) {
        $routeProvider.when("/", {
            controller: "moviesCtrl",
            templateUrl: "/app/home/home.html"
        });
        $routeProvider.when("/newMovie", {
            controller: "newMovieCtrl",
            templateUrl: "/app/newMovie/newMovie.html"
        });
        $routeProvider.otherwise({ templateUrl: 'app/notfound/notFound.html' });
    });

}());