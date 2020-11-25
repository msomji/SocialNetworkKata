let userRepositoy = require('../../src/repositories/userRepository')
const { currentUser } = require('../../src/state/networkState')
let networkState = require('../../src/state/networkState')

describe('User Repositories', () => {
  it('should register user to social network', () => {
    userObject = {name: "some user"}
    stateSpy = spyOn(networkState, 'register')

    stateSpy.and.returnValue(userObject)

    expect(userRepositoy.registerUser(userObject)).toEqual(userObject)
    expect(stateSpy).toHaveBeenCalledOnceWith(userObject)
  })

  it('should login user to social network', () => {
    username = "username"
    userObject = {name: "some user"}
    
    stateSpy = spyOn(networkState, 'login')
    stateSpy.and.returnValue(userObject)

    expect(userRepositoy.login(username)).toEqual(userObject)
  })

  it('should return current loggedin user', () => {
    let currentUser = 'currentUser'
    stateSpy = spyOn(networkState, 'currentUser')
    stateSpy.and.returnValue(currentUser)
    expect (userRepositoy.currentUser()).toEqual(currentUser)
  })
})