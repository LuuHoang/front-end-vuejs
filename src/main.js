import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// đây là dùng trong tất cả các components:
import { store } from './store/store'
import { routes } from './routes'
Vue.use(VueRouter)
Vue.config.productionTip = false
const router =new VueRouter({
  routes
})
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
