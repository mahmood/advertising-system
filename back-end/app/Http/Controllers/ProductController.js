'use strict'

const Helpers  = use('Helpers')
const Product  = use('App/Model/Product')
const Database = use('Database')
const moment   = require('jalali-moment');

class ProductController {

  * index (request, response) {
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
    //  let ProductWithformatedDate = products.map(item => {
    //    return {
    //        ...item,
    //        formatedDate: moment(item.created_at, "YYYY-MM-DD h:m:s").format("jD jMMMM jYYYY")
    //      }
    //  });
    //  console.log(ProductWithformatedDate);
    response.json(products);
  }

  * verified (request, response) {
    const products = yield Database.table('products')
    .innerJoin('categories', 'products.category', 'categories.id')
    .where('products.verified', 1)
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
    const { id } = request.params('id');
    const ads = yield Product.findBy('id', id);
    yield ads.delete();
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

    const products = yield Product.query().where('name', 'LIKE', `%${term}%`).where('verified', '1');
    response.json(products);
  }

  * verifyProduct (request, response) {
    const { id } = request.params('id');
    let ads = yield Product.findBy('id', id)
    ads.verified = 1;
    yield ads.save();
    response.json({ msg: 'با موفقیت تایید شد.' });
  }

  * show (request, response) {
    const { id } = request.params('id');
    // Fetch Adv with given id
    let ads = yield Database.table('products')
    .where('products.id', id)
    .innerJoin('categories', 'products.category', 'categories.id')
    .innerJoin('users', 'products.user_id', 'users.id')
    .select('products.id',
     'products.name as name',
     'products.price',
     'users.telphone',
     'products.price_type',
     'products.verified',
     'products.created_at',
     'products.image',
     'categories.name as category',
     'products.description')
    response.json(ads);
  }

  * info (request, response) {
    // Fetch information
    const productCountQuery = yield Database.from('products').count('id as totalProducts');
    const approvedProductsQuery = yield Database.from('products').where('verified', 1).count('id as approvedProducts');
    const notApprovedProductsQuery = yield Database.from('products').where('verified', 0).count('id as notApprovedProducts');
    const totalUsersQuery = yield Database.from('users').count('id as totalUsers');
    // Process Data to readable format
    const allProducts = productCountQuery.map(product => product.totalProducts);
    const approvedProducts = approvedProductsQuery.map(product => product.approvedProducts);
    const notApprovedProducts = notApprovedProductsQuery.map(product => product.notApprovedProducts);
    const totalUsers = totalUsersQuery.map(users => users.totalUsers);
    // Return Response as json
    response.json([
      {
        id: 1,
        title: 'تعداد کل آگهی ها',
        count: allProducts[0],
        color: 'blue'
      },
      {
        id: 2,
        title: 'آگهی های تایید شده',
        count: approvedProducts[0],
        color: 'green'
      },
      {
        id: 3,
        title: 'تعداد آگهی های منتظر تایید',
        count: notApprovedProducts[0],
        color: 'yellow'
      },
      {
        id: 4,
        title: 'تعداد کاربران',
        count: totalUsers[0],
        color: 'red'
      }
    ]);
  }
}

module.exports = ProductController
