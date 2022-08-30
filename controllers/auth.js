const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(() => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.render('/');
    })
  .catch(err => console.log(err))
};