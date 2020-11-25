let networkState = require('../state/networkState')

const registerUser = userObject => networkState.register(userObject)

const login = username => networkState.login(username)

module.exports =  {
  registerUser,
  login
}