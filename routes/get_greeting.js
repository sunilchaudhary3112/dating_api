var express = require('express');
var router = express.Router();

/**
 * @swagger
 * definition:
 *   Greeting:
 *     properties:
 *       name:
 *         type: string
 */

/**
 * @swagger
 * /api/test/{name}:
 *   get:
 *     tags:
 *       - test
 *     description: Returns greetings message
 *     produces:
 *       - application/json
*     parameters:
 *       - name: name
 *         description: Your name
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Server working fine
 *         schema:
 *           $ref: '#/definitions/Greeting'
 */
router.get('/:name',
    function (req, res) {
        var name = req.params.name
        res.send("Welcome to express app " + name);
    });

module.exports = router;