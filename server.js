const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

app.use(bodyParser());

var url = "mongodb://localhost:27017/";
MongoClient.connect(url)
  .then(client => {
    const db = client.db("gym")
    
    app.get('/gymnases', (req, res) => {
      db.collection('Gymnases').find().toArray()
        .then(results => {
          res.send(results)
        })
        .catch(console.error)
    })

    app.listen(3000, () => {
      console.log("listening on 3000")
    })

})
