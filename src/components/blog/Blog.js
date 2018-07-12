import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Blog extends React.Component{
  constructor(props) {
    super(props)
    this.state = { expanded: false }
  }

  static propTypes = {
    blog: PropTypes.object.isRequired,
    onAddLike: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
    canDelete: PropTypes.bool
  }

  addLikes = async (id) => {
    this.props.onAddLike(id)
  }

  render() {
    const blog = this.props.blog
  
    return (
      <List.Item>
        <List.Content floated='right'>
          {blog.likes ?
          <Label><Icon name='heart outline' color='red'/>{blog.likes}</Label> :
          null}
          {blog.comments.length ?
          <Label><Icon name='comment outline' color='red'/>{blog.comments.length}</Label> :
          null}
        </List.Content>
        <Link to={`/blogs/${blog.id}`}>
          <List.Header>{blog.title}</List.Header>
          {blog.author}
        </Link>
      </List.Item>
    )
    
    
  }
}

export default Blog