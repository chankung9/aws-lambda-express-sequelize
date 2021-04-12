const crypt = require("crypto")
const agent = 'myagent'

exports.CreateSign = (username, password) => {
  const word = agent + username + password
  const hash = crypt.createHash('sha256')
  const data = hash.update(word, 'utf-8')
  const get_hash = data.digest('hex')
  return get_hash
}
