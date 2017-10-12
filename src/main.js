// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import vueInfiniteScroll from 'vue-infinite-scroll'
import {currency} from './util/currency'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading:"/static/loading-svg/loading-bars.svg"
})

Vue.use(vueInfiniteScroll)

Vue.use(Vuex)

Vue.use(iView)

const store = new Vuex.Store({
  state:{
    nickName:'',
    cartNum:0
  },
  mutations:{
    updateNickName(state, nickName) {
      state.nickName = nickName;
    },
    resetCartNum(state, cartNum) {
      state.cartNum = cartNum;
    },
    updateCartNum(state, cartNum) {
      state.cartNum += cartNum;
    }
  }
});

Vue.filter('currency', currency)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
