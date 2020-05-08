import axios from 'axios'

// 别人调用请求时，直接调用request方法即可

// 第一种方式： 定义success和failure两个回调
// export function request(config, success, failure) {
//   // 1.创建axios实例(这里不用全局默认的实例)
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 实例创建之后，发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }


// 第二种方式
// export function request(config) {
//   // 1.创建axios实例(这里不用全局默认的实例)
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   // 实例创建之后，发送真正的网络请求
//   instance(config.baseConfig).then(res => {
//     config.success(res)
//   }).catch(err => {
//     config.failure(err)
//   })
// }


// 第三种方式： (重要,推荐使用)
// export function request(config) {
//   return new Promise((resolve,reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config)
//       .then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//   })
// }

// 第四种
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   return instance(config)
// }


export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1 请求拦截器
  instance.interceptors.request.use( config => {
    console.log(config)

    // 应用场景:
    // 1).每次发送网络请求，都希望在界面显示一个请求的转圆圈的图标
    // 2).某些网络请求,必须携带一些特殊的信息(比如登陆(必须携带token))

    // 必须要返回config
    return config
  }, err => {
    console.log(err)
  })

  // 2.2响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data    // 拦截后只剩下data了
  })

  // 3.发送真正的网络请求
  return instance(config)
}
