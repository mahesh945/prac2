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
const apple = new Fruit({
    name : "Appple",
    rating : 6,
    review : "Sweet and delicious"

});
fruit.save();

const pineapple = new Fruit({
    name : "Pineappple",
    rating : 9,
    review : "Juicy"

});

pineapple.save();

const jackfruit = new Fruit({
    name : "Jackfruit",
    rating : 9,
    review : "Juicy"
});

jackfruit.save();

const mango = new Fruit({
    name : "Mango",
    rating : 7,
    review : "Juicy"
});

mango.save();

const person1 = new Person({
    name : "Mahesh",
    age : 22,
    favFruit : pineapple
});

person1.save();

const person2 = new Person({
    name : "Akash",
    age : 20,
    favFruit : mango
});

person2.save();

Person.deleteMany({name : "john"}, function(err){
    if(err){
        assert.equal(err, null);
        assert.equal(result.result.n);
        assert.equal(result.ops.length);
       
        console.log(err);
    } else{
        console.log("successfuly deleted");
    }
});
