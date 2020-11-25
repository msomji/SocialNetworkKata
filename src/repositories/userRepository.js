let networkState = require('../state/networkState')

const registerUser = userObject => networkState.register(userObject)

const login = username => networkState.login(username)

const currentUser = () => networkState.currentUser()

module.exports =  {
  registerUser,
  login,
  currentUser
}