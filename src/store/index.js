import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  regShow: false, // 注册显示
  navShow: false // 注册显示
}
const getters = {
  regShow: state => state.regShow,
  navShow: state => state.navShow
}
const actions = {
  regShowTgl ({commit}, flag) {
    commit('REG_SHOW_TGL', flag)
  },
  navShowTgl ({commit}, flag) {
    commit('NAV_SHOW_TGL', flag)
  }
}
const mutations = {
  REG_SHOW_TGL (state, flag) {
    state.regShow = flag
  },
  NAV_SHOW_TGL (state, flag) {
    state.navShow = flag
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
