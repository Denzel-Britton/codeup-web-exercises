

// let blacnkObj = {};
//
// console.log(blacnkObj);
// // grouping of info and fuctionality ethat we describe
// //
// let car = {
//     year: 2015,
//     make: "scion",
//     model: "scion"
// }// grouped  3 properties  year, make, model
// ^^ object literal ^
// object vv
// let person = new Object();
//
// person.name = "Daniel";
// person.eyecolor = "Blue";
// person.age = 27;
// person.updateAge = function () {
//     return ++person.age;
// }
//
// console.log(person.age);
// person.updateAge();
// console.log(person.age);

// let customObject = new Object ();

//other ways to build a
// functioning object on declarartion using dot notation
//
// let myHouse = {};
//
// myHouse.color = "very odd gray/blue thing"
// myHouse.sqaureFeet = 1297;
// myHouse.bedrooms = 3
// // forgot to ttell you my adreess
// //lets use array notaion
// myHouse["address"]= "7791 woodchase SA "
// console.log(myHouse);

// how would we grab one part of tht group dat to use?

// lets send the address and not the rest of the information about myHouse
// console.log("Come to my block party " + myHouse.address);
// // las time we had a party people couldnt find it casue w didnt have the color
// console.log("come to my party " + myHouse.address + ' the color is ' + myHouse.color);
// // nesting objects insid of our objects
// myHouse.address = {
//     streetNum: 8646,
//     streetName:"sunny",
//     state : "Texas"
// }
// console.log(myHouse.address);
//
// myHouse.color = ["blue","gray"]
// //so eeven though its nested we can still take our array materual and use it here
// myHouse.color.forEach(function(color:){
//   console.log("Here is a color my house is : " + color);
// })

//this  keyword

// let food = [];
// food=[0] = { name: 'chicken'}
// (function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = new Object();
    person.firstName ="Denzel"
    person.lastName = "Britton"
    console.log(person.firstName);
    console.log(person.lastName);
/**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        person.sayhello = "Hello from " + person.firstName + " " +  person.lastName
        console.log(person.sayhello);
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((shopper) => {
        if (shopper.amount > 200){
            let finalTotal =  shopper.amount-(shopper.amount *.12)
            console.log("hello " + shopper.name + " Your total amount is " + "$" + shopper.amount + ". You qualify for a 12 percent discount "+ "Your new total is " + "$" + finalTotal);
        } else { console.log( "Hello "  + shopper.name + " your total is " + "$180.00")

        }


    })

    /** TODO:
     * Create an array of objects that represent books and
     * store it in a
     * variable named `books`. Each object should have a title
     * and an author
     * property. The author property should be an object with
     * properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let book1 = new Object();
        book1.title = "Dark Knight"
        book1.firstName = "Zack"
        book1.lastName = "Noll"

    let book2 = new Object();
        book2.title = "Fans"
        book2.firstName = "Bee"
        book2.lastName = "Low"

    let book3 = new Object();
        book3.title = "Fight"
        book3.firstName = "Erin"
        book3.lastName = "Yager"

    let book4 = new Object();
        book4.title = "food"
        book4.firstName = "Sasha"
        book4.lastName = "Unkown"

    let book5 = new Object();
        book5.title = "Brain"
        book5.firstName = "Armin"
        book5.lastName = "T"

let books = [book1, book2, book3, book4, book5
]
console.log(books[0].title)
console.log(books[0].firstName)
console.log(books[0].lastName)
/**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
for (let i = 0; i < books.length; i++) {
    console.log(books[i])
    let outputString = `Book # ${i + 1}`;
    title: `${books.title}`
    console.log(outputString);
}      `------------------`;
    /*
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

// })();
