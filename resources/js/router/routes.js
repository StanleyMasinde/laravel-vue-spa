import Route from './Route/route'

/**
 * ==========================================================================
 * Route Class
 * ==========================================================================
 */

let route = new Route()
const BaseRoute = {
    path: '/',
    name: 'Welcome',
    component: require(`../../views/Welcome.vue`).default,
}
/**
 * A an array of routes
 * @returns Array()
 */
const routes = [
    BaseRoute,
    route.get('/', 'Welcome Page', 'Welcome'),
    route.get('/about', 'About Page', 'About'),
    route.get('/login', 'Login', 'auth.Login'),
    route.get('/register', 'Register', 'auth.Register'),
]

export default routes
