const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("./models/dbConfig")
app.use(bodyParser());

app.listen(8000, ()=> console.log('HELLO WORLD'))

