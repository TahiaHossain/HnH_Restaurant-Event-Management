const Reservation = require('../models/reservation.model');
const User = require('../models/user.model');
const { successResponse } = require('./response.controller');
const createError = require('http-errors');

const handleCheckAvailablity = async (req, res, next) => {
	try {
		const { date, time, type, people, theme } = req.body;

		let available = true;
		if (time < '10:00' || time > '22:00') {
			available = false;
			return successResponse(res, {
				statusCode: 200,
				message: 'Our working hours are from 10:00 to 22:00',
				payload: {
					available,
				},
			});
		}
		const reservations = await Reservation.find({ date, type, time });

		if (type === 'event') {
			const reservation = await Reservation.find({ date });

			if (reservation.length > 0) available = false;
			return successResponse(res, {
				statusCode: 200,
				message: available ? 'Date available' : 'Date not available',
				payload: {
					available,
					availablePeople: 50,
				},
			});
		}

		if (!reservations.length) {
			const availablePeople = 50;
			if (availablePeople < people) {
				available = false;
			}
			return successResponse(res, {
				statusCode: 200,
				message: available ? 'Space available' : 'Space not available',
				payload: {
					available,
					availablePeople,
				},
			});
		}
		const totalPeople = reservations.reduce((acc, curr) => acc + curr.people, 0);
		const availablePeople = 50 - totalPeople;
		if (availablePeople < people) {
			available = false;
		}
		return successResponse(res, {
			statusCode: 200,
			message: available ? 'Space available' : 'Space not available',
			payload: {
				available,
				availablePeople,
			},
		});
	} catch (error) {
		console.log(error);
		next(error);
	}
};

const handleAddReservation = async (req, res, next) => {
	try {
		const { type, date, time, userId, people, status, theme, occasion, name } = req.body;

		if (!type || !date || !time || !userId || !people) {
			throw createError(400, 'Required fields are missing');
		}

		const reservation = await Reservation.find({ date, time });
		const reservedPeople = reservation.reduce((acc, curr) => acc + curr.people, 0);

		const newReservation = new Reservation({
			type,
			date,
			time,
			userId,
			name,
			people,
			status: status || 'pending',
			theme,
			occasion,
		});

		await newReservation.save();

		return successResponse(res, {
			statusCode: 201,
			message: 'Reservation added successfully',
			payload: { reservation: newReservation },
		});
	} catch (error) {
		console.error(error);
		next(error);
	}
};

const handleGetAllReservations = async (req, res, next) => {
	try {
		const reservations = await Reservation.find();

		return successResponse(res, {
			statusCode: 200,
			message: 'Reservations fetched successfully',
			payload: { reservations: reservations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) },
		});
	} catch (error) {
		console.error(error);
		next(error);
	}
};

const handleUpdateReservation = async (req, res, next) => {
	try {
		const { reservationId, status } = req.query;
		const reservation = await Reservation.findById(reservationId);
		if (!reservation) {
			throw createError(404, 'Reservation not found');
		}
		reservation.status = status;
		await reservation.save();
		return successResponse(res, {
			statusCode: 200,
			message: 'Reservation confirmed successfully',
			payload: { reservation },
		});
	} catch (error) {
		console.error(error);
		next(error);
	}
};

const handleGetReservationsByUser = async (req, res, next) => {
	try {
		const { userId } = req.params;
		console.log(userId);
		const reservations = await Reservation.find({ userId });
		return successResponse(res, {
			statusCode: 200,
			message: 'Reservations fetched successfully',
			payload: { reservations },
		});
	} catch (error) {
		console.error(error);
		next(error);
	}
};

module.exports = { handleCheckAvailablity, handleAddReservation, handleGetAllReservations, handleUpdateReservation, handleGetReservationsByUser };
