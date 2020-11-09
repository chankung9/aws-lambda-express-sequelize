const user = require('../../controllers/user.js');

module.exports = (req, res) => {
  user
    .list()
    .then(users => res.json(users))
}
