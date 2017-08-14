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
	
}
const mutations = {
	regShowTgl (state) {
        state.regShow = regShow
    }
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})