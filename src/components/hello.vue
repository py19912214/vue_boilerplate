<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>this.$store.state.count:{{ countData }}</h1>
    <h1>使用mapState做属性映射:{{ this.$store.state.helloVuex.count }}</h1>
    <h1>this.$store.getters.getCount:{{ this.$store.getters.getCount }}</h1>
    <h1>doneTodosCount1:{{ doneTodosCount }}</h1>
    <h1>使用mapGetters把store中的方法返回值映射到count中:{{ count }}</h1>
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
import { mapGetters, mapMutations, mapActions, mapState } from 'vuex'

export default {
  store,
  data () {
    return {
      msg: 'vuex demo说明'
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
    // 方法返回值映射
    ...mapGetters({
      count: 'getCount'
    }),
    ...mapState({// 属性映射
      countData: state => state.helloVuex.count
    }),
    doneTodosCount () {
      return this.$store.getters.getCount
    }
  }
}
</script>
