const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//import routes
const recipeRoutes = require("./routes/recipes");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(recipeRoutes);

const DB_URL =
  "mongodb+srv://it21100284:teoy0Z3bgno7ckH9@cluster0.f7in2xd.mongodb.net/?retryWrites=true&w=majority";
 
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => console.log("DB connection error", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
