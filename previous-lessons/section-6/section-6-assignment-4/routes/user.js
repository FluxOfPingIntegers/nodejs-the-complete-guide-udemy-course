const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const userNames = [];

router.get('/', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User',
    path: '/',
  });
});

router.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'users',
    path: './users',
    userNames: userNames
  });

})

router.post('/users', (req, res, next) => {
  userNames.push({name: req.body.username});
  console.log(userNames);
  res.redirect('/users');
});

module.exports = router;