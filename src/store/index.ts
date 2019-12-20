import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test' // 接口地址
import actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)

// 区分是否是线上环境, 线下环境错误信息会生成日志
const debug = process.env.NODE_ENV !== 'production'
// 初始化vuex
const store: any = new Vuex.Store({
  actions,
  getters,
  modules: {
    test
  },
  plugins: [],
  strict: debug
})
export default store

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions')
    })
  })
}
