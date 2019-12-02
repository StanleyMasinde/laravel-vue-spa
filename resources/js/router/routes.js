import middleware from './middleware'
import auth from '../auth'
/**
 * Responsible for mapping the views in the views folder
 * @param {*} view 
 */
const path = view => () => import(/* webpackChunkName: 'views/view' */ `../views/${view}.vue`)

const routes = [
    /**
     * For some reason, this only works when not async
     */
    {
        path: '/',
        name: 'Welcome',
        component: require('../views/Welcome.vue').default,
    },
    {
        path: '/login',
        name: 'Login',
        component: path('auth/Login'),
        beforeEnter: middleware.guest
    },
    {
        path: '/register/',
        name: 'Register',
        component: path('auth/Register'),
        beforeEnter: middleware.guest
    },
    {
        path: '/password/reset',
        name: 'Reset Password',
        component: path('auth/passwords/Email'),
        beforeEnter: middleware.guest
    },
    {
        path: '/home',
        name: 'Home',
        component: path('Home'),
        beforeEnter: middleware.auth
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
