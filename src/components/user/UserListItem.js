import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'

class UserItem extends React.Component {
  render (){
    return (
      <div>
        <Divider />
        <Link to={`/users/${this.props.user.id}`} >
          {this.props.user.name} <br />
        </Link>
        {this.props.user.blogs.length} blogs added
      </div>
    )
  }
}

export default connect(null, null)(UserItem)