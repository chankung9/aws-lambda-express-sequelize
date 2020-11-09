const router = require('express').Router();

const all = require('./all');

router.get('/', all);

module.exports = router;