import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const baseUrl = '/api/blogs'

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

  toggleExpandedState= () => {
    this.setState({expanded: !this.state.expanded})
  }

  clickHandler = (event) => {
    event.stopPropagation()
  }

  addLikes = async (event) => {
    event.stopPropagation()
    const id = event.target.name

    const targetBlogData = await axios.get(`${baseUrl}/${id}`)
    var targetBlog = targetBlogData.data

    targetBlog.likes += 1

    await axios.put(`${baseUrl}/${id}`, targetBlog)

    this.props.onAddLike(id)
  }

  deleteBlog = async (event) => {
    this.props.onDelete(event.target.name)
  }

  render() {
    const blog = this.props.blog

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5,
    }

  
    if (this.state.expanded === false) {
      return(
        <div style={blogStyle} onClick={this.toggleExpandedState}>
          {blog.title}, {blog.author}
        </div>  
      )
    } else {
      return(
        <div style={blogStyle} onClick={this.toggleExpandedState}>         
          {blog.title}, {blog.author} <br />
          <a href={blog.url} target='_blank' onClick={this.clickHandler}>{blog.url}</a> <br />
          {blog.likes} likes
          <button type='button' onClick={this.addLikes} name={blog.id}>Like</button> <br />
          added by {blog.user.name}
          {this.props.canDelete?
            <button type='button' onClick={this.deleteBlog} name={blog.id}>
              Delete
            </button>
              : null}

        </div>  
      )
    }
    
  }
}

export default Blog