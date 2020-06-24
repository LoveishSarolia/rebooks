import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store.js'
import Home from './components/Home.vue';
import Product from './components/Product.vue';
import About from './components/About.vue'
import Cart from './components/Cart.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products/:isbn',
      name: 'product',
      component: Product
    },
    {
      path: '/cart/',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
