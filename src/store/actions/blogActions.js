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
    console.log('server response', response)
    
    dispatch({
      type: 'BLOGNEW',
      data: response
    })
  } 
}

export const actionBlogDelete = (id) => {
  return async (dispatch) => {
    //BUG: blog entry does not get removed from the corresponding user data, fixed by reloading (thanks nosql)
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

export const actionBlogComment = (id, comment) => {
  return async (dispatch) => {
    dispatch({
      type: 'BLOGCOMMENT',
      id: id,
      comment: comment
    })

    await blogService.commentBlog(id, comment)
  }
}