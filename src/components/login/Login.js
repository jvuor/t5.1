import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import LoginForm from './LoginForm'

import { actionLogout, actionLogin } from '../../store/actions/userActions'

class Login extends React.Component {
  login = async (credentials) => {
    await this.props.actionLogin(credentials)   
  }

  render () {
    if (this.props.user.loggedIn) {
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
    user: state.user
  }
}
  
export default connect(mapStateToProps, { actionLogout, actionLogin })(Login)