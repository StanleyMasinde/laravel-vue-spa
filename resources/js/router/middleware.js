/**
 * Common middlewae that can be applied to routes
 */

let middlewares = {
    auth: (to, from,  next) => {
        //
    },
    guest: (to, from,  next) => {
        return next(true)
    }
}



export default middlewares = middlewares