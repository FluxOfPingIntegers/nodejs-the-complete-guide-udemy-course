exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  //   .get('Cookie')
  //   .split(';')[1]
  //   .trim()
  //   .split('=')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/orders', {
    path: '/login',
    pageTitle: 'Login',
    orders: orders,
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLogginIn = true;
  res.render('/');
};