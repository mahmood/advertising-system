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
    res.json({ msg: 'Category Created Successfully' });
  }

  * show (request, response) {
    const { id } = request.params();
    // const id = request.input('id');

    const products = yield Product.query().where('category', id).fetch();
    response.json({ products });
  }

  * destroy (request, response) {
    const { id } = request.params();

    const cat = Category.findBy('id', id);
    yield cat.delete();
    response.json({ msg: 'Category Deleted Successfully' });
  }
}

module.exports = CategoryController
