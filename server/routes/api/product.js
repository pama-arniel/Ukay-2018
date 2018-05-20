const Product = require('../../models/Product');

module.exports = (app) => {

    app.get('/api/product/details', (req, res, next) => {
        const { query } = req;
        const productsId = query.productsId.split(',');

        Product.find({
            _id: { $in : productsId }
        }, (err, products) => {
            if (err) {
                return res.send({
                  success: false,
                  message: "Server Error in getting products"
                });
            }

            return res.send({
                success: true,
                message: "Success in getting products",
                productsToSell: products
            });
        });
    });
};
