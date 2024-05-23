//createRouter: 創建router 實例對象
//createWebHistory:創建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/index.vue'
import Home from '@/views/Home/index.vue'
import CartList from '@/views/CartList/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path 和 component 對應位子 
  // path"/"一集路由
  //path '' 內部切換二級路由
  routes: [
    {
      path:'/',
      component:Layout,
      //添加二級路由
      children:[
        {
          path:'',
          component: Home
        },
        {
          path:'category',
          // eslint-disable-next-line no-undef
          component: Category
        },
        {
          path:'cartlist',
          component: CartList
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }

  ]
})

export default router
