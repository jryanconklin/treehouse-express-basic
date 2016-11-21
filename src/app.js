/*jslint node: true */

'use strict';

var express = require('express')
var app = express()

app.get('/', function(request, response) {
    response.send('I love bacon!');
});

app.listen(3000);
