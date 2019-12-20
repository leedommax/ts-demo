import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 引入玖富UI
import 'jf-ui/dist/css/jf-ui.css'
import JfUi from 'jf-ui'
import api from './fetch/index'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(JfUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
