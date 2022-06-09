[];

["some", "number", "of", "string"]// start at the 0  index  count starts at 0, it has 3 counts  but has 4 elements


//arrays can be assinged to to be the value o f a varible

let favFoods= [ "chicken", "curry", "pizza",]

.
console.log(favFoods)// log s
// if i wanted to know how many elements are in my arry use .length

console.log(favFoods.length)// pizza
// length is a property doesnt need open prorentheis

// now i can talk to sepcific indices to that value form tha one protin of the arraty

.
console.log("hey that looks great" +favFoods[3]);

//iteration ; how do we loop (iterate ) through an array

for(let i = 0;i < favFoods.length ;i++){

    console.log(favFoods[i]); // i will reperstent the number of times the looop has run [ 0,1,2,3] times and log the approriate index
}

// arrays should be name in plurals

//for each loop only with elemment parmaeter
 favFoods.forEach(function (food) {
     console.log(food);
 })
     // .for only with mulitple parameteres
// favFoods.forEach(function (food, index) {
//      console.log('favFoods [' + = index + "] = ''+ food);
//  })

// how would i bring on array into a fucntion

function logsElements(array) {
    array.forEach(function (element) {
        console.log(element);
    })

}
// manuplating arrays

let myCats = ['coco','tod, thursday']

// we need to learn more complicated than beyond what we learned

//push and unshift
