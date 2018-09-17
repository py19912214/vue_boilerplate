<template>
  <div>
    <h1>templateB count:{{ count }}</h1>
    <button @click="$store.commit('addB')">$store.commit('addB')</button>
    <button @click="$store.commit('addA',mulitTemplateAVuex)">B模块调用A模块的方法</button>
  </div>
</template>

<script>
import store from '../store/store.js'
import { mapState } from 'vuex'

export default {
  store,
  computed: {
  // 参数映射 吧count属性 跟store里面的getcount做映射
    ...mapState({
      count: state => state.mulitTemplateBVuex.count
    })
  }
}
</script>
