import axios from 'axios'

var baseUrl = 'http://localhost:3003/api/login'
const hostname = window && window.location && window.location.hostname
if(hostname !== 'localhost') {
  baseUrl = '/api/login'
}

const login = async (credentials) => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default {login}