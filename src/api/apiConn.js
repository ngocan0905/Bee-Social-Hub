import axios from 'axios'

const apiConn = axios.create({
  baseURL: 'http://192.168.1.5:5000/api/v1/',
  withCredentials: true
})
export default apiConn
