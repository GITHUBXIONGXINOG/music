import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
//导入样式
import './style.scss'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
