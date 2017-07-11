'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {

  up () {
    this.create('products', table => {
      table.increments()
      table.string('name')
      table.string('category')
      table.text('description')
      table.integer('price').Nullable
      table.string('price_type')
      table.string('image')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('products');
  }

}

module.exports = ProductsTableSchema
