import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const login = async (credentials) => {
    var response = null

    response = await axios.post(baseUrl, credentials)

    console.log(response)
    return response.data
}

export default {login}