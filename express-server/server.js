const express = require("express");
const app = express();
app.get("/", function(request, response){
    response.send("hello");
});
app.get("/contact", function(req, res){
    res.send("mp.mahesh2200@gmail.com");
});
app.get("/about", function(req, res){
    res.send("You'll never know");
});
app.listen(3000, function(){

});
