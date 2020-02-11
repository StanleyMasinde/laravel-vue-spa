# Getting started

## Prequisites
All the requirements are the same as those for [Laravel](https://laravel.com/docs/installation') that is,
* [composer](https://getcomposer.org)
* php ^7.2 because this project is build on top of laravel 6.0
* `npm` or `yarn` for javascript package management
* Use the default laravel back end setup e.g database
 

## Installation

1. Create a project with composer `composer create-project stannlee/vue-laravel-spa <Project-Name>`
replace `<project-name>` with your project's name eg `composer create-project stannlee/vue-laravel-spa blog`.
The above command will create a new projct in a folder named blog just laravel.
2. Add your application details including the details to the `.env` file and run `php artisan migrate`
Please ensure you are using the latest version of mysql server to avoid runnig into errors.
3. At this point when you run `php artisan serve` the app will run at port 8000
Open your browser and go to `localhost:8000` and you will see your app running
4. Write your routes in the `resouces/js/router/routes.js` file (See the directory structure below). Please refer to vue router [docs](https://router.vuejs.org/)
Unlike laravel's routes, here we write routes in form of an Array of objects. A single route is contained in an object like below

## Front-end
### Routes.js
```javascript
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
    * because it is a fallback route
    * it is responsible for throwing the 404 error
    */
    {
        path: "*",
        name: 'Not Found',
        component: path('404')
    }
]

export default routes

```
You will notice there is a method called `path()` in the above snippet. This method is responsible for finding your view components in the `resources/js/views` folder.
All you have to do is to give the file name(Case sensitive) without the .vue extenstion. if your view component is deeper in the views folder, just prepend the path like below
### Code Splitting
```javascript
/**
 * Responsible for mapping the views in the views folder
 * @param {*} view 
 */
const path = view => () => import(/* webpackChunkName: 'views/view' */ `../views/${view}.vue`)
const routes = [
     {
         path: '/',
         name: 'View',
         component: path('path/view')
     }
 ]
 ```
The above method makes use of Webpack's codesplitting feture which is ideal because we don't want to load the entire javascript bundle in the first visit. We only want to load the views that the user requests or navigates to this is a huge improvement in performance of your application. **However** you the first route file should be bundled with the main javascript or else you will run into errors. see below
### Root route object
```javascript
/**
*We are not using code splitting for the first route
*the .default attribute tells vue about where to find the render function
*/
{
    path: '/',
    name: 'Welcome',
    component: require('../views/Welcome.vue').default,
},
```
 **Please note that you only have to edit the routes.js file**
 *These are the basics of getting you started. The other features are in a very active development please feel free to contribute 😁. thank you 🙏*
*********************************************************
<!-- *Currently only the login and register functionality work without proper feedback to the user* -->
__If you run into 404 errors please visit this resource [history mode](https://router.vuejs.org/guide/essentials/history-mode.html) about routing modes in vue-router__
_____________________________________________________________________________________________________________________
**********************************************************************************************************************
## Back End
### Routes Fallback
* All the routes in the **Web Namespace(`Web.ph`)** are configure to redirect all the Requests to your fronend see below
```php
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::fallback(function () {
    return view('welcome');
});
``` 
* All other backend transactions are handled by `api.php`
* We are using __JWT__ for authentication

_more docs coming soon_
*please report raise any issues on the main repository thank you*
