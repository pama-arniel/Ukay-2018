const User = require('../../models/User');

module.exports = (app) => {

    app.get('/api/user/profile', (req, res, next) => {
        const { query } = req;
        const { userId } = query;

        console.log(userId);
        User.findOne({
            _id: userId,
            isDeleted: false
        }, (err, user) => {
            console.log(user);
            if (err) {
                return res.send({
                  success: false,
                  message: 'Error: Server error in getting user profile'
                });
            }

            return res.send({
                success: true,
                message: 'Get profile success',
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
                productsToSell: user.productsToSell
            });
        });
    });
}
