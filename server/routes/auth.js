const valuesToArray = require('../utils')
const express = require('express');
const app = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const  User  = require("../models/users.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')



// REGISTER
app.post('/register', async (req, res)=>{

    // verify if already exist
    const alreadyExist = await User.findOne({ email: req.body.email })
    if(alreadyExist)
        res.status(400).send("Un compte existe deja avec cet email")
    else{

        //Hash Password Using Bcrypt
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            _id: ObjectId(),
            email: req.body.email,
            password: hashedPassword,
            nom: req.body.lastName,
            prenom: req.body.firstName,
        })
        try{
            const savedUser = await user.save()
            res.send(savedUser)
        }catch(err){
            res.status(400).send(err)
        }

    }
})

// LOGIN
app.post('/login', async (req, res)=>{
    console.log("TOKEN sECRET", process.env.TOKEN)
    // verify if already exist
    const user = await User.findOne({ email: req.body.email })
    if(!user)
        return res.status(400).send("Email inexistant")

    console.log("PWD", req.body.password)
    //Check for valid Password Using Bcrypt
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword)
        return res.status(400).send("Mot de passe invalide")
    
    // give a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN)
    res.header('auth-token', token).json({'token': token, "user": user})
    
})

//GET ALL USERS
app.get("/", async (req, res)=>{
    User.find((err, data) => {
		if (!err)
			res.send(data)
		else
			console.log("ERREUR ", err);
	});
})

app.put("/update/:id", (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		res.status(400).send("Id is not correct :", req.params.id);
	else {
		const updateGym = {
			nom: req.body.lastName,
			prenom: req.body.firstName,
			email: req.body.email,
		};
		User.findByIdAndUpdate(
			req.params.id,
			{ $set: updateGym },
			{ new: true },
			(err, data) => {
				if (!err)
					res.status(200).send(data);
				else
					console.log("ERROR UPDATE ", err);
			}
		);
	}
});

app.delete("/delete/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        res.status(400).send("Id is not correct :", req.params.id);

    User.findByIdAndRemove(
        req.params.id,
        (err, data) => {
            if (!err)
                res.send(data);
            else
                console.log("ERROR UPDATE ", err);
        }
    );
});

app.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        res.sendStatus(400).send("User does not Exist : ", req.params.id);

		User.findById(
        req.params.id,
        (err, data) => {
            if (!err)
                res.send(data);
            else
                console.log3("ERREUR ", err);
        }
    );
});




module.exports = app