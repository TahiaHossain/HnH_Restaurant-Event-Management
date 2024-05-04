const express = require('express');
const router = express.Router();
const { getUsers, getUserById, deleteUserById, banUserById, banAllUsers, updateUser } = require('../controllers/users.controller');
const { isLoggedIn, isAdmin } = require('../middlewares/auth');

router.get('/get', isLoggedIn, isAdmin, getUsers);
router.get('/get/:id', isLoggedIn, getUserById);
router.delete('/delete/:id', deleteUserById);
router.put('/ban/:id', isLoggedIn, isAdmin, banUserById);
router.get('/ban', banAllUsers);
router.put('/update/:id', isLoggedIn, updateUser);
module.exports = router;
