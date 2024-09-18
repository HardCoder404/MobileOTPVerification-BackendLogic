const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)
.then(()=>{
    console.log("Database connected");
})
.catch((error)=>{
    console.log("Database ERROR: ",error.message);
})