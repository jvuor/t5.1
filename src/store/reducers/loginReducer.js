const initialState = {
  loggedIn: false,
  id: null,
  username: null,
  name: null,
  token: null
}

const reducer = (store = initialState, action) => {
  console.log('store action', action.type)
  if(action.type === 'LOGIN') {
    return {
      loggedIn: true,
      id: action.id,
      username: action.username,
      name: action.name,
      token: action.token
    }
  }
  if(action.type === 'LOGOUT') {
    return {
      loggedIn: false,
      id: null,
      username: null,
      name: null,
      token: null
    }
  }

  return store
}

export default reducer