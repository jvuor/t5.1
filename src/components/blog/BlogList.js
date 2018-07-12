import React from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'
import { List } from 'semantic-ui-react'
import { actionBlogLike, actionBlogDelete } from '../../store/actions/blogActions'

class BlogList extends React.Component {

  addLikes = (target) => {
    this.props.actionBlogLike(target)
  }

  deleteBlog = (target) => {
    this.props.actionBlogDelete(target)  
  }

  render() {
    if (!this.props.blogs) {
      return(null)
    } else {
      return (
        <List divided verticalAlign='middle'>
        {this.props.blogs.map(blog =>
          <Blog 
            key={blog.id}
            blog={blog}
          />
        )}
        </List> 
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    login: state.login
  }
}

export default connect(mapStateToProps, { actionBlogLike, actionBlogDelete })(BlogList)