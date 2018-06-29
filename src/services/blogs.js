import axios from 'axios'
const baseUrl = '/api/blogs'

var token = null

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const postBlog = async (newBlog)=> {
  const config = {
    headers: { 'Authorization': token}
  }

  const response = await axios.post(baseUrl, newBlog, config)
  return response.data

}

const deleteBlog = async (id) => {
  const config = {
    headers: { 'Authorization': token}
  }

  console.log('delete', id)
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, setToken, postBlog, deleteBlog }