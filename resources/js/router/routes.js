/**
 * Register All routes here
 */

/**
 * Find the view component ad register it
 */
const path = view => () => import(/* webpackChunkName: 'views/view' */ `../views/${view}.vue`)

const routes = [
    /**
     * For some reason, this only works when not async
     */
    {
        path: '/',
        name: 'Welcome',
        component: require('../views/Welcome.vue').default
    },
    {
        path: '/login',
        name: 'Login',
        component: path('auth/Login')
    },
    {
        path: '/register/',
        name: 'Register',
        component: path('auth/Register')
    },
    {
        path: '/password/reset',
        name: 'Reset Password',
        component: path('auth/passwords/Email')
    },
    /**
    * Has to be the last path
    */
    {
        path: "*",
        name: 'Not Found',
        component: path('404')
    }
]

export default routes
