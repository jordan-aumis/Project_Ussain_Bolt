const express = require('express');
const app = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

const SportifsModel = require("../models/sportifs.model");

/** CRUD */

// READ
app.get("/", (req, res) => {
    SportifsModel.find((err, data) => {
        if (!err)
            res.send(data);
        else
            console.log("ERREUR ", err);
    });
});


// CREATE
app.post("/new", (req, res) => {

    const formatId = `'${req.body.id}'`;
    const newSportifs = new SportifsModel({
        _id: ObjectId(),
        IdSportif: req.body.idSportif,
        Nom: req.body.nom,
        Prenom: req.body.prenom,
        Sexe: req.body.sexe,
        Age: req.body.age,
        Sports: req.body.sports,
    });
    console.log("newSportifs", newSportifs._id)
    newSportifs.save((err, data) => {
        if (!err)
            res.send(data);
        else
            console.log("ERROR CREATING NEW ATHLETES ", err);
    });
});

// UPDATE
app.put("/update/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        res.status(400).send("Id is not correct :", req.params.id);
    else {
        const updateSportifs = {
            IdSportif: req.body.idSportif,
            Nom: req.body.nom,
            Prenom: req.body.prenom,
            Sexe: req.body.sexe,
            Age: req.body.age,
            Sports: req.body.sports,
        };

        SportifsModel.findByIdAndUpdate(
            req.params.id,
            { $set: updateSportifs },
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

    SportifsModel.findByIdAndRemove(
        req.params.id,
        (err, data) => {
            if (!err)
                res.send(data);
            else
                console.log("ERROR UPDATE ", err);
        }
    );
});

// ENDPOINTS



// documents Count
app.get('/count', (req, res) => {
    SportifsModel.countDocuments({},
        (err, data) => {
            if (!err)
                res.send(data.toString());
            else
                console.log("ERROR UPDATE ", err);
        }
    );
});

// Find Sportif by sexe
app.get('/sexe/:sexe', (req, res) => {
    SportifsModel.find({ "sexe": req.params.sexe.toLowerCase() },
        (err, dataLowCase) => {
            SportifsModel.find({ "Sexe": req.params.sexe },
                (err, dataUpper) => {
                    res.send(dataLowCase.concat(dataUpper));
                });
        });
});

// Find Sportif by age
app.get('/age/:age', (req, res) => {
    SportifsModel.find({ "Age": parseInt(req.params.age) },
        (err, data) => {
            res.send(data);
        });

});

// getById
app.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        res.sendStatus(400).send("User does not Exist : ", req.params.id);

    SportifsModel.findById(
        req.params.id,
        (err, data) => {
            if (!err)
            {console.log(data)
                res.send(data);}
            else
                console.log("ERREUR ", err);
        }
    );
});

module.exports = app;