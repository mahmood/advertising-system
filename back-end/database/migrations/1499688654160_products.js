'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('products', table => {
      table.increments().primary()
      table.string('name')
      table.integer('category', 10)
      table.text('description')
      table.integer('price').Nullable
      table.string('price_type')
      table.string('image')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('products');
  }

}

module.exports = ProductsTableSchema
