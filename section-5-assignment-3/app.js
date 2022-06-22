const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const userRoutes = require('./routes/users');
const homeRoutes = require('./routes/home');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);
app.use(homeRoutes);

app.listen(3000);