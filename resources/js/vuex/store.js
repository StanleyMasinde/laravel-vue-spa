import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token') | ''
    },
    mutations: {},
    actions: {},
    getters: {
        auth(state, getters) {
            if (state.token) {
                return true
            } else {
                return false
            }
        }
    }
})

export default store