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
     }
 ]

 export default routes
