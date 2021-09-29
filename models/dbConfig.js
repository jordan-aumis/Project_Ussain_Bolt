const mongoose = require('mongoose');
require('dotenv').config()
const dbName = process.env.DB_NAME
let url = "mongodb://localhost:27017/"+dbName;

mongoose.connect(url, (err)=>{
    if(!err){
        console.log('MONGODB connected to ' + dbName)
    }
    else{
        console.log("Error ", err)
    }
}
)
