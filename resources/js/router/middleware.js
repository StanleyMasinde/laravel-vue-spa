/**
 * Common middlewae that can be applied to routes
 */

let middlewares = {
    auth: (to, from, next) => {
        // Show login page if the user is not logged in
        if (window.auth == 'false') next('/login')
        else next()
    },
    guest: (to, from, next) => {
        if (window.auth == 'true') next('/')
        else next()
    }
}



export default middlewares