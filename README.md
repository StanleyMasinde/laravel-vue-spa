# Laravel SPA Scaffolding

## What is this?
Laravel SPA scaffolding is built on [Laravel](https://laravel.com/docs/) Framework
It makes it easy to to build single page applications using [Vuejs](https://vuejs.org) and Vue-router.

## Getting started 
1. Create a project with composer `composer create-project stannlee/vue-laravel-spa <Project-Name>`
2. At this point when you run `php artisan serve` the app will run at port 8000
3. Write your routes in the router.js file (See the directory structure below). Please refer to vue router [docs](https://router.vuejs.org/)
4. You can place your views anywhere or use the views folder

## Directory Structure
We will be working with the resources folder
```
resources
|---js
|   |--router
|   |    |
|   |    |---router.js
|   |
|   |--views
|   |
|   |--app.js
|   |--bootstrap.js
```
#### More docs coming