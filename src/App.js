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
  }
  
  handleLoginFormChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  login = async (event) => {
    event.preventDefault()
    try{
      console.log(this.state.username, this.state.password)
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

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
    if (this.state.user === null) {
      return (
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
    }
  
    return (
      <div>
        <h2>blogs</h2>
        {this.state.blogs.map(blog =>
          <Blog key={blog._id} blog={blog} />
        )}
      </div>
    )
  }
}

export default App;
