# Laravel SPA Scaffolding

## What is this?
Laravel SPA scaffolding is built on [Laravel](https://laravel.com/docs/) Framework
It makes it easy to to build single page applications using [Vuejs](https://vuejs.org) and [Vue-router](https://router.vuejs.org/).

A *single-page application (SPA)* is a [web application](https://en.wikipedia.org/wiki/Web_application) or [web site](https://en.wikipedia.org/wiki/Web_site) that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This approach avoids interruption of the [user experience](https://en.wikipedia.org/wiki/User_experience) between successive pages, making the application behave more like a [desktop application](https://en.wikipedia.org/wiki/Desktop_application). In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load,[1] or the appropriate resources are [dynamically loaded](https://en.wikipedia.org/wiki/Dynamic_loading) and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the [location hash](https://en.wikipedia.org/wiki/Fragment_identifier) or the [HTML5 History API](https://en.wikipedia.org/wiki/Comparison_of_layout_engines_(HTML5)#APIs) can be used to provide the perception and navigability of separate logical pages in the application.[2] Interaction with the single-page application often involves dynamic communication with the [web server](https://en.wikipedia.org/wiki/Web_server) behind the scenes.
**source wikipaedia**

## Features
1. Single Page application (Vue router)
2. Progressive Web app features
3. Uses the latest version of bootstrap css
4. Laravel 6
5. State management with [Vuex](https://vuex.vuejs.org)
6. Authentication (Almost done)


## Getting started 
1. Create a project with composer `composer create-project stannlee/vue-laravel-spa <Project-Name>`
replace `<project-name>` with your project's name eg `composer create-project stannlee/vue-laravel-spa blog`.
The above command will create a new projct in a folder named blog just laravel.
2. Add your database details to the `.env` file and run `php artisan migrate`
Please ensure you are using the latest version of mysql server to avoid runnig into errors.
3. At this point when you run `php artisan serve` the app will run at port 8000
Open your browser and go to `localhost:8000` and you will see your app running
4. Write your routes in the `resouces/js/router/routes.js` file (See the directory structure below). Please refer to vue router [docs](https://router.vuejs.org/)
Unlike laravel's routes, here we write routes in form of an Array of objects. A single route is contained in an object like below
```javascript
const routes = [
     {
         path: '/',
         name: 'Welcome',
         component: path('Welcome')
     }
 ]
```
You will notice there is a method called `path()` in the above snippet. This method is responsible for finding your view components in the `resources/js/views` folder.
All you have to do is to give the file name(Case sensitive) without the .vue extenstion. if your view component is deeper in the views folder, just prepend the path like below
```javascript
const routes = [
     {
         path: '/',
         name: 'Welcome',
         component: path('path/view')
     }
 ]
 ```
 *Please note that you only have to edit the routes.js file*
 *These are the basics of getting you started. The other features are in a very active development please feel free to contribute 😁. thank you 🙏*
*********************************************************
<!-- *Currently only the login and register functionality work without proper feedback to the user* -->
*Also the router is now in [hash mode](https://router.vuejs.org/guide/essentials/history-mode.html) for convinience*
#### More docs coming
