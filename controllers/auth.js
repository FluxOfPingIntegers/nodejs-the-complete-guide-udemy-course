exports.getLogin = (req, res, next) => {
  res.render('auth/orders', {
    path: '/login',
    pageTitle: 'Login',
    orders: orders
  });
};