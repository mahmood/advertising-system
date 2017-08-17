'use strict'

const User = use('App/Model/User');

class UsersController {

  * index (request, response) {
    const Users = yield User.all();

    response.json(Users);
  }

  * destroy (request, response) {
    const { id } = request.params('id');
    const user = yield User.findBy('id', id);
    yield user.delete();

    response.json({ msg: 'User Deleted successfully!' })
  }

  * login (request, response) {
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
      response.unauthorized({msg: 'اطلاعات وارد شده صحیح نمی باشد.'});
    }
  }

  * register (request, response) {
    const data = request.only('username', 'password', 'fname', 'lname', 'email', 'telphone');
    yield User.create(data);
    response.json({ msg: 'کاربر با موقیت ساخته شد.' });
    return;
  }


  * profile (request, response) {
    const user = yield request.auth.getUser()
    if (user) {
      response.ok(user)
      return
    }
    response.unauthorized('You must login to view your profile')
  }
}

module.exports = UsersController
