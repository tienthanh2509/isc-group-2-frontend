/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

/**
 * Created by Thanh on 1/16/2017.
 */

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Parse application/json
app.use(bodyParser.json());
// WebRoot
app.use(express.static('public'));

// API Section - Mock data
app.get('/api/v1/faculty', function (req, res) {
    var faculty = [
        {
            "id": "1",
            "ids": "KHNN",
            "name": "Tiếng Anh học thuật"
        },
        {
            "id": "2",
            "ids": "CNTT",
            "name": "Công nghệ thông tin"
        },
        {
            "id": "3",
            "ids": "QTKD",
            "name": "Kinh doanh - quản lý"
        },
        {
            "id": "4",
            "ids": "TTQT",
            "name": "Thực tập quốc tế"
        }
    ];

    res.json(faculty);
});
app.post('/api/v1/faculty', function (req, res) {
    var faculty = [
        {
            "error": 0,
            "message": "OK"
        }
    ];

    res.json(faculty);
    console.log(req.body);
});
app.delete('/api/v1/faculty/:id', function (req, res) {
    var faculty = [
        {
            "error": 0,
            "message": "OK"
        }
    ];

    res.json(faculty);
    console.log(req.body);
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});
