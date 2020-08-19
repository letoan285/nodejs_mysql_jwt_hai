const express = require('express');


const app = express();
const userRoute = require('./api/users/user.route');
const productRoute = require('./api/products/product.route');

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(4000, () => {
    console.log('Server is runing on port 4000');
});