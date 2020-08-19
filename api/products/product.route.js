const router = require('express').Router();
const { getProducts } = require('./product.controller');
const { checkToken } = require('../../auth/token_validation');

router.get('/', checkToken, getProducts);

module.exports = router;