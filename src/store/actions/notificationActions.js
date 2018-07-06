var timer = null

export const actionNotificationSet = (notification, alert= false) => {
  return async (dispatch) => {

    if( !alert ) {
      dispatch({ type: 'SET', notification:notification })
    } else {
      dispatch({ type: 'SETALERT', notification:notification })
    }
    
    if (timer) { clearTimeout(timer) }

    timer = setTimeout(() => {
      dispatch({ type: 'EMPTY' })
    }, 5000)
  }
}

export const actionNotificationEmpty = () => {
  return {
    type: 'EMPTY'
  }
}
