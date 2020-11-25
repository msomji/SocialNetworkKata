const Post = require('../models/post')
let postRepository = require('../repositories/postRepository')
const userRepository = require('../repositories/userRepository')

const publish = postContent => {
  let currentuser = userRepository.currentUser()
  let postObject = new Post(currentuser.name, postContent)
  return postRepository.publish(postObject)
}

const getTimeLine = () =>
 postRepository.getTimeLine()
    .sort((a,b) => b.timeStamp - a.timeStamp)
    .map(post => {
      currentTime = new Date()
      timeElapsed = new Date(currentTime - post.timeStamp).getMinutes()
      return `${post.content} (${timeElapsed} minutes ago)`
    })

const getTimeLineByUsername = (username) => 
  postRepository.getTimeLineByUsername(username)
                .sort((a,b) => b.timeStamp - a.timeStamp)
                    .map(post => {
                      currentTime = new Date()
                      timeElapsed = new Date(currentTime - post.timeStamp).getMinutes()
                      return `${post.content} (${timeElapsed} minutes ago)`
                    })

// getWall 


module.exports = {
  publish,
  getTimeLine,
  getTimeLineByUsername

}