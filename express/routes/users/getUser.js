let { getUser } = require('../../../models/users');

module.exports = (req, res) => {
  const user = getUser(req.params.userId)

  if (!user) return res.status(404).json({})

  return res.json(user)
}
