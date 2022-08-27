exports.getLogin = (req, res, next) => {
  const isLoggedIn = req
    .get('Cookie')
    .split(';')[1]
    .trim()
    .split('=')[1] === 'true';
  res.render('auth/orders', {
    path: '/login',
    pageTitle: 'Login',
    orders: orders,
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader('Set-Cookie', 'loggedIn=true');
  res.render('/');
};