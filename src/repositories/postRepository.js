let networkState = require('../state/networkState')

const publish = (postObject) => networkState.publish(postObject)
const getTimeLine = () => networkState.getTimeLine()
const getTimeLineByUsername = (username) => networkState.getTimeLineByUsername(username)

module.exports = {
  publish,
  getTimeLine,
  getTimeLineByUsername
}