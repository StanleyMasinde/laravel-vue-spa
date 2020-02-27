import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        appName: 'Blog',
        darkMode: false,
        mainDrawer: {
            show: false,
            mini: false
        }, auth: false
    },
    mutations: {
        miniDrawer(state) {
            state.mainDrawer.mini = !state.mainDrawer.mini
        }, changeDrawer(state) {
            state.mainDrawer.show = !state.mainDrawer.show
        }
    },
    actions: {},
    getters: {},
    plugins: [],
    strict: false
})

export default store
