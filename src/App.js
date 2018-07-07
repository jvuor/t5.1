import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Notification from './components/notification/Notification'
import Menubar from './components/Menubar'
import Login from './components/login/Login'
import BlogList from './components/BlogList'

import { actionUserFromStorage } from './store/actions/userActions'
import { actionNotificationSet } from './store/actions/notificationActions'
import { actionBlogInit, actionBlogLike, actionBlogDelete, actionBlogAdd } from './store/actions/blogActions'
import initializeUser from './util/userInitialization'

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.actionBlogInit()
    const user = initializeUser()
    if (user) { this.props.actionUserFromStorage(user) }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Menubar />
            <Notification />
            <Login />
            <BlogList />
          </div>
        </Router>
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStoreToProps,
  { actionNotificationSet, 
    actionBlogInit,
    actionBlogLike,
    actionBlogDelete,
    actionBlogAdd,
    actionUserFromStorage
   })(App)
