exports.getLogin = (req, res, next) => {
  res.render('auth/orders', {
    path: '/login',
    pageTitle: 'Login',
    orders: orders,
    isAuthenticated: req.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  req.isLoggedin = true;
  res.render('/');
};