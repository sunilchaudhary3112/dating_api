var Bear = require('../models/beer');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

/**
 * @swagger
 * definition:
 *   Beer:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /api/beers/:
 *   post:
 *     tags:
 *       - beers
 *     description: create beer product
 *     produces:
 *       - application/json
*     parameters:
 *       - name: name
 *         description: beer name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Beer'
 *     responses:
 *       200:
 *         description: beer added successfully
 */
router.post('/beers', function (req, res) {
    var bear = new Bear();
    bear.name = req.body.name;

    bear.save(function (err) {
        if (err) { res.send(err); }

        res.send('Product successfully created');
    });
});


/**
 * @swagger
 * /api/beers/:
 *   get:
 *     tags:
 *       - beers
 *     description: get all beer product
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: beer return successfully
 *         schema:
 *             $ref: '#/definitions/Beer'
 */
router.get('/beers', function (req, res) {
    Bear.find(function (err, data) {
        if (err) { res.send(err); }

        res.send(data);
    });
});



module.exports = router;