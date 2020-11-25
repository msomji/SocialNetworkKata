class Post {
  constructor(user, content, timeStamp= new Date()) {
    this.author = user
    this.content = content
    this.timeStamp = timeStamp
    
  }
}
module.exports = Post