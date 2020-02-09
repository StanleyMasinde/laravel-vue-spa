import store from '../vuex/store'

let auth = store.getters.auth
export default {
    auth: (to, from, next) => {
        if (auth) next()
        else next('/login')
    },
    guest: (to, from, next) => {
        next()
    }
}


