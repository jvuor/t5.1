import React from 'react'

class LoginForm extends React.Component {
  
  formSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = data.get('username')
    const password = data.get('password')

    this.props.loginHandler({username, password})
  }
  
  render () {
    return (
      <div>
        <h2>Please login</h2>
        <form onSubmit={this.formSubmit}>
          <div>
            User name:
            <input 
              type="text"
              name="username"
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              name="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>

      </div>
    )
  }
}
export default LoginForm