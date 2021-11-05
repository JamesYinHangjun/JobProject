import Vue from 'vue'
import vueRouter from 'vue-router'

import Login from "@/components/MyLogin.vue"
import Home from "@/components/MyHome.vue"

Vue.use(vueRouter)

const router = new vueRouter({
  routes:[
    // 重定向路由规则
    {path: '/',redirect: '/login'},
    // 登陆的路由规则
    {path: '/login',component: Login},
    {path: '/home',component: Home}
  ]
})

export default router