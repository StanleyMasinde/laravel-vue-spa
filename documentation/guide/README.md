# Getting started

## Prequisites
All the requirements are the same as those for [Laravel](https://laravel.com/docs/installation') that is,
1. [composer](https://getcomposer.org)
2. php ^7.2 because this project is build on top of laravel 6.0
3. npm or yarn for javascript package management
4. A relational database management system like mysql

## Installation

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