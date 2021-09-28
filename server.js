const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
app.use(bodyParser());
const password = "L95ddjbTxcZgGpho";
const connectionString = `mongodb+srv://m001-student:m001-student@sandbox.u2tvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
    console.log("Connected to Database");
  })
