const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SportifsModel = new Schema(

	{
		_id: {
			type: String,
			required: true,
		},
		idSportif: {
			type: Number,
			required: true,
		},
		nom: {
			type: String,
			required: true
		},
		prenom: {
			type: String,
			required: true
		},
		sexe: {
			type: String,
			required: true
		},
		age: {
			type: Number,
			required: true
		},
		sports: {
			type: Map,
			required: true
		}
	}
);

module.exports = mongoose.model(process.env.ATHLETES, SportifsModel, process.env.ATHLETES);


