const userRepository = require('../../src/repositories/userRepository')
let userService = require('../../src/services/userService')

describe('UserService', () => {
  describe('register', () => {


    it('should register a new User and return the userobject', () => {
      let userObject = { name: "asdf" }
      let userRepoSpy = spyOn(userRepository, 'registerUser')
      userRepoSpy.and.returnValue(userObject)

      expect(userService.register(userObject)).toEqual(userObject)
      expect(userRepoSpy).toHaveBeenCalledWith(userObject)
    })
  })

  describe('login', () => {
    it(' should return user object', () => {
      let username = 'username'
      let userObject = {}

      let userRepoSpy = spyOn(userRepository, 'login')

      userRepoSpy.and.returnValue(userObject)

      expect(userService.login(username)).toBe(userObject)
    })
  })

  describe('follow', () => {
    it('should allow current user to follow others', () => {
      let username = 'username'
      let userRepoSpy = spyOn(userRepository, 'follow')

      userService.follow(username)
      expect(userRepoSpy).toHaveBeenCalledWith(username)
    })
  })

})