const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {UseNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
name: String,
rating: Number,
review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 5,
    review: "This was an having an amazing taste"
});


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person ({
    name: "Muhammad Fahad",
    age: 21
});

person.save();

const kiwi = new Fruit ({
    name: "Kiwi",
    rating: 10,
    review: "amazing taste"
});

const orange = new Fruit ({
    name: "Orange",
    rating: 7,
    review: "Citrus fruit"
});

const banana = new Fruit ({
    name: "Banana",
    rating: 6,
    review: "Juicy"
});

Fruit.insertMany([kiwi,orange,banana],function (err) {
    if (err){
        console.log(err);
    }else {
        console.log("Successfully added all the fruits to fruitsDB!.");
    }
});
