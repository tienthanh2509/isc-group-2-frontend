"use strict";

app.controller('finalExamController', function ($scope, apiService) {
    apiService.getData().then(function (response) {
        // // Xử lý dữ liệu lấy được từ server
        // angular.forEach(response.data.readers, function (value, key) {
        //
        // });

        // Data binding
        $scope.readers = response.data.readers;
    }, function (reason) {
        // TODO: Thiết lập thông báo lỗi
    });
});
