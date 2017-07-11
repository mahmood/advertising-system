'use strict'

const Helpers = use('Helpers')
const Product = use('App/Model/Product')

class ProductController {

  * index (request, response) {
    const products = yield Product.all();
    response.json(products);
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
}

module.exports = ProductController
