const pool = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(`INSERT INTO users(username, email, password, avatar) VALUES(?,?,?,?)`, [
            data.username,
            data.email,
            data.password,
            data.avatar
        ], (error, results, fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null, results);
        });
    },
    getUsers: callBack => {
        pool.query(`SELECT username, email, password, avatar FROM users`, [], (error, results, fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null, results);
        });
    },
    // login: (data, callBack) => {},
    getUserByEmail: (email, callBack) => {
        pool.query(`SELECT * FROM users WHERE email = ?`, [email], (error, results, fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null, results[0]);
        });
    }
}