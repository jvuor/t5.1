import React from 'react'

const style= {
  color: 'green',
  background: 'lightgray',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
  width: 400
}

export const NotificationNormal = ({text}) => (
  <div className="notificationNormal" style={style}>
    {text}
  </div>  
)