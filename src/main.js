import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import App from './App.vue'
// import store from './store';

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  // store,
  router
}).$mount('#app')

Vue.config.productionTip = false // 阻止启动生产消息
