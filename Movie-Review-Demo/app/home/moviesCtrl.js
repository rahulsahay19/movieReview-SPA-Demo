(function() {
    "use strict";

    var mockData = [{
        id: 1,
        movieName: "Titanic",
        releaseYear: "1997",
        directorName: "James Cameron",
        noOfReviews: 300
    },
            {
                id: 2,
                movieName: "Godzilla",
                releaseYear: "2014",
                directorName: "Gareth Edwards",
                noOfReviews: 250
            },
            {
                id: 3,
                movieName: "Die Another Day",
                releaseYear: "2014",
                directorName: "Lee Tamahori",
                noOfReviews: 250
            },
            {
                id: 4,
                movieName: "Taken 3",
                releaseYear: "2014",
                directorName: "Olivier Megaton",
                noOfReviews: 150
            },
            {
                id: 5,
                movieName: "Top Gun",
                releaseYear: "1986",
                directorName: "Tony Scott",
                noOfReviews: 170
            }];
    
    angular.module("moviesApp").controller("moviesCtrl", function moviesCtrl($scope) {
        $scope.movies = mockData;
    });
}());