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
				res.send(data)
			else
				console.log("ERROR UPDATE ", err)
		}
	)
})


// ENDPOINTS

// getById
app.get('/gym/:id', (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		res.sendStatus(400).send("Id is not correct : ", req.params.id)

	GymModel.findById(
		req.params.id,
		(err, data) => {
			if (!err)
				res.send(data)
			else
				console.log("ERREUR ", err)
		}
	)
})

// Gym Average Area
app.get('/average-area', (req, res) =>{
	GymModel.aggregate(
		[
			{
				$group:
					{
						_id: null,
						avg: { $avg: "$Surface" }
					}
			}
		],
		(err, data) => {
			if (!err)
				res.send(data)
			else
				console.log("ERREUR ", err)
		}
 )
})

// documents Count
app.get('/count', (req, res) => {
	GymModel.countDocuments({},
		(err, data) => {
			if (!err)
				res.send(data.toString())
			else
				console.log("ERROR UPDATE ", err)
		}
	)
})

// Number Gym by town
app.get('/count-by-town', (req, res) => {
	GymModel.aggregate(
		[
			{
				$group:
					{
						_id: "$Ville",
						count: {$sum : 1}
					}
			},
			{ $sort : { count : -1 } }
		],
		(err, data) => {
			if (!err)
				res.send(data)
			else
				console.log("ERREUR ", err)
		}
 )
})

// GymArea gt than
app.get('/area-gt-than/:area', (req, res)=>{
	const area = Number(req.params.area)
	GymModel.find({ Surface: {$gt: Number(req.params.area)}}, 
		(err, data) => {
		res.send(data)		
	})
})

// GymArea lt than
app.get('/area-lt-than/:area', (req, res)=>{
	const area = Number(req.params.area)
	GymModel.find({ Surface: {$lt: Number(req.params.area)}}, 
		(err, data) => {
		res.send(data)		
	})
})

// gym given sport and day
app.get('/:day/:sport', (req, res)=>{
	let sport = req.params.sport.split("b").join(' b');
	GymModel.find({ "Seances.Jour": req.params.day.toLowerCase(), "SeancesLibelle": sport }, 
		(err, dataLowCase) => {
			GymModel.find({ "Seances.Jour": req.params.day.charAt(0).toUpperCase() + req.params.day.slice(1), "SeancesLibelle": sport }, 
		(err, dataUpper) => {
		res.send(dataLowCase.concat(dataUpper))
		})	
	})
})

// gym open given a day
app.get('/:day/', (req, res)=>{
	GymModel.find({ "Seances.Jour": req.params.day.toLowerCase()}, 
		(err, dataLowCase) => {
			GymModel.find({ "Seances.Jour": req.params.day.charAt(0).toUpperCase() + req.params.day.slice(1)}, 
		(err, dataUpper) => {
		res.send(dataLowCase.concat(dataUpper))
		})	
	})
})

module.exports = app;