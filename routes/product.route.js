const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const { getProducts, createProduct, getOneProduct, updateProduct, deleteProduct } = require('../controller/product.controller');

router.get('/', getProducts);

router.post('/', createProduct)

router.get('/:id', getOneProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct);


module.exports = router;