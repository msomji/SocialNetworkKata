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
  state = {
    ...state,
    posts: [
      ...state.posts,
      post
    ]
  }
  return post
}
const getTimeLine = () => {
  return state.posts.filter(p => p.author == state.currentUser.name)

}
const getTimeLineByUsername = username => state.posts.filter(p => p.author == username)

const follow = (username) => {
  state = {
    ...state,
    currentUser: {
      ...state.currentUser,
      follows: [
        ...state.currentUser.follows,
        username
      ]
    }
  }

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
  follow,
  getTimeLineByUsername,
  currentUser,
  _getState,
  _resetState,
}