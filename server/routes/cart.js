const express = require('express');

const { getAllCarts } = require('../controller/cart');

const router = express.Router();

router.get('/', getAllCarts);

module.exports = router;
