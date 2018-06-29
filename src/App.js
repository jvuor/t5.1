import React from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      error: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      blogService.setToken(user.token)
    }
  }
  
  handleLoginFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  logout = (event) => {
    console.log('logging out')
    window.localStorage.removeItem('loggedUser')

    this.setState({user: null, error:'logged out'})
    setTimeout(() => {
      this.setState({error: null})
    }, 5000)
  }

  login = async (event) => {
    event.preventDefault()

    try{
      console.log(this.state.username, this.state.password) //this is dangerous
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({username: '', password:'', user})

    } catch (exception) {
      console.log(exception)
      this.setState({
        error: 'virheellinen käyttäjätunnus tai sanasana',
        username: '',
        password: ''
      })

      setTimeout(() => {
        this.setState({error: null})
      }, 5000)
    }

    
  }

  render() {
    const loginForm = () => (
      <div>
        <h2>Kirjaudu sovellukseen</h2>
        <form onSubmit={this.login}>
          <div>
            Käyttäjätunnus:
            <input 
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginFormChange}
            />
          </div>
          <div>
            Salasana:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginFormChange}
            />
          </div>
          <button type="submit">Kirjaudu</button>
        </form>
  
        <Notification text={this.state.error} />
  
      </div>
    )

    const blogList = () => (
      <div>
        <h2>blogs</h2>
        <div>logged in as {this.state.user.name} </div>
        <button type="submit" onClick={this.logout}>Logout</button>
        {this.state.blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    )

    if (this.state.user === null) {
      return (
        loginForm()
      )
    }
  
    return (
      blogList()
    )
  }
}

export default App;
