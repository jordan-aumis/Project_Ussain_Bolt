const express = require('express');
const app = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const GymModel = require("../models/gym.model");

/** CRUD */

// READ
app.get("/", (req, res) => {
	GymModel.find((err, data) => {
		if (!err)
			res.send(data);
		else
			console.log("ERREUR ", err);
	});
});


// CREATE
app.post("/new", (req, res) => {
	const newGym = new GymModel({
		_id: ObjectId(),
		IdGymnase: req.body.idGym,
		NomGymnase: req.body.gymName,
		Adresse: req.body.address,
		Ville: req.body.town,
		Surface: req.body.area,
		Seances: req.body.sessions
	});

	newGym.save((err, data) => {
		if (!err)
			res.send(data);
		else
			console.log("ERROR CREATING NEW GYM ", err);
	});
});

// UPDATE
app.put("/update/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		res.status(400).send("Id is not correct :", req.params.id);
	else {
		const updateGym = {
			IdGymnase: req.body.idGym,
			NomGymnase: req.body.gymName,
			Adresse: req.body.address,
			Ville: req.body.town,
			Surface: req.body.area,
			Seances: req.body.sessions
		};

		GymModel.findByIdAndUpdate(
			req.params.id,
			{ $set: updateGym },
			{ new: true },
			(err, data) => {
				if (!err)
					res.send(data);
				else
					console.log("ERROR UPDATE ", err);
			}
		);
	}
});

// DELETE
app.delete("/delete/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		res.status(400).send("Id is not correct :", req.params.id);

	GymModel.findByIdAndRemove(
		req.params.id,
		(err, data) => {
			if (!err)
				res.send(data);
			else
				console.log("ERROR UPDATE ", err);
		}
	);
});

module.exports = app;