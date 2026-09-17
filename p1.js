var express = require('express');
var app = express();
require('dotenv').config()
app.get('/', function (req, res) {
    res.set("content-type", "text/plain");
    res.send("Hello world!");
});
app.listen(process.env.PORT);