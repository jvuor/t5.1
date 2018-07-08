import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Notification from './components/notification/Notification'
import Menubar from './components/Menubar'
import Login from './components/login/Login'
import BlogList from './components/BlogList'
import NewBlog from './components/NewBlog'
import FrontPage from './components/FrontPage'
import Header from './components/Header'
import Footer from './components/Footer'

import { actionUserFromStorage } from './store/actions/loginActions'
import { actionBlogInit } from './store/actions/blogActions'
import { actionNotificationSet } from './store/actions/notificationActions'
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
            <Container>
              <Header />
              <Menubar />
              <Notification />
              <Route exact path='/' render={() => <FrontPage />} />
              <Route path='/blogs' render={() => <BlogList />} />
              <Route path='/addblog' render={() => <NewBlog />} />
              <Route path='/login' render={() => <Login />} />
              <Footer />
            </Container>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(null,
  { actionNotificationSet,
    actionUserFromStorage,
    actionBlogInit
   })(App)
