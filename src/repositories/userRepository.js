let networkState = require('../state/networkState')

const registerUser = userObject => networkState.register(userObject)

const login = username => networkState.login(username)

const currentUser = () => networkState.currentUser()
const follow = (username) => networkState.follow(username)

module.exports =  {
  registerUser,
  login,
  follow,
  currentUser
}