import React from 'react'
import { connect } from 'react-redux'
import { actionBlogAdd } from '../store/actions/blogActions'
import { Button } from 'semantic-ui-react'

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
        <Button>Add blog</Button>
      </form>
    )
  }
}

export default connect(null, {actionBlogAdd})(NewBlog)