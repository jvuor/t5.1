//Maybe this shouldn't be here?
const sortBlogs = (blogs) => {
  return blogs.sort((a,b) => b.likes - a.likes)
}

const reducer = (store = null, action) => {
  if(action.type === 'BLOGNEW') {
    return store.concat(action.data)
  }
  if(action.type === 'BLOGDELETE') {
    const id = action.id
    const newStore = store.filter(m => m.id !== id)
    return newStore
  }
  if(action.type === 'BLOGADDLIKE') {
    const id = action.id
    return store.map(m => 
      m.id !== id ?
      m :
      {...m, likes:m.likes += 1}
    )
  }
  if(action.type === 'BLOGINIT') {
    return sortBlogs(action.data)
  }

  return store
}

export default reducer