let postRepository = require('../repositories/postRepository')

const publish = postObject => postRepository.publish(postObject)
// publish
// getWall
// getTimelineByUsername
// getTimeLine


module.exports = {
  publish
}