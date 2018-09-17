import Vue from 'vue'
import Vuex from 'vuex'
import helloVuex from './components/helloVuex'
import mulitTemplateAVuex from './components/mulitTemplateAVuex'
import mulitTemplateBVuex from './components/mulitTemplateBVuex'
Vue.use(Vuex)
var vuexStore = new Vuex.Store({
  modules: {
    helloVuex: helloVuex,
    mulitTemplateAVuex: mulitTemplateAVuex,
    mulitTemplateBVuex: mulitTemplateBVuex
  }
})
// 使用 export default 封装，让外部可以访问
export default vuexStore
