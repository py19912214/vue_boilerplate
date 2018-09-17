<template>
  <div>
    <h1>templateA count:{{ count }}</h1>
    <button @click="$store.commit('addA')">$store.commit('addA')</button>
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
      count: state => state.mulitTemplateAVuex.count
    })
  }
}
</script>
