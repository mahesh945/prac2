//jshint esversion:6
const mongoose = require("mongoose");




mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser : true});

const userSchema = {
    email : String,
    password : String
};

const User = new mongoose.model("User", userSchema);