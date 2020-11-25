let networkState = require('../../src/state/networkState')

const INITIAL_STATE = {
  currentUser: undefined,
  users: [],
  posts: []
}

describe('NetworkState', () => {
  beforeEach(() => {
    networkState._resetState()
  })
  it('_getState should return current state', () => {
    expect(networkState._getState()).toEqual(INITIAL_STATE)
  })

  it('register should return registered user', () => {
    let userObject = {}
    
    expect(networkState.register(userObject)).toEqual(userObject)
  })
  it('register should add Object to users array', () => {
    let userObject = {}
    networkState.register(userObject)

    expect(networkState._getState().users).toEqual([userObject])
  })
})