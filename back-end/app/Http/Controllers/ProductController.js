'use strict'

const Helpers = use('Helpers')
const Product = use('App/Model/Product')
const Database = use('Database')

class ProductController {

  * index (request, response) {
    // const products = yield Product.all();
    const products = yield Database.table('products')
    .innerJoin('categories', 'products.category', 'categories.id')
    .select('products.id',
     'products.name as name',
     'products.description',
     'products.price',
     'products.price_type',
     'products.verified',
     'products.created_at',
     'products.image',
     'categories.name as category')
    response.json(products);
  }

  * destroy (request, response) {
    const params = request.params('id');
    const product1 = yield Product.findBy('id', params.id);
    yield product1.delete();
    response.json({ msg: 'product deleted successfully!' });
  }

  * store (request, response) {
    let data = request.all();

    const images = request.file('photo', {
      maxSize: '3mb',
      allowedExtensions: ['jpg', 'png', 'jpeg']
    });

    const user = yield request.auth.getUser()

    const fileName = `${new Date().getTime()}.${images.extension()}`
    yield images.move(Helpers.basePath()+'/public/uploads', fileName);

    data = Object.assign({}, data, { user_id: user.id, image: images.uploadName() });

    if(!images.moved()) {
      response.json(images.errors());
      return;
    }

    yield Product.create(data);
    response.json({ msg: 'post created Successfully', path: 'uploads/'+images.uploadName() });
  }

  * search (request, response) {
    const term = request.input('term');

    const products = yield Product.query().where('name', 'LIKE', `%${term}%`);
    response.json(products);
  }
}

module.exports = ProductController
