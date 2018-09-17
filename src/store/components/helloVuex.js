const state = {
  count: 30
}
// 改变状态的方法
const mutations = {
  add (state) {
    state.count++
  },
  reduces (state) {
    state.count--
  },
  increment (state) {
    setTimeout(() => {
      state.count--
    }, 1000)
  }
}
var demoVuex = {
  state,
  mutations,
  getters: {
    getCount: state => {
      return state.count
    }
  },
  actions: {
    reduces (context) {
      context.commit('reduces')
    },
    incrementAsync ({
      commit
    }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA ({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('add')
          resolve()
        }, 1000)
      })
    },
    actionB ({
      dispatch,
      commit
    }) {
      // 先执行actionA 再执行新增 要是想用then的话上一个方法 需要返回Promise对象
      return dispatch('actionA').then(() => {
        setTimeout(() => {
          commit('add')
        }, 1000)
      })
    },
    async actionC ({
      dispatch,
      commit
    }) {
      await dispatch('actionA') // 使用await等待结束
      commit('increment')
    }
  }
}
// 使用 export default 封装，让外部可以访问
export default demoVuex
