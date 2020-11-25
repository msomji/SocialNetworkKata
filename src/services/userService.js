let userRepository = require('../repository/userRepository');

const register = userObject => userRepository.registerUser(userObject)

module.exports = {
  register
}