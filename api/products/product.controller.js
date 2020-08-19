const { getAll } = require('./product.service');
module.exports = {
    getProducts: (req, res) => {
        getAll(
            (error, results) => {
                if(error){
                    console.log(error);
                    return;
                }
                return res.json({
                    success: true,
                    data: results
                });
            }
        );
    }
}