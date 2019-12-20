declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// 声明第三方模块
// declare module 'jf-ui'

// 声明图片文件为模块
declare module '*.png'
declare module '*.jpg'
// 声明Vue.prototype上挂载的方法
declare module 'vue/types/vue' {
  interface Vue {
    showToast: any
  }
}


