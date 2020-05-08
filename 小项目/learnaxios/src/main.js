// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import axios from 'axios'
import request from "./network/request"

// import { request } from './network/request'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res=>{
//   console.log(res)
// })


// // 1.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// // 请求地址：  http://123.207.32.32:8000/home/multidata
// instance1({
//   url: '/home/multidata'
// }).then(res=>{
//   console.log(res)
// })



// 第一种方式调用
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })


// 第二种方式调用
// request({
//   baseConfig:{

//   },
//   success: function(res) {

//   },
//   failure:function (err) {

//   }
// })

// 第三种调用
// request({
//   url: '/home/multidata'
// }).then(res => {

// }).catch(err => {

// })
