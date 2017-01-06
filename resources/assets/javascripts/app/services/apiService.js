"use strict";

app.factory('apiService', function ($http) {
    return {
        getData: function (location) {
            // Cross origin warning!
            var API_URL = 'http://www.saigontech.edu.vn/lib-api/readers.php';

            return $http.get(API_URL);
        }
    };
});
