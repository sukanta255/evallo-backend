// const express = require("express");
// const cors = require("cors");
// require('dotenv').config();
// const eventRoute = require("./routes/eventRoute")

// const app = express();
// const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGO_URL)
// .then(()=> console.log("db connection successful"))
// .catch(err=> console.log("db connection fail"))


// app.use(cors()) 
// app.use(express.json());
// app.use("/api/events", eventRoute)



// app.listen(process.env.PORT||5000, ()=> console.log("backend server is running on port: "+ process.env.PORT))

const express = require("express");
const cors = require("cors");
require('dotenv').config();
const eventRoute = require("./routes/eventRoute");

const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("DB connection successful"))
.catch(err => console.log("DB connection failed:", err));

app.use(cors());
app.use(express.json());
app.use("/api/events", eventRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server is running on port: ${PORT}`));
