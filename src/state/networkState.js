INITIAL_STATE = {
  currentUser: undefined,
  users: [],
  posts: []
}

let state = INITIAL_STATE


const register = (userObject) => {
  state = {
    ...state,
    users: [
      ...state.users,
      userObject
    ]
  }
  return userObject
}

const login = username => {
  state = {
    ...state,
    currentUser: state.users.filter(user => user.name == username)[0]
  }
  return state.currentUser
}

const publish = post => {
  
}
const getTimeLine = post => {

}
const getTimeLineByUsername = post => {

}
const currentUser = () => state.currentUser

const _resetState = () => {
  state = INITIAL_STATE
}
const _getState = () => state

module.exports = {
  register,
  login,
  publish,
  getTimeLine,
  getTimeLineByUsername,
  currentUser,
  _getState,
  _resetState,
}