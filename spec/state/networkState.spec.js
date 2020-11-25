const Post = require('../../src/models/post')
const User = require('../../src/models/user')
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

  describe('register', () => {

    it('should return registered user', () => {
      let userObject = {}
      
      expect(networkState.register(userObject)).toEqual(userObject)
    })
    it('should add Object to users array', () => {
      let userObject = {}
      networkState.register(userObject)
      
      expect(networkState._getState().users).toEqual([userObject])
    })
  })
  describe('login', () => {
    it('should return provided usernames associated userObject', () => {
      username = 'username'
      userObject = {
        name: username
      }
      networkState.register(userObject)
      
      expect(networkState.login(username)).toEqual(userObject)
    })
    it('should set currentUser to logged in user object', () => {
      username = 'username'
      userObject = {
        name: username
      }
      networkState.register(userObject)
      networkState.login(username)

      expect(networkState.currentUser()).toEqual(userObject)
    })
  })
  describe('publish', () => {
    it('should publish a post Object', () => {
      post = {}
      expect(networkState.publish(post)).toEqual(post)
      expect(networkState._getState().posts).toEqual([post])
    })
  })

  describe('current user timeline', () => {
    it('should get timeline', () => {
      username = 'username'
      userObject = {
        name: username
      }
      networkState.register(userObject)
      networkState.login(username)
      post = new Post(username, "this is content")
      networkState.publish(post)

      expect(networkState.getTimeLine()).toEqual([post])
    })
  })
  describe('any user timeline', () => {
    it('should get timeline', () => {
      username = 'anotherUsername'
     
      post = new Post(username, "this is content")
      networkState.publish(post)

      expect(networkState.getTimeLineByUsername(username)).toEqual([post])
    })
  })
  describe('follow', () => {
    it("should update current users's follow list", () => {
      username = 'username'
      usernameTofollow = 'usernameTofollow'
      userObject = new User(username)

      networkState.register(userObject)
      networkState.login(username)
      
      networkState.follow('usernameTofollow')
      
      expect(networkState._getState().currentUser.follows).toEqual([usernameTofollow])
    })
    it("should update current users's follow list in all users array")
  })

})