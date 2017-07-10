'use strict'

const User = use('App/Model/User');

class UsersController {
  * login(request, response) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const login = yield request.auth.validate(email, password);
      const user  = yield User.query().where('email', email).first();
      const token = yield request.auth.generate(user);
      response.json({
        token,
        user
      });
    } catch(e) {
      response.unauthorized('Invalid credentails')
    }
  }

  * register(request, response) {
    const data = request.only('username', 'password', 'fname', 'lname', 'email');
    yield User.create(data);
    response.send({ msg: 'user created successfully' });
    return;
  }

  * profile(request, response) {
    const user = yield request.auth.getUser()
    console.log(yield request.auth.check())
    if (user) {
      response.ok(user)
      return
    }
    response.unauthorized('You must login to view your profile')
  }
}

module.exports = UsersController
