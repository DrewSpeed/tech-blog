const { response } = require("express")

const withAuth = (req, res, next) => {
    if (!req.session.userId) {
        response.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;