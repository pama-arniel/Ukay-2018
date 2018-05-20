const Product = require('../../models/Product');
const Random = require('mongoose-simple-random');

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
                products: products
            });
        });
    });

    app.get('/api/product/trending', (req, res, next) => {

        Product.findRandom({}, {}, {limit: 8}, (err, products) => {
            if (err) {
                return res.send({
                  success: false,
                  message: "Server Error in getting trending"
                });
            }

            return res.send({
                success: true,
                message: "Success in getting trending",
                trending: products
            });
        });
    });

    app.get('/api/product/recommended', (req, res, next) => {

        Product.findRandom({}, {}, {limit: 8}, (err, products) => {
            if (err) {
                return res.send({
                  success: false,
                  message: "Server Error in getting recommended"
                });
            }

            return res.send({
                success: true,
                message: "Success in getting recommended",
                recommended: products
            });
        });
    });

    app.get('/api/product/latest', (req, res, next) => {

        Product.find({}, {}, {limit: 8}, (err, products) => {
            if (err) {
                return res.send({
                  success: false,
                  message: "Server Error in getting latest"
                });
            }

            return res.send({
                success: true,
                message: "Success in getting latest",
                latest: products
            });
        });
    });
};
