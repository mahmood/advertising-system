'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', table => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('fname', 100).notNullable()
      table.string('lname', 100).notNullable()
      table.string('role', 10).notNullable().defaultTo('user');
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
