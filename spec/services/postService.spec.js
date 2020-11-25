let postService = require('../../src/services/postService')
let postRepositoy = require('../../src/repositories/postRepository')
const Post = require('../../src/models/post')

describe('postService', () => {
  it('should be able to publish a post', () => {
    let post = {}
    let postRepoSpy = spyOn(postRepositoy, 'publish')
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


  it('should be able to get current user\' wall')
})