const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require("mongoose");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser : true});

const ItemsSchema = {
   name : String
};

const Item = mongoose.model("Item", ItemsSchema);

const item1 = new Item ({
   name : "table"
});

const item2 = new Item ({
   name : "chair"
});

const item3 = new Item ({
   name : "desk"
});

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItem, function(err){
   if(err){
      console.log(err);
  } else{
      console.log("successfuly deleted");
  }
});

app.get("/", function(req, res){

   res.render("list", {listTitle : "Today", newListItems : items});
   // var today = new Date;
   // var currentDay = today.getDay;

   //  if(currentDay===6 || today.getDay===0){
   //     res.render("list", {kindOfDay: weekend});
   //  }
   //  else
   //      res.send("need to work");


});

app.post("/", function(req, res){
    var item = req.body.newItem;
    res.redirect("/");
});

app.listen(3000, function() {
   console.log("hi"); 
});