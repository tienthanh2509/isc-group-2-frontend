"use strict";

app.controller('facultyController', function ($scope, facultyService) {
    facultyService.getData().then(function (response) {
        // // Xử lý dữ liệu lấy được từ server
        // angular.forEach(response.data, function (value, key) {
        //
        // });

        // Data binding
        $scope.faculty_list = response.data;
    }, function (reason) {
        // TODO: Thiết lập thông báo lỗi
    });
});
