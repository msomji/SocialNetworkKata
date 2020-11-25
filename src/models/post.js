class Post {
  constructor(user, content, timeStamp= new Date()) {
    this.author = user.name
    this.content = content
    this.timeStamp = timeStamp
    
  }
}
module.exports = Post