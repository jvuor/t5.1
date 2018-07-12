import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionBlogLike } from '../../store/actions/blogActions'
import { Button, Icon } from 'semantic-ui-react'

class BlogPage extends React.Component {
  render () {
    const blog = this.props.blogs.find(m => m.id === this.props.blogId)
    if(!blog) {
      return null
    } else {
      return (
        <div>
          <Link to='/blogs'>
            <h6><Icon name='angle double left' />Back to blogs</h6>
          </Link>
          <h2>
            {blog.title}
            <Button floated='right'
              content='Like'
              icon='heart'
              label={{ basic: true, content: blog.likes }}
              labelPosition='right'
              onClick={(event) => {
                event.preventDefault()
                this.props.actionBlogLike(blog.id)}
              }
              name={blog.id}
              color='red'
            />
          </h2>
          by {blog.author} <br />        
          added by {blog.user.name}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, { actionBlogLike })(BlogPage)