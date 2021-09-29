const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
require("./models/dbConfig")
app.use(bodyParser.json());

const SportifsRoute = require("./routes/sportivesController")
const gymRoute = require("./routes/gymController")



app.use('/gymnases', gymRoute)
app.use('/sportifs', SportifsRoute)

app.listen(8000, ()=> console.log('HELLO WORLD'))



