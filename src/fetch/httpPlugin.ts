import axios from 'axios'
import qs from 'qs'
let instance = axios.create({
  timeout: 20000
})
// 请求拦截
instance.interceptors.request.use((request: any) => {
  if (request.data) {
    if ((request.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1)) {
      request.data = qs.stringify(request.data)
    } else {
      request.data = JSON.stringify(request.data)
    }
  }
  return request
}, error => {
  return Promise.reject(error)
})
// 返回拦截
instance.interceptors.response.use((res: any) => {
  return res
}, function (err) {
  return Promise.reject(err)
})
const $httpPligin: any = null
interface RequestConfig {
  method?: any;
  url: string;
  data?: any;
  headers?: any;
}
const fetch = ({
  url = '',
  data = {},
  headers = {},
  method = 'post'
}: RequestConfig) => {
  return instance({
    method: method,
    url: url + '?time=' + new Date().getTime(),
    data,
    headers
  }).then(res => {
    return res
  }, (error) => {
    throw new Error(error)
  })
}
$httpPligin.install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get () {
        return fetch
      }
    }
  })
}
export default $httpPligin

export {
  fetch
}
