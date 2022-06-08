// for(i=1;i<=9;i++) {
//     console.log((i+ '').repeat(i))
// let i = 2;
//
// while (i < 65537) {
//     console.log(i);
//     i *=2;
// // }
// An ice cream seller can't go home until she sells all of her cones.
// 'First write enough code that generates a random number between 50 and 100 representing the amount
// of cones to sell before you start your loop. Inside of the loop your code should generate another random
// number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console
// the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100 complete
// Randomize amount of all cones - fixed complete
// initialize cones remaining f
// initialize cones sold f
// write a while loop that evaluates cones sold with respect to total inventory of cones
// randomize how many cones you sell each time
// store how many cones you have remaining
// conditionally evaluate if you're trying to sell more cones than you have and if you still have cones remaining
// close out the loop if you sell all of your cones
// increase your counter

var allCones = Math.floor(Math.random() * 50) + 50;

let soldCones;
let remaining;
let i = 0;

while (soldCones) {
    console.log('while loop iteration #' + i);
    i++;
}
soldCones = Math.floor(Math.random() * 5) + 1; // goes in loop

//while loop
