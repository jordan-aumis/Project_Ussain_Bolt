const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GymModel = new Schema(
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
)



module.exports = mongoose.model(process.env.GYMNASIUM, GymModel, process.env.GYMNASIUM);