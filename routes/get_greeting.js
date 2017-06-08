var express = require('express');
var router = express.Router();

router.get('/',
    function (req, res) {
        res.send('Welcome to express app');
    });

module.exports = router;

//http://mherman.org/blog/2016/05/26/swagger-and-nodejs/#.WTlf2ROGO5x