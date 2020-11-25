let userRepository = require('../repositories/userRepository');

const register = userObject => userRepository.registerUser(userObject)

module.exports = {
  register
}