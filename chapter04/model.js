/*
Model a person using javascript object. It can have properties like firstName, lastName, age..
*/
"use strict";

let ravi = {
    firstName: "Mahammad",
    lastName: "Muneer",
    age: 22,
    address:{
        locality: "Madnooru",
        region: "Puttur",
        state: "Karnatka",
        postalCode: 574223
    },
    email: "muneer@gmail.com",
    jobTitle: "Software Engineer",
    birthDate: "04-09-1998",
    gender: "male",
    socialMediaAccounts: [
        "www.facebook.com/muneer",
        "www.linkedin.com/muneer",
        "www.twitter.com/muneer"
    ],
    
};

/* Model bank account as a javascript object. */
let bankAccount = {
    bankName : "State Bank of India",
    branch : "Puttur",
    ifscCode : "SBIN0004270",
    customerName : "Mahammad Muneer N B",
    accountNumber : 30000000000,
    address : "S/O Abdul Basheer, Madnooru VIL,Kavu Post, Puttur",
    phone : 8100000000,
    dateOfIssue : "11-04-2012",
};

/*
Model state of your favorite computer game as a javascript object.
*/
let game = {
    name : "Dream League Soccer",
    developers : "X2 Games and First Touch Games",
    publishers : "First Touch Games",
    series : "DLS",
    platforms : "iOS and Android",
    genre : "Association Football",
    releaseDate : "May 6th, 2011"
};

/* Model shopping list as an object. Each item in the list is also an object. */
let shoppingList = {
    vegetables : {
        carrot : "1kg",
        onions : "1kg",
        tomatoes : "1kg"
    },
    fruits : {
        banana : "1kg",
        orange : "2kg",
    },
    stationery : [scissor, stapler], 
    bathroom : {
        santoor : 10,
        shampoo : 5,
    },
    miscellaneous : "Mask"
};

/*
Model a credit card as a javascript object.
*/
let creditCard = {
    bank : "State Bank of India",
    type : "Master Card",
    customerName : "Mahammad Muneer",
    cardNumber : "1111 222 3333 4444",
    validity : "till July 2020"
};


/*
Model a car as a javascript object. 
*/
let car = {
    name : "Innova crysta",
    maker : "Toyota",
    fuelType : "Diesel",
    engineDescription : "2.4-litre 147bhp 16V GD Engine",
    engineDisplacement : "2393 cc",
    mileage : "15.1 kms",
    transmissionType : "Manual",
    gears : 5,
    cylinders : 4,
    fuelTankCapacity : "55 litres",
    seatingCapacity : "7 (3 rows)"
};

/*
Model a file in computer as javascript object. 
*/
let file = {
    name : "Eloquent Javascript",
    fileType : "PDF",
    size : "2.15MB",
    location : "D:\ React JS",
    dateCreated : "07-Sep-2020 9:33PM"
};

/*
 Model a recipe of a dish as an object
 */
let omletteRecipe = {
    eggs : 2,
    onions : "1 tbsp - finely chopped",
    tomato : "1 tbsp - finely chopped",
    capsicums : "1 tbsp - finely chopped",
    salt : "1/8 tsp",
    greenChilli : "1 - chopped",
    turmeric : "1 pinch",
    oil : "1 tbsp"
};

 /*
 Model a book as an object
 */
let book = {
    title : "Tharoorosaurus",
    author : "Shashi Tharoor",
    genre : "Non fiction",
    publisher : "Penguin Books",
    prize : "399 INR",
    pages : "336"
};


 /*
 Model a restaurant menu as an object
 */
let restaurantMenu = {
    veg : {
        "Dal Fry" : "Rs 90",
        "Dal Thadka" : "Rs 90",
        "Palak Paneer" : "Rs 180",
        "Paneer Tikka Masala" : "Rs 210"
    },
    nonVeg : {
        "Chicken Hydrabadi" : "Rs 230",
        "Chicken Kadai" : "Rs 230",
        "Chicken Tikka Masala" : "Rs 230",
        "Mutton Kheema Mutter" : "Rs 310",
        "Mutton Kadai" : "Rs 310"
    },
    chinese : {
        "Gobi Manchurian" : "Rs 160",
        "Baby Corn Manchurian" : "Rs 180",
        "Mushroom Manchurian" : "Rs 180"
    }
};