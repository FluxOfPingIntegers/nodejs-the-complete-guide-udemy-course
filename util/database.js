const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'RMS',
  database: 'node-complete',
  password: '' // todo
});

module.exports = pool.promise();