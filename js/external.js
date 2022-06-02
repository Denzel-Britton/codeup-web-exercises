"use strict";
console.log('Hello from external JavaScript!')
alert("Welcome to my Website!.");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.//


var userInput = prompt('What is your favorite color?:');
console.log('The user entered: ' + userInput);
alert("Great, "  + userInput + " that's mine too!.")


var userInput = prompt('How many movies would you like to rent today?:');
console.log('The user entered: ' + userInput);
alert("Awesome price of movies per day is $3.00 ")


var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;

let totalGoogle = prompt('How many hours did you work this week?:')

let totalAmazon = prompt('How many hours did you work this week?:')

let totalFacebook = prompt('How many hours did you work this week?:')

let sumGoogle = googlePay * totalGoogle; //could create a variable to get the total

alert('Cool here is what im seeing, you will earn $'+ sumGoogle + "from working at Google. You'll earn $" + (totalAmazon +
    'totalGoolge'))


var userInput = prompt('Does your class schedule conflict with this class?:');
console.log('The user entered: ' + userInput);
alert("You will not be enrolled if class is already full, or if this class conflicts with your schedule.If none of those apply you are now enrolled!")


let moreThanTwo = confirmm("DO you have more than two items in your cart?")

let offerStillValid = confirm("Is the offer on tge product still valid?")

let premiumMember = confirm("Are your a premium member?")

alert("Welocome looks like you brought me a cart? From what you told me its is + (moreThanTwo && offerStillValid || premiumMember) + that you get a cool hat and a discount today")
