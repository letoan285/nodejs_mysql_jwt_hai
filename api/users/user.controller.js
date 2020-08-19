const { sign } = require('jsonwebtoken');
const { hashSync, genSaltSync, compareSync } = require('bcrypt');
const {
    create,
    getUsers, 
    getUserByEmail
} = require('./user.service');
module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(body);
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: 'Connection Error'
                });
            }
            return res.json({
                success: true,
                data: results
            });
        });
    
    },
    registerUser: (req, res) => {
        const body = req.body;
        console.log(body);
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: 'Connection Error'
                });
            }
            return res.json({
                success: true,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((error, results) => {
            if(error){
                console.log(error);
                return;
            }
            return res.json({
                success: true,
                data: results
            });
        });
    
    },
    // getUser: () => {
    
    // },
    loginUser: (req, res) => {
        const { body } = req;
        getUserByEmail(body.email, (error, results) => {
            if(error){
                console.log(error);
                return;
            }
            if(!results){
                return res.json({
                    success: false,
                    data: 'Invalid Email or Password'
                });
            }


            const result = compareSync(body.password, results.password);
            if(result){
                results.password = undefined;
                const jsonToken = sign({result: results}, 'secret_key', {
                    expiresIn: '356d'
                });
                return res.json({
                    success: true,
                    message: 'Login Successfully',
                    accessToken: jsonToken
                });
            } else {
                return res.json({
                    success: false,
                    message: 'Invalid Email Or Password'
                }); 
            }


        });
    },
    // updateUser: () => {
    
    // },
    // deleteUser: () => {
    
    // },
    
}