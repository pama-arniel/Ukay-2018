const Product = require('../../models/Product');

module.exports = (app) => {

    app.post('/api/product/sellproduct', (req, res, next) => {
        const { body } = req;
        const {
          name,
          category,
          province,
          city,
          price,
          description
        } = body;

        if (!name) {
          return res.send({
            success: false,
            message: 'Error: Name cannot be blank.'
          });
        }
        if (!category) {
          return res.send({
            success: false,
            message: 'Error: Category cannot be blank.'
          });
        }
        if (!province) {
          return res.send({
            success: false,
            message: 'Error: Province cannot be blank.'
          });
        }
        if (!city) {
          return res.send({
            success: false,
            message: 'Error: City cannot be blank.'
          });
        }
        if (!price) {
          return res.send({
            success: false,
            message: 'Error: Price cannot be blank.'
          });
        }
        if (!description) {
          return res.send({
            success: false,
            message: 'Error: Description cannot be blank.'
          });
        }

        console.log('here');

        const newProduct = new Product();
        newProduct.name = name;
        newProduct.category = category;
        newProduct.province = province;
        newProduct.city = city;
        newProduct.price = price;
        newProduct.description = description;

        newProduct.save((err, product) => {
            if (err) {
              return res.send({
                success: false,
                message: 'Error: Server Error'
              });
            }

            return res.send({
                success: true,
                message: 'Product saved in store'
            });
        });
      });

};
