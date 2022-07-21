const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'RMS',
  database: 'node-complete',
  password: `${CASUAL_PASS}`
});

module.exports = pool.promise();