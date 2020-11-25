let userRepositoy = require('../../src/repositories/userRepository')
let networkState = require('../../src/state/networkState')

describe('User Repositories', () => {
  it('should register user to social network', () => {
    userObject = {name: "some user"}
    stateSpy = spyOn(networkState, 'register')

    stateSpy.and.returnValue(userObject)

    expect(userRepositoy.registerUser(userObject)).toEqual(userObject)
    expect(stateSpy).toHaveBeenCalledOnceWith(userObject)
  })
})