'use strict';

console.log("Be Kind")

/* the title of the song: Life's adventure

Underneath the golden sun, Waves are crashing, everyone, 
Tacos in the sun, life has just begun, On the beach, we're having fun, 
Pickleball at dawn, travel 'til we're gone, This is how we run, 
this is life we love! Journey far and roam the skies, 
Life's adventure never dies, Tacos in the sun, 
life has just begun, On the beach, we're having fun, Pickleball at dawn, 
travel 'til we're gone, This is how we run, this is life we love!
*/

// the print the song 
function printedSong() {
    console.log("Underneath the golden sun,");
    console.log("Waves are crashing, everyone,");
    console.log("Tacos in the sun, life has just begun,");
    console.log("On the beach, we're having fun,");
    console.log("Pickleball at dawn, travel'till we're gone,");
    console.log("This is how we run, this is life we love!");
    console.log("Journey far and roam the skies,");
    console.log("Life's adventure never dies,");
    console.log("Tacos in the sun, life has just begun,");
    console.log("On the beach, we're having fun");
    console.log("Pickleball at dawn, travel'till we're gone,");
    console.log("This is how we run, this is life we love");

}

//Refactored refrain
function refactoredRefrain() {
    return (
        "Tacos in the sun, life has just begun,\n" +
        "On the beach, we're having fun,\n" +
        "Pickleball at dawn, travel 'til we're gone,\n" +
        "This is how we run, this is life we love!");
}

//Refactored function
function refactoredSong() {
    console.log("Underneath the golden sun,");
    console.log("Waves are crashing, everyone,");
    console.log(refactoredRefrain());
    console.log("Journey far and roam the skies,");
    console.log("Life's adventure never dies,");
    console.log(refactoredRefrain());

}

//call the functions
console.log("Original Song:");
printedSong();
console.log("\nRefactored Song");
refactoredSong();


function refrain() {

    //declare, contains the repeated lyrics as seperated console.log statments.
    console.log("Tacos in the sun, life has just begun");
    console.log("On the beach, we're having fun");
    console.log("Pickleball at dawn, travel 'til we're gone");
    console.log("This is how we run, this is life we love!");

}

function song() {
    // call the refrain function wherever the repeated lines appear.

}

function song() {
    console.log("Underneath the golden sun,");
    console.log("Waves are crashing, everyone,");

    refrain();
    console.log("Journey far and roam the skies,");
    console.log("Life's adventure never dies,");
    refrain();

}
song();

//
