import loginService from '../../services/login'
import blogService from '../../services/blogs'

export const actionLogin = (credentials) => {
  return async (dispatch) => { 
    try {
      console.log('credentials', credentials)
      const response = await loginService.login(credentials)
      console.log('response', response)
      
      dispatch({
        type: 'LOGIN',
        username: response.username,
        name: response.name,
        token: response.token,
        id: response.id
      })

      blogService.setToken(response.token)
      window.localStorage.setItem('loggedUser', JSON.stringify(response))


    } catch (exception) {
      console.log('bad login', exception)
      dispatch({
        type: 'LOGOUT'
      })
    }


  }
}

export const actionUserFromStorage = (credentials) => {
  return {
    type: 'LOGIN',
    username: credentials.username,
    name: credentials.name,
    token: credentials.token,
    id: credentials.id
  }
}

export const actionLogout = () => {
  window.localStorage.removeItem('loggedUser')
  return {
    type: 'LOGOUT'
  }
}