const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
   var today = new Date;
   var currentDay = today.getDay;

    if(currentDay===6 || today.getDay===0){
       res.render("list", {kindOfDay: weekend});
    }
    else
        res.send("need to work");
    

});

app.post("/", function(req, res){
    var item = req.body.newItem;
    res.redirect("/");
});

app.listen(3000, function() {
   console.log("hi"); 
});