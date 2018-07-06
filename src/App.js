import React from 'react'
import { connect } from 'react-redux'
import Blog from './components/Blog'
import Notification from './components/notification/Notification'
import Toggleable from './components/Toggleable'
import blogService from './services/blogs'
import loginService from './services/login'
import { actionNotificationSet } from './store/actions/notificationActions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      newBlogAuthor: '',
      newBlogTitle: '',
      newBlogUrl: ''
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs => {
      this.setState({ blogs })
      this.sortBlogs()
      }
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

    this.setState({user: null})
    this.props.actionNotificationSet('Logged out')
  }

  addLikes = (id) => {
    const targetBlogIndex = this.state.blogs.findIndex(m => m.id === id)
    var newBlogArray = this.state.blogs
    newBlogArray[targetBlogIndex].likes += 1
    this.setState({blogs: newBlogArray})
    this.sortBlogs()
  }

  deleteBlog = async (id) => {
    var newBlogs = this.state.blogs
    const deleteIndex = newBlogs.findIndex(m => m.id === id)
    if (this.state.blogs[deleteIndex].user.username === undefined |
      this.state.blogs[deleteIndex].user.username === this.state.user.username) {

      await blogService.deleteBlog(id)
      
      newBlogs.splice(deleteIndex, 1)
      this.setState({blogs: newBlogs})
    } else {
      this.props.actionNotificationSet('Forbidden: wrong user', alert)
    }
  }

  sortBlogs = () => {
    var sortedBlogs = this.state.blogs
    sortedBlogs.sort((a,b) => b.likes - a.likes)
    this.setState({blogs: sortedBlogs})
  }

  login = async (event) => {
    event.preventDefault()

    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({
        username: '', 
        password:'', 
        user
      })
      this.props.actionNotificationSet(`Logged in`)

    } catch (exception) {
      console.log(exception)
      this.setState({
        username: '',
        password: ''
      })
      this.props.actionNotificationSet('Wrong username or password!', alert)
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

      await blogService.postBlog(newBlog)
      blogService.getAll().then(blogs => this.setState({ blogs }))

      this.props.actionNotificationSet('New blog added!')

    } catch (expection) {

    }
  }

  render() {
    const loginForm = () => (
      <div>
        <h2>Please login</h2>
        <form onSubmit={this.login}>
          <div>
            User name:
            <input 
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleLoginFormChange}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleLoginFormChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>

        <Notification />
  
      </div>
    )

    const blogList = () => (
      <div>
        <h2>blogs</h2>
        <Notification />
        <div>logged in as {this.state.user.name} </div>
        <button type="button" onClick={this.logout}>Logout</button>

        <Toggleable buttonLabel='Submit a new blog'>
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
        </Toggleable>
  
        {this.state.blogs.map(blog =>
          <Blog 
            key={blog.id}
            blog={blog}
            onAddLike={this.addLikes}
            canDelete={blog.user.username === undefined || this.state.user.username === blog.user.username}
            onDelete={this.deleteBlog}
            name={blog.id}/>
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

export default connect(null, { actionNotificationSet })(App)
