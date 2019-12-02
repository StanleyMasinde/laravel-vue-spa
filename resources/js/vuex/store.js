import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.token,
        user: {}
    },
    mutations: {
        login(state, token) {
            Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ${token}`
            state.token = localStorage.token = token
            router.push({ path: '/home' })
        },
        logout(state) {
            state.token = localStorage.token = ''
            state.user = {}
            Vue.prototype.$http.defaults.headers.common.Authorization = `Bearer ''`
            router.push({ path: '/login' })
        }
    },
    actions: {},
    getters: {
        auth(state, getters) {
            if (state.token == '') {
                return false
            } else {
                return true
            }
        },
    }
})

export default store