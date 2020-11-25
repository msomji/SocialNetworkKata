let networkState = require('../state/networkState')

const registerUser = userObject => networkState.register(userObject)
  

module.exports =  {
  registerUser
}