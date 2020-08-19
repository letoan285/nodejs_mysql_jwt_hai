const pool = require('../../config/database');
module.exports = {
    getAll: callBack => {
        pool.query(`SELECT * FROM products`, [], (error, results, fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null, results);
        });
    }
}