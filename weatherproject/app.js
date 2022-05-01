const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res){
    res.send("hello");

    https.get(url, function(response){
        console.log(response.statusCode);
    })
});




app.listen(3000, function(){
});