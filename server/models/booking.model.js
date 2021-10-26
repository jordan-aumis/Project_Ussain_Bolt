const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookingModel = new Schema(
    {
			_id: {
				type: String,
				required: true,
			},
			IdGymnase: {
				type: Number,
				required: true,
			},
			IdSportif: {
				type: Number,
				required: true,
			},
			Seances: {
				type: Array,
			}
    },
)

module.exports = mongoose.model(process.env.BOOKING, BookingModel, process.env.BOOKING);
