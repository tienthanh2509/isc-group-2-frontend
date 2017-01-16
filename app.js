/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

/**
 * Created by Thanh on 1/16/2017.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});
