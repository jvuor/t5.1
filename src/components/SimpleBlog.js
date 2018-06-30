import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div classname="wrapper">
    <div className="topcontent">
      {blog.title} {blog.author}
    </div>
    <div className="bottomcontent">
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog