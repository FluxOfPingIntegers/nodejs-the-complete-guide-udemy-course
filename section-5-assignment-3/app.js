const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const userRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');


app.use('/users', userRoutes);
app.use('/', homeRoutes);

app.listen(3000);