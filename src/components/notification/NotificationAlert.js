import React from 'react'

const style= {
  color: 'red',
  background: 'lightgray',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
  width: 400
}

export const NotificationAlert = ({text}) => (
  <div className="notificationAlert" style={style}>
    {text}
  </div>  
)