const express = require("express");
const bpdyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose")

const app = express();
const port = process.env.PORT|| 5000;

const uri = process.env.ATLAS_URI;


app.get("/", function(req, res){
    res.sendFile(__dirname + "/sign-up.html");
});

app.listen(3000, function() {
   console.log("hi"); 
});