/**
 * Register All routes here
 */

 /**
  * Find the view component ad register it
  */
 const path = view => {
    return () => import(/* webpackChunkName: 'views/view' */ `../views/${view}.vue`)
 }

 const routes = [
     {
         path: '/',
         name: 'Welcome',
         component: path('Welcome')
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
