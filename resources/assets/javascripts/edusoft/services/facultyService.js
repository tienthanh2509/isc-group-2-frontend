"use strict";

app.factory('facultyService', function ($http) {
    var API_URL = '/api/v1/faculty';
    var api = {};

    api.getAll = function () {
        return $http.get(API_URL);
    };

    api.addNew = function (data) {
        return $http.post(API_URL, data);
    };

    return api;
});
