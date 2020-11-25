let postService = require('../../src/services/postService')
let postRepositoy = require('../../src/repositories/postRepository')

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
  it('should be able to get another users\' timeline', () => {
    let timeLine = []
    let username = 'username'
    let postRepoSpy = spyOn(postRepositoy, 'getTimeLineByUsername')
    postRepoSpy.and.returnValue(timeLine)

    expect(postService.getTimeLineByUsername(username)).toEqual(timeLine)
    expect(postRepoSpy).toHaveBeenCalledOnceWith(username)
  })
  it('should be able to get current user\' wall')
})