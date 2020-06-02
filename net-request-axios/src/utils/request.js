import axios from 'axios'

// 创建实例
const instance = axios.create({
  baseURL: 'https://api.cat-shop.penkuoer.com',   //baseURL会在发送请求时拼接在url参数之前
  timeout: 5000
})

export function get(url, params) {
  return axios.get(url, {
    params
  })
}

export function post(url, data) {
  return axios.post(url, data)
}

export function del(url) {
  return axios.delete(url)
}

export function(url, data) {
  return axios.put(url, data)
}


// 请求拦截:所有的网络请求都会先走这个方法
instance.interceptors.request.use(config => {
  // 这时可以做一些事情
  // 比如给每个请求头加一个token
  config.headers.token = '123456'
  return config
},
err=> {
  return Promise.reject(err)
}
)

// 响应拦截: 服务器返回数据之后，都会先执行此方法
// 此处可以根据服务器返回的状态码做相应的处理
instance.interceptors.response.use(
  function(response) {
    return response
  },
  function(err) {
    return Promise.reject(err)
  }
)
