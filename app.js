const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {UseNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
name: {
    type: String,
    required: [true, "Please enter the fruit name first."]
},
rating: {
    type: Number,
    min: 1,
    max: 10
},
review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({

    rating: 10,
    review: "Peach was an having an amazing taste"
});

// fruit.save();

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const Person = mongoose.model("Person",personSchema);

// const person = new Person ({
//     name: "Muhammad Fahad",
//     age: 21
// });

// person.save();

// const kiwi = new Fruit ({
//     name: "Kiwi",
//     rating: 10,
//     review: "amazing taste"
// });

// const orange = new Fruit ({
//     name: "Orange",
//     rating: 7,
//     review: "Citrus fruit"
// });

// const banana = new Fruit ({
//     name: "Banana",
//     rating: 6,
//     review: "Juicy"
// });


//inserting many entries at once

// Fruit.insertMany([kiwi,orange,banana],function (err) {
//     if (err){
//         console.log(err);
//     }else {
//         console.log("Successfully added all the fruits to fruitsDB!.");
//     }
// });



//Searching/finding data entries from database

Fruit.find(function (err,fruits) {
    if (err) {
        console.log(err);
    }else {
        fruits.forEach(function (fruit) {
        console.log(fruit.name);
        });
        mongoose.connection.close();

    }
});


//Updating Fruit Name


// Fruit.updateOne({_id: "619f74c9dca409e8454a6eb8"},{name: "Peaches"},function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully added fruit!");
//     }
// });



//Deleting fruit from database

// Fruit.deleteOne({name:"Peaches"},function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully deleted!");
//     }
//     mongoose.connection.close();
// });