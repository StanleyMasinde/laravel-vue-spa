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
        login(state, token) {
            window.axios.defaults.headers.common.Authorization = `Bearer ${token}`
            window.axios.get('/api/user').then(res => state.user = res.data).catch((er) => console.error(er))
            state.token = localStorage.token = token
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