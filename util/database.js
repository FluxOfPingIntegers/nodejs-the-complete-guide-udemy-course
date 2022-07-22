require('dotenv').config();
const mysql = require('mysql2');

const password = process.env.CASUAL_PASS;



const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: password
});

module.exports = pool.promise();