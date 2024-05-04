const express = require('express');
const { handleAddToCart, handleRemoveFromCart, handleGetCart, handleGetAllCarts } = require('../controllers/cart.controller');
const { isLoggedIn, isBanned } = require('../middlewares/auth');
const router = express.Router();

router.get('/', isLoggedIn, handleGetCart);
router.get('/all', isLoggedIn, handleGetAllCarts);
router.post('/add', isLoggedIn, isBanned, handleAddToCart);
router.delete('/remove', isLoggedIn, handleRemoveFromCart);

module.exports = router;
