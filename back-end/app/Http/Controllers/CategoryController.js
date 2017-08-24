'use strict'

const Category = use('App/Model/Category')
const Product  = use('App/Model/Product')

class CategoryController {
  * index (request, response) {
    const data = yield Category.all();
    response.json({ data });
  }

  * store (request, response) {
    const data = request.all();

    yield Category.create(data);

    response.json({ msg: 'Category Created Successfully' });
  }


  * show (request, response) {
    const { id } = request.params();

    const products = yield Product.query().where('category', id).where('verified', 1).fetch();
    const currentCat = yield Category.query().where('id', id).select('id', 'name', 'slug').fetch();

    response.json({ products, currentCat });
  }

  * destroy (request, response) {
    const { id } = request.params();

    const cat = yield Category.findBy('id', id);
    yield cat.delete();

    response.json({ msg: 'Category Deleted Successfully' });
  }
}

module.exports = CategoryController
