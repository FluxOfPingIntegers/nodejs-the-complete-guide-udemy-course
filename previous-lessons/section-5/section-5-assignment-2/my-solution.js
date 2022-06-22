const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log("This is the first middleware call");
//   next();
// });
// 
// app.use((req, res, next) => {
//   console.log("This is the second middleware call");
//   res.send('<h2>First Secction Complete</h2>');
// });

app.use('/users', (req, res, next) => {
  console.log('/users middleware route')
  res.send('<h1>Hello From "/users!"</h1>');
});

app.use('/', (req, res, next) => {
  console.log('/ middleware route')
  res.send('<h1>Hello From "/"</h1>');
});

app.listen(3000);