import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Menubar extends React.Component {
  state = { activeItem: window.location.pathname.substring(1) }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  userLoggedIn = (
    <Menu.Item
      as={Link}
      to='/login'
      name='login'
      onClick={this.handleItemClick}
      color='red'
      content='Logout'
      icon='user'
    />
  )

  userNotLoggedIn = (
    <Menu.Item
      as={Link}
      to='/login'
      name='login'
      onClick={this.handleItemClick}
      color='red'
      content='Login'
      icon='user'
    />
  )
  

  render() {
    const { activeItem } = this.state
    const menuItemColor = 'red'

    return (
      <Menu inverted stackable>
        <Menu.Item
          as={Link}
          to='/blogs'
          name='blogs'
          active={activeItem === 'blogs'}
          onClick={this.handleItemClick}
          content='Blogs'
          color={menuItemColor}
        />
        <Menu.Item
          as={Link}
          to='/addblog'
          name='addblog'
          active={activeItem === 'addblog'}
          onClick={this.handleItemClick}
          content='Add a blog'
          color={menuItemColor}
        />
        <Menu.Menu position='right'>
          {this.props.login.loggedIn ?
          this.userLoggedIn :
          this.userNotLoggedIn}
        </Menu.Menu>       
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}


export default connect(mapStateToProps, null)(Menubar)