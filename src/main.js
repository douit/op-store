import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*elementUi*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

/*自定义样式*/
import './styles/base.css'
import './styles/index.scss'

/*mock 模拟数据*/
import './mock/index.js'

/*api*/
import api from './http/index.js'
Vue.use(api) // 挂载全局 api 对象 通过 this.$api 调用

/*路由拦截控制器*/
import './permission.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
