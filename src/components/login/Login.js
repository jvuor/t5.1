import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import LoginForm from './LoginForm'

import { actionLogout, actionLogin } from '../../store/actions/loginActions'
import { actionNotificationSet } from '../../store/actions/notificationActions'

class Login extends React.Component {
  login = async (credentials) => {
    await this.props.actionLogin(credentials)
    if(!this.props.login.loggedIn) {
      this.props.actionNotificationSet('Error logging in: wrong username or password!', true)
    }
  }

  render () {
    if (this.props.login.loggedIn) {
      return (
        <div>
          <Logout logout={this.props.actionLogout}/>
        </div>
      )
    } else {
      return (
        <div>
          <LoginForm loginHandler={event => this.login(event)} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
  
export default connect(mapStateToProps, { actionLogout, actionLogin, actionNotificationSet })(Login)