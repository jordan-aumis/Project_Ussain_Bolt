const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SportifsModel = new Schema(

	{
		_id: {
			type: String,
			required: true,
		},
		idUser: {
			type: String,
		},
		Nom: {
			type: String,
			required: true
		},
		Prenom: {
			type: String,
			required: true
		},
		Sexe: {
			type: String,
		},
		Age: {
			type: Number,
		},
		Sports: {
			type: Map,
		}
	}
);

module.exports = mongoose.model(process.env.ATHLETES, SportifsModel, process.env.ATHLETES);


