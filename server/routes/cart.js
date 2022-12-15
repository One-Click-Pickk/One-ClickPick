const express = require('express');

const { getAllCarts, getUserCart, deleteCart } = require('../controller/cart');

const router = express.Router();

router.get('/', getAllCarts);
router.get('/:userId', getUserCart);
router.delete('/:id', deleteCart);

module.exports = router;
