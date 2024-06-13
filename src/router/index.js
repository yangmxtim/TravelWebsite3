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
import Recruiting from '@/views/Home/Recruiting.vue'
import CartList from '@/views/CartList/CartList.vue'
import Checkout from '@/views/Checkout/checkout.vue'
import NoteList from '@/views/Note/NoteList.vue'
import QRcodeTickets from '@/views/QRcode/QRcodeTickets.vue'
import QRDonePage from '@/views/QRcode/QRDonePage.vue'
import MemberInfo from '@/views/MemberInfo/MemberInfo.vue'
import Admin from "@/views/Backstage/layouts/admin.vue";
import BackMain from "@/views/Backstage/layouts/backMain.vue";
import Member from "@/views/Backstage/layouts/memberManage.vue";
import OrderManage from "@/views/Backstage/layouts/orderManage.vue";
import ProductManage from "@/views/Backstage/layouts/productManage.vue";
import NewProduct from "@/views/Backstage/layouts/newProduct.vue";




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
        // {
        //   path:'categoryMembers',
        //   // eslint-disable-next-line no-undef
        //   component: CategoryMembers
        // }
        // ,
        {
          path: '/product/:id',
          name: 'product',
          component: Product,
          props: true // 啟用將路由參數作為組件的屬性傳遞
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
    },
    {
      path:'/memberinfo',
      component:MemberInfo
    },
    {
      path:'/categoryMembers',
      // eslint-disable-next-line no-undef
      component: CategoryMembers
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/recruiting',
      component:Recruiting
    },
    ,
    {
      path: "/",
      component: Admin,
      children: [
        {
          path: "/backMain",
          component: BackMain,
          meta: {
            breadcrumb: "數據分析",
          },
        },
        {
          path: "/member",
          component: Member,
          meta: {
            breadcrumb: "會員管理",
          },
        },
        {
          path: "/orderManage",
          component: OrderManage,
          meta: {
            breadcrumb: "訂單管理",
          },
        },
        {
          path: "/productManage",
          component: ProductManage,
          meta: {
            breadcrumb: "商品管理",
          },
        },
        {
          path:'/newProduct',
          component: NewProduct,
          meta: {
            breadcrumb: "新增商品",
          },
        },
      ],
    },

  ]
})

export default router
