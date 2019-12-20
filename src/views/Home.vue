<template>
  <div class="home">
    <button @click="addOne">{{txt}}</button>
    <button @click="addOne">{{ValA}}</button>
    <button @click="addOne">{{mixinValue}}</button>
    <HelloWorld @emitTodo = 'handle' propA="Welcome to Your Vue.js + TypeScript App" propC="propC" v-model="modelValue"/>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Mixins } from 'vue-property-decorator'
import {
  Getter,
  Action,
  Mutation
} from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import MyMixin from '@/mixins/test'
@Component({
  // 注册组件
  components: {
    HelloWorld
  }
})
export default class Home extends Mixins(MyMixin) {
  // 获取vuex
  @Getter private getCount
  @Action private updateTest
  @Mutation('UPDATETEST') private UPDATETEST
  // 设置data
  private txt: string = 'txt'
  // 设置v-model对应属性
  private modelValue: string = 'modelValue'
  // 设置computed
  get ValA () {
    return 1
  }
  // 设置watch
  @Watch('txt', { immediate: true, deep: true })
  onChangeValue (newVal: string, oldVal: string) {
    console.log(newVal)
  }
  // methods
  private addOne () {
    console.log('methods')
    this.txt = 'newtxt'
  }
  private handle () {
    console.log('event')
  }
  created () {
    console.log(this.mixinValue)
    this.updateTest({ count: 4 })
    this.UPDATETEST({ count: 6 })
  }
}
</script>
