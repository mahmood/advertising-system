'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('welcome');

Route.group('v1', () => {
  Route.get('profile', 'UsersController.profile');
  Route.post('login', 'UsersController.login');
  Route.post('register', 'UsersController.register');

  Route.get('product/search', 'ProductController.search');
  Route.resource('product', 'ProductController');
  Route.resource('category', 'CategoryController');
}).prefix('api/v1');
