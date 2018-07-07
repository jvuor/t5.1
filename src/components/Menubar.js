import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Menubar extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const menuItemColor = 'red'

    return (
      <Menu inverted>
        <Menu.Item header>Blog App</Menu.Item>
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
        <Menu.Item
          as={Link}
          to='/login'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
          color={menuItemColor}
        />
      </Menu>
    )
  }
}

/*
const Menubar = () => (
  <div>
    <Link to="/blogs">blogs</Link> |
    <Link to="/addblog">add blog</Link> |
    <Link to="/login">users</Link> 
  </div>
)
*/
export default Menubar