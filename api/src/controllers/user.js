const Response = require('./response')
const userService = require('../services/user')

exports.list = async (req, res) => {
  try {
    const users = await userService.list()
    console.log(users)
    Response.success(req, res, users)
  } catch (error) {
    Response.error(req, res, error)
  }
}

exports.create = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await userService.create(username, password)
    Response.success(req, res, user)
  } catch (error) {
    if ('message' in error) {
      if ('ER_DUP_ENTRY' == error.message) {
        Response.duplicateKey(req, res, 'user')
        return;
      }
    }
    Response.error(req, res, error)
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await userService.login(username, password)
    if(!user) {
      Response.dataNotFound(req, res)
      return;
    }
    Response.success(req, res, user)
  } catch (error) {
    Response.error(req, res, error)
  }
}
