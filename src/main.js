import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n/i18n'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'

Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(i18n)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
