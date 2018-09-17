<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>this.$store.state.count:{{ this.$store.state.helloVuex.count }}</h1>
    <h1>this.$store.getters.getCount:{{ this.$store.getters.getCount }}</h1>
    <h1>doneTodosCount:{{ doneTodosCount }}</h1>
    <h1>count:{{ count }}</h1>
    <button @click="$store.commit('add')">$store.commit('add')</button>
    ||<button @click="add">add</button>
    ||<button @click="$store.dispatch('reduces')">$store.dispatch('reduces')</button>
    ||<button @click="$store.dispatch('incrementAsync')">$store.dispatch('incrementAsync')</button>
    ||<button @click="incrementAsync">async incrementAsync</button>
    ||<button @click="$store.dispatch('actionB')">async actionB</button>
    ||<button @click="$store.dispatch('actionC')">async await actionC</button>
  </div>
</template>
<script>
import store from '../store/store.js'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  store,
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  },
  methods: {
    ...mapMutations([
      'add'
    ]),
    ...mapActions([
      'incrementAsync'// 将$store.dispatch('incrementAsync') 映射到this.incrementAsync
    ])
  },
  computed: {
  // 参数映射 吧count属性 跟store里面的getcount做映射
    ...mapGetters({
      count: 'getCount'
    }),
    doneTodosCount () {
      return this.$store.getters.getCount
    }
  }
}
</script>
