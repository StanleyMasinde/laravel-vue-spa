/** 
 *This function is used to resolve your views in the views directory
 Only include the name of the view without the file extenstion
 */
import middleware from "./middleware";
const path = _view => {
    return require(/* webpackChunkName: 'view on' */ `../views/${_view}.vue`)
        .default;
};
/**
 * Register your routes here
 * Only use the component name without .vue
 */
let routes = [
    {
        path: "/",
        name: "Welcome",
        component: path("Welcome")
    },
    {
        path: "/login",
        name: "Login",
        component: path("Login"),
        beforeEnter: middleware.guest
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
        beforeEnter: middleware.guest
    },
    {
        path: '/home',
        name: 'home',
        component: path('Home'),
        beforeEnter: middleware.auth
    }
];

export default routes;
