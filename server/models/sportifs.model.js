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
		},
		age: {
			type: Number,
		},
		sports: {
			type: Map,
		}
	}
);

module.exports = mongoose.model(process.env.ATHLETES, SportifsModel, process.env.ATHLETES);


