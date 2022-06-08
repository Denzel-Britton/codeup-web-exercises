(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
//let names = ['tom','denzel', "mike","kobe"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    //console.log(names.length + " is how many elements in the array " )
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(let i = 0;i < names.length ;i++){
    //
    //     console.log(names[i]); // i will reperstent the number of times the looop has run [ 0,1,2,3] times and log the approriate index
    // }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function(names) {
    //     console.log(names)
    // })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

let numA = ['1', '2', '3', '4', '5'];

function function1(numA) {
    return numA[0];
}
function1(numA)

function function2(numA) {
    return numA[1];
}
function2(numA)

function funtion3(numA) {
    return numA[numA.length - 1];

}
funtion3(numA)
})();