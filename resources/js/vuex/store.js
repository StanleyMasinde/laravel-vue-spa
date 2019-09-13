import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false,
        dark: true,
        app_name: process.env.MIX_APP_NAME
    }, mutations: {
        changetheme(state) {
            state.dark = !state.dark
        }
    }
})

export default store