import blogService from '../../services/blogs'

export const actionBlogInit = () => {
  return async (dispatch) => {
    const data = await blogService.getAll()
    dispatch({
      type: 'BLOGINIT',
      data: data
    })
  }
}

export const actionBlogAdd = (data) => {
  return async (dispatch) => {
    const response = await blogService.postBlog(data)
    
    dispatch({
      type: 'BLOGNEW',
      data: response
    })
  } 
}

export const actionBlogDelete = (id) => {
  return async (dispatch) => {
    await blogService.deleteBlog(id)

    dispatch({
      type: 'BLOGDELETE',
      id: id
    })
  }
}

export const actionBlogLike = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'BLOGADDLIKE',
      id: id
    })

    await blogService.upvoteBlog(id)
  }
}