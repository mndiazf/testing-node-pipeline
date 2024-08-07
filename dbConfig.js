// dbConfig.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '190.14.57.201',
  user: 'api_ncr',
  password: 'Pjchile.23',
  database: 'api_ncr',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
