import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Categories = () => import('views/categories/Categories')
const Shop = () => import('views/shop/Shop')
const Profile = () => import('views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'//缺省时候重定向到/home
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/categories',
    component: Categories,
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default new Router({
  routes,
  mode: 'history',
  // linkActiveClass:"active"
})
