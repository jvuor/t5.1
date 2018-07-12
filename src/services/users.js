import axios from 'axios'

var baseUrl = 'http://localhost:3003/api/users'
const hostname = window && window.location && window.location.hostname
if(hostname !== 'localhost') {
  baseUrl = '/api/users'
}

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

export default { getAll }