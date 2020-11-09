const { users } = require('../../../models/users');

module.exports = (req, res) => {
  res.json(users)
}