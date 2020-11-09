const { User } = require('../models');

exports.list = () => {
  return User.findAll()
}
