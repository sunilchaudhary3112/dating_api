var swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');
var path = require('path');
const app = express();
const greeting_route = require('./routes/get_greeting');

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


app.use('/api/test', greeting_route);

// serve swagger
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.listen(3000, ()=> console.log('Server running at port 3000'));