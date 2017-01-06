"use strict";

/**
 * Cấu hình AngularJS
 * @type {angular.Module}
 */
var app = angular.module('costEstimates', ['ngRoute']);
// Định tuyến
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when("/", {
            templateUrl: "page/welcome.html",
            controller: "finalExamController"
        })
        .when("/about", {
            templateUrl: "page/about.html"
        })
        .when("/contact", {
            templateUrl: "page/contact.html"
        })
        .otherwise('/');
}]);
