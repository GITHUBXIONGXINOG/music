import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
//导入样式
import './style.scss'
//引入axios
import http from "@/http";
//放到Vue的原型上
Vue.prototype.$http =http;

//放到Vue的原型上

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
