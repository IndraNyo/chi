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
	regShowTgl({commit}){
		commit('REG_SHOW_TGL')
	}
}
const mutations = {
	REG_SHOW_TGL(state, regShow){
		state.regShow = regShow
	}
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})