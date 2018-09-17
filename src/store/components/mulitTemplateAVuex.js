const state = {
  count: 10
}
// 改变状态的方法
const mutations = {
  addA (state) {
    state.count++
  },
  reducesA (state) {
    state.count--
  }
}
var mulitTemplateAVuex = {
  state,
  mutations
}
// 使用 export default 封装，让外部可以访问
export default mulitTemplateAVuex
