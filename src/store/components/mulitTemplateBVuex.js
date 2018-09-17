const state = {
  count: 20
}
// 改变状态的方法
const mutations = {
  add (state) {
    state.count++
  },
  reduces (state) {
    state.count--
  }
}
var mulitTemplateBVuex = {
  state,
  mutations
}
// 使用 export default 封装，让外部可以访问
export default mulitTemplateBVuex