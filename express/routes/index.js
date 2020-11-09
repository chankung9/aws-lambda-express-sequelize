'use strict'


const routes = require('express').Router();
const users = require('./users');
const path = require('path')

routes.get('/sam', (req, res) => {
  var options = {
    root: path.join(__dirname, '../../'),
  }
  res.sendFile('sam-logo.png', options);
})

/* GET home page. */
routes.get('/', (req, res) => {
  res.render('index', {
    apiUrl: req.apiGateway ? `https://${req.apiGateway.event.headers.Host}/${req.apiGateway.event.requestContext.stage}` : 'http://localhost:3000'
  })
})

routes.use('/consumers', consumers);

module.exports = routes;
