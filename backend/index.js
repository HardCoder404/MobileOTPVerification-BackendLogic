const express = require('express');
require('dotenv').config();

require('./Database/db.js');
const app = express();
const PORT = process.env.PORT || 3001
const UserRoute = require('./Routes/UserRoute.js')





app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
});

// To Test: the server is running or not 
app.get('/',(req,res)=>{
    res.send("Server is Live");
});


// Routing define 
app.use('/api',UserRoute);