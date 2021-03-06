let userRepository = require('../repositories/userRepository');

const register = userObject => userRepository.registerUser(userObject)
const login = username => userRepository.login(username)

const follow = username => {
  userRepository.follow(username)  
}

module.exports = {
  register,
  login,
  follow
}