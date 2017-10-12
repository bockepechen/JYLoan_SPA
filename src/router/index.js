import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import GoogsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import Homepage from '@/views/Homepage/Homepage'
import P1 from '@/views/iview/P1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoogsList',
      component: GoogsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/P1',
      name: 'P1',
      component: P1
    }
  ]
})
