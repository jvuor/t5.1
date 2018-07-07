import blogService from '../services/blogs'

const initializeUserFromStorage = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedUser')
  if(loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    console.log(user)
    blogService.setToken(user.token)
    return user
  } else {
    return null
  }
}

export default initializeUserFromStorage