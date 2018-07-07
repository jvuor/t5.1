import React from 'react'
import Toggleable from './Toggleable'
import { connect } from 'react-redux'
import { actionBlogAdd } from '../store/actions/blogActions'

class NewBlog extends React.Component {

  submitBlog = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const newBlog = {
      author: data.get('author'),
      title: data.get('title'),
      url: data.get('url')
    }

    await this.props.actionBlogAdd(newBlog)
    
  }

  render () {
    return (
      <Toggleable buttonLabel='Submit a new blog'>
        <form onSubmit={this.submitBlog}>
          <div>Blog author: <input 
              type="text"
              name="author"
            />
          </div>
          <div>Blog title: <input 
              type="text"
              name="title"
            />
          </div>
          <div>Blog url: <input 
              type="text"
              name="url"
            />
          </div>
          <button type="submit">Add new blog</button>
        </form>
      </Toggleable>
    )
  }
}

export default connect(null, {actionBlogAdd})(NewBlog)