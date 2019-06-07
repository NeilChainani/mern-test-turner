const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const items = require("./routes/api/titles");
//passing in middleware
app.use(bodyparser.json());
const db = require("./config/keys").mongoURI; //grabs Turners Url
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected ..."))
  .catch(err => console.log(err));
app.use("/api/titles", items);

const port = process.env.port || 5000; //for heroku too
app.listen(port, () => console.log("server started on", port));
