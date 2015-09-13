(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("movieService",
            ["$resource","serverSettings", movieService]);
    
    function movieService($resource, serverSettings) {
        return $resource(serverSettings.serverPath + "api/movies/:id");
    }
}());