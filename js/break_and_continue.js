
//Create a file named break_and_continue.js in the js directory.
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// Your output should look like this:

while (true){
    userInput = prompt("Choose a odd number between 1-50")
    if (userInput % 2 === 0){
        alert("The number is even")

    } else if(userInput < 1 ) {
        alert("Number is less than 1");
    } else if (userInput > 50){
        alert("Number is greater than 50")
    }
    else {
        break;
    }
}

console.log("The number to skip is " + userInput)
for (let i = 1; i<= 50; i++) {

    if(userInput == i) {
        console.log("Yikes! Skipping number")
        continue;
    }
    if (i % 2 !== 0){
       console.log("Here is an odd number: " + i)
   }
















}







