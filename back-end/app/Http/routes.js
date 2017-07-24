const Route = use('Route');
// Api Routes
Route.group('version1', () => {
  Route.get('info', 'UsersController.info');
  Route.get('profile', 'UsersController.profile');
  Route.post('login', 'UsersController.login');
  Route.post('register', 'UsersController.register');
  Route.get('product/search', 'ProductController.search');
  Route.resource('product', 'ProductController');
  Route.resource('category', 'CategoryController');
}).prefix('api/v1');
