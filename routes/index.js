'use strict'

const routes = require('express').Router();
const users = require('./users')

/* GET home page. */
routes.get('/', (req, res) => {
  res.send('hello world')
})

routes.use('/users', users);

module.exports = routes;
