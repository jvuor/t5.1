import React from 'react'
import './notification.css'
import { connect } from 'react-redux'
import { NotificationNormal } from './NotificationNormal'
import { NotificationAlert } from './NotificationAlert'

class Notification extends React.Component {
  render() {
    const notification = this.props.notification.notification
    const alert = this.props.notification.alert

    if (!alert && notification) {
      return(<NotificationNormal text={notification} />)
    }
    else if (alert && notification) {
      return(<NotificationAlert text={notification} />)
    } else {
      return(null)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(mapStateToProps, null)(Notification)