const mongoose = require("mongoose");

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extender: false}));
app.use(bodyParser.json());
mongoose
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch(err => console.log(err));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


const users = require("./routes/api/users");

app.get("/",(req,res) => res.send("Social-Q's"));
app.use("/api/users", users);

