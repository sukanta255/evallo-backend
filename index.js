const express = require("express");
// const connectDB = require('./config/db');
const cors = require("cors");
require('dotenv').config();
const eventRoute = require("./routes/eventRoute")


const app = express();
const mongoose = require("mongoose")




 
mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("db connection successful"))
.catch(err=> console.log("db connection fail"))

// connectDB();




app.use(cors()) 
app.use(express.json());
app.use("/api/events", eventRoute)



app.listen(process.env.PORT||5000, ()=> console.log("backend server is running on port: "+ process.env.PORT))