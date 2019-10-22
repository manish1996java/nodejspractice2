const express = require('express');
const router = express.Router();
// const path = require('path');
// const adminData = require('./admin');
const productController = require('../controller/product');


router.use('/',productController.getProduct);

module.exports = router
