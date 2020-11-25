const Post = require('../../src/models/post')
let postRepositoy = require('../../src/repositories/postRepository')
let networkState = require('../../src/state/networkState')

describe('postrepository', () => {
  it('should publish a post', () => {
    post = new Post("user", "content")
    stateSpy = spyOn(networkState, 'publish')
    
    stateSpy.and.returnValue(post)
    
    expect(postRepositoy.publish(post)).toEqual(post)
  })
  
  it('should get currentUsers timeline', () => {
    timeline = []

    stateSpy = spyOn(networkState, 'getTimeLine')
    
    stateSpy.and.returnValue(timeline)
    
    expect(postRepositoy.getTimeLine()).toEqual(timeline)
  })
  
  it('should get  timeline by username', () => {
    timeline = []
    username = 'username'

    stateSpy = spyOn(networkState, 'getTimeLineByUsername')
    
    stateSpy.and.returnValue(timeline)
    
    expect(postRepositoy.getTimeLineByUsername(username)).toEqual(timeline)
  })
})