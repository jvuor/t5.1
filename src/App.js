import React from 'react'
import Blog from './components/Blog'
import { Notification, NotificationAlert } from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      notification: 'test',
      error: null,
      user: null,
      newBlogAuthor: '',
      newBlogTitle: '',
      newBlogUrl: ''
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

  handleNewBlogFormChange = (event) => {
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
      this.setState({
        notification: 'logged in',
        username: '', 
        password:'', 
        user
      })

      setTimeout(() => {
        this.setState({notification: null})
      }, 5000)

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

  submitBlog = async (event) => {
    event.preventDefault()

    try{
      const newBlog = {
        author: this.state.newBlogAuthor,
        title: this.state.newBlogTitle,
        url: this.state.newBlogUrl
      }

      const response = await blogService.postBlog(newBlog)
      blogService.getAll().then(blogs => this.setState({ blogs }))

      this.setState({notification: 'New blog added'})
      setTimeout(() => {this.setState({notification: null})}, 5000)

    } catch (expection) {

    }
  }

  render() {
    const notification = () => (
      <Notification text={this.state.notification} />
    )

    const notificationAlert = () => (
      <NotificationAlert text={this.state.error} />
    )

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

        {this.state.notification !== null && notification()}
        {this.state.error !== null && notificationAlert()}
  
      </div>
    )

    const blogList = () => (
      <div>
        <h2>blogs</h2>
        {this.state.notification !== null && notification()}
        {this.state.error !== null && notificationAlert()}
        <div>logged in as {this.state.user.name} </div>
        <button type="button" onClick={this.logout}>Logout</button>

        <form onSubmit={this.submitBlog}>
          <div>Blog author: <input 
              type="text"
              name="newBlogAuthor"
              value={this.state.newBlogAuthor}
              onChange={this.handleNewBlogFormChange}
            />
          </div>
          <div>Blog title: <input 
              type="text"
              name="newBlogTitle"
              value={this.state.newBlogTitle}
              onChange={this.handleNewBlogFormChange}
            />
          </div>
          <div>Blog url: <input 
              type="text"
              name="newBlogUrl"
              value={this.state.newBlogUrl}
              onChange={this.handleNewBlogFormChange}
            />
          </div>
          <button type="submit">Add new blog</button>
        </form>

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
