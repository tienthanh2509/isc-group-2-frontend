"use strict";

/**
 * Cấu hình AngularJS
 * @type {angular.Module}
 */
var app = angular.module('eduSoft', ['ngRoute']);
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

        .when("/faculty", {
            templateUrl: "page/faculty.html"
        })
        .when("/student", {
            templateUrl: "page/student.html"
        })
        .when("/classroom", {
            templateUrl: "page/classroom.html"
        })

        .when("/login", {
            templateUrl: "page/login.html"
        })
        .when("/forgot_password", {
            templateUrl: "page/forgot_password.html"
        })

        .otherwise('/');
}]);
