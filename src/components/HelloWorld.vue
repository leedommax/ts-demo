<template>
  <div class="hello">
    <h1>{{ propA }}</h1>
    <h1>{{ propB }}</h1>
    <h1>{{ propC }}</h1>
    <button @click="change(10)">child</button>
    <input type="text" :value="value" @change="change" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Model } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop(String) propA!: string;
  @Prop({ default: 'default value' }) propB!: string;
  @Prop([String, Boolean]) propC: string | boolean;
  @Model('change', { type: String }) private value!: string;
  @Emit('emitTodo')
  emitTodo (n: string) {
    console.log('hello')
  }
  @Emit('change')
  change (n: number) {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
