import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    add(state, number = 1) {
      state.count += number
    },
  },
  actions: {
    asyncAdd({ commit }, number = 1) {
      setTimeout(() => {
        commit('add', number)
      }, 100)
    },
  },
  getters: {
    score: (state) => {
      return `score:${state.count}`
    },
  },
  modules: {},
})
