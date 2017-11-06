'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.urlencoded({
    extend: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 4000;

router.get('/', function (req, res) {
    var post = req.body;
    res.json({
        response: post
        //message: 'WELCOME TO THE API!'
    });
});

router.post('/', function (req, res) {
    var post = req.body;
    res.json({
        response: req
    });
});

app.use('/api', router);

app.listen(port);
console.log('I am listening to you on port ' + port);