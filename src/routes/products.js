const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');

router.post('/product', productControllers.createProduct);
router.get('/products', productControllers.getProducts);

module.exports = router;