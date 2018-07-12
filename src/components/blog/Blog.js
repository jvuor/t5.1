import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

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

  addLikes = async (id) => {
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
        <div style={blogStyle} onClick={this.toggleExpandedState} className="content">
          {blog.title}, {blog.author}
        </div>  
      )
    } else {
      return(
        <div style={blogStyle} onClick={this.toggleExpandedState} className="content">         
          {blog.title}, {blog.author} <br />
          <a href={blog.url} target='_blank' onClick={this.clickHandler}>{blog.url}</a> <br />
          <Button
            content='Like'
            icon='heart'
            label={{ basic: true, content: blog.likes }}
            labelPosition='right'
            onClick={(event) => {
              event.stopPropagation()
              this.addLikes(blog.id)}
            }
            name={blog.id}
            color='red'
          />
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