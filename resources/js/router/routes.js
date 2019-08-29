/**
 * This file contains all the routes for you application
 * Only edit the routes array
 */
//This function is used to resolve your views in the views directory
const path = (_view) => {
    require(`../views/${_view}.vue`).default
}
/**
 * Register your routes here
 * Only use the component name without .vue
 */
let routes = [
    {
        path: "/",
        name: "home",
        component: path('Home')
    },
]

export default routes