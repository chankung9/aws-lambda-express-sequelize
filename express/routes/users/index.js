const router = require('express').Router();

const all = require('./all');
const create = require('./create');
const update = require('./update');
const getUser = require('./getUser')
const deleteUser = require('./deleteUser');

router.get('/', all);
router.post('/', create)
router.get('/:userId', getUser)
router.put('/:userId', update)
router.delete('/:userId', deleteUser)

module.exports = router;