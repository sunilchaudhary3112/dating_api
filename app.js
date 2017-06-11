const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const greeting_route = require('./routes/get_greeting');
const beer_route = require('./routes/beer');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test");

// swagger definition
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.use('/api/test', greeting_route);
app.use('/api', beer_route);

// serve swagger
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.listen(3000, () => console.log('Server running at port 3000'));