//createRouter: 創建router 實例對象
//createWebHistory:創建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/Login.vue'
import Layout from '@/views/Layout/Layout.vue'
import CategoryTraffic from '@/views/Category/CategoryTraffic.vue'
import CategoryHotel from '@/views/Category/CategoryHotel.vue'
import CategoryTouristSpot from '@/views/Category/CategoryTouristSpot.vue'
import CategoryMembers from '@/views/Category/CategoryMembers.vue'
import Product from '@/views/Product/Product.vue'
import Home from '@/views/Home/Home.vue'
import About from '@/views/Home/About.vue'
import CartList from '@/views/CartList/CartList.vue'
import Checkout from '@/views/Checkout/checkout.vue'
import NoteList from '@/views/Note/NoteList.vue'
import QRcodeTickets from '@/views/QRcode/QRcodeTickets.vue'
import QRDonePage from '@/views/QRcode/QRDonePage.vue'




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
          path:'about',
          component: About
        },
        {
          path:'categoryTraffic',
          // eslint-disable-next-line no-undef
          component: CategoryTraffic
        },
        {
          path:'categoryHotel',
          // eslint-disable-next-line no-undef
          component: CategoryHotel
        }
        ,
        {
          path:'categoryTouristSpot',
          // eslint-disable-next-line no-undef
          component: CategoryTouristSpot
        }
        ,
        {
          path:'categoryMembers',
          // eslint-disable-next-line no-undef
          component: CategoryMembers
        }
        ,
        {
          path:'product',
          component: Product
        },
        {
          path:'cartlist',
          component: CartList
        },
        {
          path:'checkout',
          component: Checkout
        }
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/note',
      component:NoteList
    },
    
    {
      path:'/qr',
      component:QRcodeTickets
    }

  ]
})

export default router
