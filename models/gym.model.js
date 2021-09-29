const mongoose = require('mongoose');
const GymModel = mongoose.model(
    process.env.DB_NAME,
    {
			_id: {
				type: String,
				required: true,
			},
			IdGymnase: {
				type: Number,
				required: true,
			},
			NomGymnase: {
				type: String,
				required: true,
			},
			Adresse: {
				type: String,
				required: true,
			},
			Ville: {
				type: String,
				required: true,
			},
			Surface: {
				type: Number,
				required: true,
			},
			Seances: {
				type: Array,
			}
    },
		process.env.GYMNASIUM
)



module.exports = { GymModel };