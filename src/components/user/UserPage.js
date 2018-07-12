import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

class UserPage extends React.Component {
  blogList(user) {
    if (!user.blogs) {
      return (
        <div>
          {user.name} has not yet added any blogs.
        </div>
      )
    } else {
      return(
        <div>
          <h3>Added blogs:</h3>
          {user.blogs.map(blog =>
            <div key={blog.title}>
              {blog.title}
            </div>)}
        </div>
      )
    }
  }

  render() {
    if (!this.props.users) { return(null) }
    const user = this.props.users.find(m => m.id === this.props.userId)
    return(
      <div>
        <h2>{user.name}</h2>
        <Divider />
        {this.blogList(user)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UserPage)