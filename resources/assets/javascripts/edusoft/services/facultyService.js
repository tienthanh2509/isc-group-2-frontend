"use strict";

app.factory('facultyService', function ($http) {
    return {
        getData: function (location) {
            var API_URL = '/api/v1/';
            return $http.get(API_URL + 'faculty');
        }
    };
});
