const express = require("express");
const bpdyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/sign-up.html");
});

app.listen(3000, function() {
   console.log("hi"); 
});
