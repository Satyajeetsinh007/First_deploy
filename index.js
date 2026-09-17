var express = require('express');
var app = express();
require('dotenv').config()
app.get('/', function (req, res) {
    res.set("content-type", "text/plain");
    res.send("Hello world!");
});

app.get('/demo', (req, res) => {
    res.set("content-type", "text/html");
    res.send('<h1>Demo app</h1>')
})
app.listen(process.env.PORT);