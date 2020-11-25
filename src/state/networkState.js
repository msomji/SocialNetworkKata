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


const _resetState = () => {
  state = INITIAL_STATE
}
const _getState = () => state

module.exports = {
  register,
  _getState,
  _resetState,
}