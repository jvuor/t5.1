import React from 'react'

const Notification = ({text}) => (
  <div className="notification">
    {text}
  </div>  
)

const NotificationAlert = ({text}) => (
  <div className="notificationAlert">
    {text}
  </div>  
)

export {Notification, NotificationAlert}