(function () {
    "use strict";

    //wrapped in an array
    //Benefit:- So, if you min this file, your code won't break
    angular
        .module("moviesApp")
        .controller("moviesCtrl",
            ["movieService", moviesCtrl]);

    function moviesCtrl(movieService) {
        var vm = this;
        //query will issue get request
        movieService.query(function (data) {
            vm.movies = data;
        });
    }
}());