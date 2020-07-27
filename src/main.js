import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'

import axios from 'axios'
Vue.prototype.axios = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//配置默认请求url
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
//默认请求超时限制
// axios.defaults.timeout = 5000

// 创建对应的 axios 实例，避免全局调用,针对不同的接口
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:8000/api/n3',
//   timeout = 5000
// })
//在这个实例中请求数据
// instance1({
//   url:''
// })

// 请求
axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}).then(res => {
  console.log(res);
})