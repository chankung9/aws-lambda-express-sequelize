let { users, userIdCounter } = require('../../../models/users');

module.exports = (req, res) => {
  const user = {
    id: ++userIdCounter,
    name: req.body.name
  }
  users.push(user)

  res.status(201).json(user)
}
