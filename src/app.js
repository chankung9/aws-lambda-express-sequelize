'use strict'

const cors = require('cors')
const routes = require('./routes')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

if (process.env.NODE_ENV === 'test') {
  app.use('/sam', compression())
} else {
  app.use(compression())
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(awsServerlessExpressMiddleware.eventContext())

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Not found' })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send({ error: err })
});

module.exports = app
