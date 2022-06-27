import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'
import loading from '../utils/loading'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
http.interceptors.request.use(
  function (config) {
    loading.open()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    return config
  },
  function (error) {
    // 对请求错误做些什么
    loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    loading.close()
    if (res.data.success === true) {
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
      const { token } = res.data.data
      localStorage.setItem('token', token)
    }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default http
