let networkState = require('../state/networkState')

const registerUser = userObject => networkState.register(userObject)

const login = username => networkState.login(username)

const currentUser = () => networkState.currentUser()
const follow = (username) => networkState.follow(username)
const getFollowing = () => networkState.getFollowing()

module.exports =  {
  registerUser,
  login,
  follow,
  getFollowing,
  currentUser
}