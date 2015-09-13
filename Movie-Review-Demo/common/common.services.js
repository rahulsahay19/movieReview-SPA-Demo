(function() {
    "use strict";
    angular.module("common.services", ["ngResource"])
        .constant("serverSettings",
            {        
                //Define API Server Path 
                //You need to replace the port with your API Project port.
                //In case of Prod deploymennt, below URL will get replaced with Prod URL
                serverPath: "http://localhost:62896/"
            });
}());

