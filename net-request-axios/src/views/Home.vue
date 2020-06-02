<template>
  <div class="home">
      <button @click="getHandle">发送get请求</button>
      <button @click="postHandle">发送post请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  components: {

  },
  methods: {
    getHandle() {
      /**
       * axios.get() 发送get请求
       * 参数一：表示请求地址
       * 参数二：表示配置信息
       *    params: 表示传递到服务器端的数据，以url参数的形式拼接在请求地址后面
       *    headers: 表示请求头
       *
       *    比如 params中的参数是 {page:1, per:3}
       *    最后会拼接成如下：
       *        http: .../api?page=1&per=3
       */
      axios.get("https://api.cat-shop.penkuoer.com/api/v1/products",{
        params:{
          page:1,
          per:3
        },
        headers:{

        }
      }).then(res=>{
        console.log(res)
      })
    },
    postHandle() {
      /**
       * post请求三个参数：
       *    请求地址
       *    传递的数据  在请求体中 传递
       *        默认情况下，发送的数据是json格式的
       *    配置信息
       *        headers
       *          content-type:"application/json"    //默认
       */

      axios.post('https://api.cat-shop.penkuoer.com/api/v1/auth/login',{
        userName: 'xiaoming',
        password: '111111'
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
