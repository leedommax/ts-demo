import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  // 声明全局对象
  namespace android {
      function H5loadAppWay(s: string): void;
      function loadAppOcr(s: string): void;
  }
  // window挂载的属性
  interface Window {
   test: any
  }
}
