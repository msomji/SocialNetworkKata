let postRepository = require('../repositories/postRepository')

const publish = postObject => postRepository.publish(postObject)

const getTimeLine = () => postRepository.getTimeLine()
const getTimeLineByUsername = (username) => postRepository.getTimeLineByUsername(username)

// getWall 

module.exports = {
  publish,
  getTimeLine,
  getTimeLineByUsername

}