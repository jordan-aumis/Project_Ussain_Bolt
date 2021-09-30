const express = require('express');
require('dotenv').config()
const app = express();
require("./models/dbConfig")
app.use(express.json());
const verify = require('./routes/verifyToken')

const SportifsRoute = require("./routes/sportivesController")
const gymRoute = require("./routes/gymController")
const auth = require("./routes/auth")

app.use('/auth', auth)
app.use('/gymnases', verify, gymRoute)
app.use('/sportifs', verify, SportifsRoute)

app.listen(8000, ()=> console.log('HELLO WORLD'))



