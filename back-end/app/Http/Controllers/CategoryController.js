'use strict'

const Category = use('App/Model/Category')

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

  * destroy (request, response) {
    const params = request.params('id');

    const cat = Category.findBy('id', params.id);
    yield cat.delete();
    response.json({ msg: 'Category Deleted Successfully' });
  }
}

module.exports = CategoryController
