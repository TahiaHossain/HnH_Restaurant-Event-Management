const express = require('express');
const router = express.Router();

const {
	handleCheckAvailablity,
	handleAddReservation,
	handleGetAllReservations,
	handleUpdateReservation,
	handleGetReservationsByUser,
} = require('../controllers/reservation.controller');
const { isBanned } = require('../middlewares/auth');
router.post('/available', isBanned, handleCheckAvailablity);
router.post('/add', handleAddReservation);
router.get('/all', handleGetAllReservations);
router.put('/update', handleUpdateReservation);
router.get('/user/:id', handleGetReservationsByUser);

module.exports = router;
