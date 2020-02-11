import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.token,
        user: {},
        error: false,
        loading: false
    },
    mutations: {
        login(state, res) {
            window.axios.defaults.headers.common.Authorization = `Bearer ${res.headers.token}`
            state.user = res.data
            state.token = localStorage.token = res.headers.token
            router.push({ path: '/home' }).then((done) => done).catch(err => console.error(err))
        },
        logout(state) {
            state.token = localStorage.token = ''
            state.user = {}
            window.axios.defaults.headers.common.Authorization = `Bearer ''`
            window.axios.post('/logout')
            router.push({ path: '/login' }).then(done => done).catch(err => console.error(err))
        },
        sessionAvailable(state, user) {
            state.user = user
        },
        noSession(state) {
            state.token = localStorage.token = ""
            state.user = {}
            window.axios.defaults.headers.common.Authorization = `Bearer ''`
        }
    },
    actions: {},
    getters: {
        auth(state, getters) {
            return state.token == '' ? false : true
        },
        user(state, getters) {
            return state.user
        }
    }
})

export default store