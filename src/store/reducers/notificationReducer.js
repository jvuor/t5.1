const notificationAtStart = null
const initialState = { notification: notificationAtStart, alert: false }

const reducer = (store = initialState, action) => {
  if (action.type==='SET') {
    return { notification: action.notification , alert: false}
  }
  if (action.type==='SETALERT') {
    return { notification: action.notification, alert: true}
  }
  if (action.type === 'EMPTY') {
    return { notification: null }
  }

  return store
}

export default reducer