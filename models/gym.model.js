const mongoose = require('mongoose');
console.log(process.env.DB_NAME, process.env.GYMNASIUM)
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
				required: true
			},
			Adresse: {
				type: String,
				required: true
			},
			Ville: {
				type: String,
				required: true
			},
			Surface: {
				type: Number,
				required: true
			},
			Seances: {
				type: Array,
				required: true
			}
    },
		process.env.GYMNASIUM
)

module.exports = { GymModel };