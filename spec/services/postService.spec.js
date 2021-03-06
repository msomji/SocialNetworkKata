let postService = require('../../src/services/postService')
let postRepositoy = require('../../src/repositories/postRepository')
let userRepository = require('../../src/repositories/userRepository')
const Post = require('../../src/models/post')
const User = require('../../src/models/user')

describe('postService', () => {
  it('should be able to publish a post', () => {
    let post = {}
    let username = 'username'
    let userRepoSpy = spyOn(userRepository, 'currentUser')
    let postRepoSpy = spyOn(postRepositoy, 'publish')
    userRepoSpy.and.returnValue(new User(username))
    post = new Post(username, "content")
    postRepoSpy.and.returnValue(post)

    expect(postService.publish(post)).toEqual(post)
  })
  it('should be able to get current user timeline', () => {
    let timeLine = []
    let postRepoSpy = spyOn(postRepositoy, 'getTimeLine')
    postRepoSpy.and.returnValue(timeLine)

    expect(postService.getTimeLine()).toEqual(timeLine)
  })

  it('should be able to get current user timeline in correct format', () => {
    currentTime = new Date().getMinutes()

    post1 = new Post("username", "content", new Date().setMinutes(currentTime - 5))
    post2 = new Post("username", "content2", new Date().setMinutes(currentTime - 2))
    let timeLine = [post1, post2]
    let postRepoSpy = spyOn(postRepositoy, 'getTimeLine')
    postRepoSpy.and.returnValue(timeLine)

    formattedTimeline = [
      "content2 (2 minutes ago)",
      "content (5 minutes ago)"
    ]

    expect(postService.getTimeLine()).toEqual(formattedTimeline)
  })


  it('should be able to get another users\' timeline', () => {
    let timeLine = []
    let username = 'username'
    let postRepoSpy = spyOn(postRepositoy, 'getTimeLineByUsername')
    postRepoSpy.and.returnValue(timeLine)

    expect(postService.getTimeLineByUsername(username)).toEqual(timeLine)
    expect(postRepoSpy).toHaveBeenCalledOnceWith(username)
  })


  it('should be able to get other users timeline in correct format', () => {
    currentTime = new Date().getMinutes()
    let username = 'username'
    post1 = new Post("username", "content", new Date().setMinutes(currentTime - 5))
    post2 = new Post("username", "content2", new Date().setMinutes(currentTime - 2))
    let timeLine = [post1, post2]

    let postRepoSpy = spyOn(postRepositoy, 'getTimeLineByUsername')
    postRepoSpy.and.returnValue(timeLine)

    formattedTimeline = [
      "content2 (2 minutes ago)",
      "content (5 minutes ago)"
    ]

    expect(postService.getTimeLineByUsername(username)).toEqual(formattedTimeline)
  })


  it('should be able to get current user\' wall', () => {
    currentTime = new Date().getMinutes()
    let follower = 'follower1'
    let username = 'username'
    post1 = new Post(username, "content", new Date().setMinutes(currentTime - 5))
    post2 = new Post(username, "content2", new Date().setMinutes(currentTime - 2))
    followerPost = new Post(follower, "content3", new Date().setMinutes(currentTime - 3))
    let timeLine = [post1, post2]
    
    let getTimelineSpy = spyOn(postRepositoy, 'getTimeLine')
    getTimelineSpy.and.returnValue(timeLine)
    
    spyOn(userRepository, 'getFollowing').and.returnValue([follower])
    
    let getTimelineByUsernameSpy = spyOn(postRepositoy, 'getTimeLineByUsername')
    getTimelineByUsernameSpy.and.returnValue([followerPost])


    formattedTimeline = [
      "username - content2 (2 minutes ago)",
      "follower1 - content3 (3 minutes ago)",
      "username - content (5 minutes ago)"
    ]
    expect(postService.getWall()).toEqual(formattedTimeline)

    expect(getTimelineByUsernameSpy).toHaveBeenCalledWith(follower)
  })
})