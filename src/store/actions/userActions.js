import userService from '../../services/users'

export const actionUsersInit = () => {
  return async (dispatch) => {
    const data = await userService.getAll()
    dispatch({
      type: 'USERINIT',
      data: data
    })
  }
}