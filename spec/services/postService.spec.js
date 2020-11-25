let postService = require('../../src/services/postService')
let postRepositoy = require('../../src/repositories/postRepository')

describe('postService', () => {
  it('should be able to publish a post', () => {
    let post = {}
    let postRepoSpy = spyOn(postRepositoy, 'publish')
    postRepoSpy.and.returnValue(post)

    expect(postService.publish(post)).toEqual(post)
  })
  it('should be able to get current user\' wall')
  it('should be able to get current user timeline')
  it('should be able to get another users\' timeline')
})