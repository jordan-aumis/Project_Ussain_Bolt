const express = require('express');
const app = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const  User  = require("../models/users.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
            sexe: req.body.gender,
            age: req.body.age,
            sports: req.body.sports
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

    // verify if already exist
    const user = await User.findOne({ email: req.body.email })
    if(!user)
        return res.status(400).send("Email inexistant")
   
    //Check for valid Password Using Bcrypt
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword)
        return res.status(400).send("Mot de passe invalide")
    
    // give a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN)
    res.header('auth-token', token).send(token)
    
})


module.exports = app