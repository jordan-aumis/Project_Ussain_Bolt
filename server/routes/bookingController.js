const express = require('express');
const app = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const BookingModel = require("../models/booking.model");

/** CRUD */

// READ
app.get("/", (req, res) => {
	BookingModel.find((err, data) => {
		if (!err)
			res.send(data);
		else
			console.log("ERREUR ", err);
	});
});


// CREATE
app.post("/new", (req, res) => {
	const newBookiing = new BookingModel({
		_id: ObjectId(),
		IdGymnase: req.body.idGymnase,
		IdSportif: req.body.idSportif,
        Seances: req.body.seances,
	});

	newBookiing.save((err, data) => {
		if (!err)
			res.send(data);
		else
			console.log("ERROR CREATING NEW Booking ", err);
	});
});

// UPDATE
app.put("/update/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		res.status(400).send("Id is not correct :", req.params.id);
	else {
		const updateBooking = {
			IdGymnase: req.body.idGymnase,
			IdSportif: req.body.idSportif,
			Seances: req.body.seances,
		};

		BookingModel.findByIdAndUpdate(
			req.params.id,
			{ $set: updateBooking },
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

	BookingModel.findByIdAndRemove(
		req.params.id,
		(err, data) => {
			if (!err)
				res.send(data)
			else
				console.log("ERROR UPDATE ", err)
		}
	)
})

// documents Count
app.get('/count', (req, res) => {
	BookingModel.countDocuments({},
		(err, data) => {
			if (!err)
				res.send(data.toString())
			else
				console.log("ERROR UPDATE ", err)
		}
	)
})

// getById
app.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        res.sendStatus(400).send("User does not Exist : ", req.params.id);

		BookingModel.findById(
        req.params.id,
        (err, data) => {
            if (!err)
                res.send(data);
            else
                console.log3("ERREUR ", err);
        }
    );
});

module.exports = app;