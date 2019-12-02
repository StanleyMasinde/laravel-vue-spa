import store from "../vuex/store"

const token = store.state.token
export default {
    auth: (to, from, next) => {
        if (token == '') next('/login')
        next()
    },
    guest: (to, from, next) => {
        next()
    }
}


