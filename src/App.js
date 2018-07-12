import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'

import Notification from './components/notification/Notification'
import Menubar from './components/Menubar'
import Login from './components/login/Login'
import BlogList from './components/blog/BlogList'
import NewBlog from './components/NewBlog'
import FrontPage from './components/FrontPage'
import UserList from './components/user/UserList'
import Header from './components/Header'
import Footer from './components/Footer'
import UserPage from './components/user/UserPage'

import { actionUserFromStorage } from './store/actions/loginActions'
import { actionBlogInit } from './store/actions/blogActions'
import { actionNotificationSet } from './store/actions/notificationActions'
import { actionUsersInit } from './store/actions/userActions'
import initializeLogin from './util/loginInitialization'

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.actionBlogInit()
    await this.props.actionUsersInit()
    const user = initializeLogin()
    if (user) { this.props.actionUserFromStorage(user) }
  }

  render() {
    var loading = !this.props.users || !this.props.blogs
    if(loading) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      )
    } else {
      return (
        <div>
          <Router>
            <div>
              <Container>
                <Header />
                <Menubar />
                <Notification />
                <Switch>
                  <Route exact path='/' render={() => <FrontPage />} />
                  <Route path='/blogs' render={() => <BlogList />} />
                  <Route path='/addblog' render={() => <NewBlog />} />
                  <Route path='/login' render={() => <Login />} />
                  <Route exact path='/users' render={() => <UserList />} />
                  <Route path='/users/:id' render={({match}) => <UserPage userId={match.params.id} />} />
                  <Redirect to='/' />
                </Switch>
                <Footer /> 
              </Container>
            </div>
          </Router>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps,
  { actionNotificationSet,
    actionUserFromStorage,
    actionBlogInit,
    actionUsersInit
   })(App)
