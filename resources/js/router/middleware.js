/**
 * Register all your SPA middleware here
 * 
 */
export default {
    auth: (to, from, next) => {
        next()
    },
    guest: (to, from, next) => {
        next()
    }
}


