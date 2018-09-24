import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import mulitTemplate from '@/components/mulitTemplate'
import vueComponentHelloWorld from 'vue-component/src/components/HelloWorld'
import protobufTest from '@/components/protobufTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/protobufTest',
      name: 'protobufTest',
      component: protobufTest
    },
    {
      path: '/vueComponentHelloWorld',
      name: 'vueComponentHelloWorld',
      component: vueComponentHelloWorld
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      component: hello,
      query: { // 可选字段 查询参数，就是url里‘?’之后的部分
        plan: 'private' // 查询参数demo
      }
    },
    {
      path: '/mulitTemplate',
      component: mulitTemplate
    }
  ]
})
