let postRepository = require('../repositories/postRepository')

const publish = postObject => postRepository.publish(postObject)

const getTimeLine = () => {
  return postRepository.getTimeLine()
    .sort((a,b) => b.timeStamp - a.timeStamp)
    .map(post => {
      currentTime = new Date()
      timeElapsed = new Date(currentTime - post.timeStamp).getMinutes()
      return `${post.content} (${timeElapsed} minutes ago)`
    })
}
const getTimeLineByUsername = (username) => postRepository.getTimeLineByUsername(username)

// getWall 

module.exports = {
  publish,
  getTimeLine,
  getTimeLineByUsername

}