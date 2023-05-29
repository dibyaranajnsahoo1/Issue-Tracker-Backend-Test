const mongoose = require('mongoose');
const data = 'mongodb+srv://dibya:dibya@cluster0.p2zyhun.mongodb.net/?retryWrites=true&w=majority';
//connect mongoose
mongoose.connect(data);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to  MongoDB ")
});

module.exports=db; 
 //Exports db
