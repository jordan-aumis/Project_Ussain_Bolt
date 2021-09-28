const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
require("./models/dbConfig")
app.use(bodyParser.json());

const gymRoute = require("./routes/gymController")
app.use('/gymnases', gymRoute)
app.listen(8000, ()=> console.log('HELLO WORLD'))



