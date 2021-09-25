const express = require('express');
const router = express.Router();
const controller = require('../controller/products');

router.get('/products', controller.getAll);

router.get('/products/:id', controller.getByID);

router.post('/products', controller.addProduct);


module.exports = router;