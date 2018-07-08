const reducer = (store = null, action) => {
  if(action.type === 'USERINIT') {
    return action.data
  }

  return store
}

export default reducer