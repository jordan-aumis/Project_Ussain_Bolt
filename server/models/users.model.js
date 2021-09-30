const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(

	{
		_id: {
			type: String,
			required: true,
		},
        email: {
            type: String,
			required: true,
        },
        password: {
            type: String,
			required: true,
        },
		nom: {
			type: String,
		},
		prenom: {
			type: String,
		},
		sexe: {
			type: String,
		},
		age: {
			type: Number,
		},
		sports: {
			type: Array,
		}
	}
);

module.exports = mongoose.model('User', userSchema);


