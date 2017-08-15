import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	regShow: false // 注册显示
}
const getters = {
	regShow: state => state.regShow
}
const actions = {
	regShowTgl({commit}, flag){
		commit('REG_SHOW_TGL' ,flag)
	}
}
const mutations = {
	REG_SHOW_TGL (state, flag){
		state.regShow = flag
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})