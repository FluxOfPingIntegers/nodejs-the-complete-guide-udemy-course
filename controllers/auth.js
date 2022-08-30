const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('6300f91ac067c4354358d600')
    .then(() => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      res.render('/');
    })
  .catch(err => console.log(err))
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};