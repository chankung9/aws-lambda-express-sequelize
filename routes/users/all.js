const { User } = require('../../models');

module.exports = (req, res) => {
  User.findAll().then(users => res.json(users))
}
