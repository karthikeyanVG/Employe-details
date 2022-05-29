var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoURI = require('./config/config')
const mongoose = require("mongoose");

var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(mongoURI.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

var Users = require("./router/router");

app.use("/v1", Users);


app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
