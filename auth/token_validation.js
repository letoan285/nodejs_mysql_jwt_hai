const jwt = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization');
        if(token){
            token = token.slice(7);
            jwt.verify(token, 'secret_key', (err, decoded) => {
                if(err){
                    return res.json({
                        success: false,
                        message: 'Invalid Token...'
                    })
                } else {
                    // res.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Unauthorized Access !'
            })
        }
    }
}