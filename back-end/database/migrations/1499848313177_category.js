'use strict'

const Schema = use('Schema')

class CategoryTableSchema extends Schema {

  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('name')
      table.string('slug')
      table.timestamps()
    })
  }

  down () {
    this.drop('categories');
  }

}

module.exports = CategoryTableSchema
