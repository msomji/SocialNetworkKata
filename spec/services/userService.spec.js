const userRepository = require('../../src/repositories/userRepository')
let userService = require('../../src/services/userService')

describe('UserService', () => {
  it('should register a new User and return the userobject', () => {
    let userObject = {name: "asdf"}
    let userRepoSpy = spyOn(userRepository, 'registerUser')
    userRepoSpy.and.returnValue(userObject)

    expect(userService.register(userObject)).toEqual(userObject)
    expect(userRepoSpy).toHaveBeenCalledWith(userObject)
  })

  it('login should return user object', () => {
    let username = 'username'
    let userObject = {}
    
    let userRepoSpy = spyOn(userRepository, 'login')

    userRepoSpy.and.returnValue(userObject)

    expect(userService.login(username)).toBe(userObject)
  })
})