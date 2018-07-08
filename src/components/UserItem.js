import React from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

class UserItem extends React.Component {
  render (){
    return (
      <div>
        <Divider />
        {this.props.user.name} <br />
        {this.props.user.blogs.length} blogs added
      </div>
    )
  }
}

export default connect(null, null)(UserItem)