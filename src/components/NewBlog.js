import React from 'react'
import Toggleable from './Toggleable'

const NewBlog = () => {
  <Toggleable buttonLabel='Submit a new blog'>
    <form onSubmit={this.submitBlog}>
      <div>Blog author: <input 
          type="text"
          name="newBlogAuthor"
          value={this.state.newBlogAuthor}
          onChange={this.handleNewBlogFormChange}
        />
      </div>
      <div>Blog title: <input 
          type="text"
          name="newBlogTitle"
          value={this.state.newBlogTitle}
          onChange={this.handleNewBlogFormChange}
        />
      </div>
      <div>Blog url: <input 
          type="text"
          name="newBlogUrl"
          value={this.state.newBlogUrl}
          onChange={this.handleNewBlogFormChange}
        />
      </div>
      <button type="submit">Add new blog</button>
    </form>
  </Toggleable>
}

export default NewBlog