const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required : [true, "No name was given"]
    },
    rating : Number,
    review : String
});

const Fruit = new mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name : "Appple",
    rating : 6,
    review : "Sweet and delicious"

});

fruit.save();
