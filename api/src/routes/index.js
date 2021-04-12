'use strict'

const router = require('express').Router();
const userController = require('../controllers/user')

/* GET home page. */
router.get('/', (req, res) => {
  res.send('hello world')
})

/* User Router */
router.get('/users', userController.list);
router.post('/users', userController.create);
router.post('/users/login', userController.login);

module.exports = router;
