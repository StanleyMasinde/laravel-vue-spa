/** 
 *This function is used to resolve your views in the views directory
 Only include the name of the view without the file extenstion
 */
const path = (_view) => {
        return require( /* webpackChunkName: 'view on' */ `../views/${_view}.vue`).default
    }
    /**
     * Register your routes here
     * Only use the component name without .vue
     */
let routes = [{
        path: "/",
        name: "home",
        component: path('Home')
    },
    {
        path: "/login",
        name: "Login",
        component: path('Login')
    },
    {
        path: "/register",
        name: "register",
        component: path('Register')
    }
]

export default routes