const mongoose = require('mongoose');

const SportifsModel = mongoose.model(
    process.env.DB_NAME,
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
    },
		process.env.ATHLETES
)

module.exports = { SportifsModel };

