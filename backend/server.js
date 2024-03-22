const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routesUrls = require("./routes/routes");
const cors = require("cors");

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://restaurant:restaurant@cluster0.l53sg2p.mongodb.net/restaurant", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database connected"))
.catch((error) => console.error("Error connecting to database:", error));

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

app.listen(4000, () => console.log("Server is up and running"));
