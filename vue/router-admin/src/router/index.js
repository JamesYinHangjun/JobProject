import Vue from 'vue'
import vueRouter from 'vue-router'

import Login from "@/components/MyLogin.vue"
import Home from "@/components/MyHome.vue"

import Users from "@/components/menus/MyUsers"
import Orders from "@/components/menus/MyOrders"
import Goods from "@/components/menus/MyGoods"
import Rights from "@/components/menus/MyRights"
import Settings from "@/components/menus/MySettings"
import UserDetail from "@/components/user/MyUserDetail"

Vue.use(vueRouter)

const router = new vueRouter({
  routes: [
    // 重定向路由规则
    {
      path: '/',
      redirect: '/login'
    },
    // 登陆的路由规则
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect:'/home/users',
      children: [
        {
          path: 'users',
          component: Users
        },
        {
          path: 'orders',
          component: Orders
        },
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'rights',
          component: Rights
        },
        {
          path: 'settings',
          component: Settings
        },
        // 用户详情页 这个和上面的是一个层级
        {
          path: 'userinfo/:id',
          component: UserDetail
        }
      ]
    }
  ]
})

//全局前置守卫
// 如果要跳转到home主页，先判断有没有token,如果有，就跳转，没有，则跳转到login页面
router.beforeEach(function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router