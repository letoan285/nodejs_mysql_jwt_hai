
const { createPool } = require('mysql');
const pool = createPool({
    host: 'localhost',
    password: '',
    port: 3306,
    user: 'root',
    database: 'nodejs_jwt_api',
    connectionLimit: 10
});

module.exports = pool;