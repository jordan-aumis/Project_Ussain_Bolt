const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GymModel = new Schema(
    {
			_id: {
				type: String,
			},
			IdGymnase: {
				type: Number,
			},
			NomGymnase: {
				type: String,
			},
			Adresse: {
				type: String,
			},
			Ville: {
				type: String,
			},
			Surface: {
				type: Number,
			},
			Seances: {
				type: Array,
			}
    },
)

module.exports = mongoose.model(process.env.GYMNASIUM, GymModel, process.env.GYMNASIUM);
