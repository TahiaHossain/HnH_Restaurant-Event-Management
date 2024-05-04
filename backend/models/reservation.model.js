const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema(
	{
		type: {
			type: String,
			required: [true, 'Reservation type is required'],
		},
		date: {
			type: Date,
			required: [true, 'Reservation date is required'],
		},
		time: {
			type: String,
			required: [true, 'Reservation Time is required'],
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user',
			required: [true, 'User is required'],
		},
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		people: {
			type: Number,
			required: [true, 'Number of people is required'],
		},
		status: {
			type: String,
			default: 'pending',
		},
		theme: {
			type: String,
			required: false,
		},
		occasion: {
			type: String,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('reservation', reservationSchema);
