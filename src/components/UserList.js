import React from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'

class UserList extends React.Component {
  render () {
    if (this.props.users) {
      return (
        this.props.users.map(user => <UserItem user={user} />)
      )
    } else {
      return (
        <div>
          No user data
        </div>
      )
    }

  
    
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps, null)(UserList)