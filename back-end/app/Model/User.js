'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  courses() {
    return this.hasMany('App/Model/Courses');
  }


  static get hidden () {
    return ['password']
  }

  static boot () {
    super.boot()

    /**
     * Hashing password before storing to the
     * database.
     */
    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User
