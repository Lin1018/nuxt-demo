import { Message } from 'element-ui'
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://www.xpxux.com/api',
    timeout: 5000
}) 

service.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json'
    return config
}, error => {
    console.log(error)
    return Promise.reject(error)
}) 

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === '00') {
      return Promise.resolve(res)
    }
    else{
        Message({
            message: res.errMsg || '请求异常',
            type: 'error',
            duration: 2 * 1000
         })
      return Promise.reject(res)
    }
  },
  error => {
    console.log('err' + error)
    // Message({ message: error.message, type: 'error', duration: 5 * 1000 })
    return Promise.reject(error)
  }
)
export default service 