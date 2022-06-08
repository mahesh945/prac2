const express = require("express");
const app = express();
app.get("/", function(request, response){
    response.send("hello");
});
app.get("/contact", function(req, res){
    res.send("mp.mahesh2200@gmail.com");
});
app.get("/profiles", function(req, res){
    res.send("mp.mahesh2200@gmail.com");
});
app.get("/about", function(req, res){
    res.send("You'll never know");
});
app.get("/secrets", function(req, res){
    res.send("why would I say that?");
});
app.get("/hobbies", function(req, res){
    res.send("Will be included soon. Keep checking...");
});
   
app.listen(3000, function(){

});
