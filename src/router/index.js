import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
// import Category from '../views/category/Catgory.vue'
// import Cart from '../views/cart/Cart.vue'
// import Profile from '../views/profile/Profile.vue'

// 使用路由懒加载引入
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Catgory.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
