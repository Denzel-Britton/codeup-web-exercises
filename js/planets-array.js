
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    // console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets); planets.unshift("Sun")

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets); planets.push("Pluto")

    // console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);
    let doneItem = planets.shift(0);
    console.log(doneItem);
    // console.log('Removing "Pluto" from the end of the planets array.');
    let removedItem = planets.pop(8);
    console.log(removedItem);
    //
    // console.log('Finding and logging the index of "Earth" in the planets array.');
    let  index = planets.indexOf("Earth");
    console.log(index);
    // console.log("Reversing the order of the planets array.");
    console.log(planets);
    console.log("Reversing the planets")
    planets.reverse();
    console.log(planets)
    //
    // console.log("Sorting the planets array.");

    console.log("Sorting the colors array");
    planets.sort();
    console.log(planets)