const { User } = require('../models');
const { CreateSign } = require('./sign')

module.exports.list = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error(error)
    throw error
  }
}
module.exports.create = async (username, password) => {
  try {
    const signed = CreateSign(username, password)
    const user = await User.create({
      signed,
      username: username,
      status: 'C'
    })
    return user;
  } catch (error) {
    if ('original' in error) {
      throw new Error(error.original.code)
    }
    throw error
  }
}

module.exports.login = async (username, password) => {
  try {
    const signed = CreateSign(username, password)
    const user = await User.findOne({ where: { username, signed} })
    return user
  } catch (error) {
    if ('original' in error) {
      throw new Error(error.original.code)
    }
    throw error
  }
}
