# Exercise Simplify a Song Using JavaScript Function

## Learn how to structure and reuse code with JavaScript functions by writing and simplifying a song

## Objective

Build practical experience with JavaScript functions by simplifying repetitive code and practicing the use of the `return` statement Let's put into practice our GitHub and Markdown knowledge as well

## Steps for the excersice

1. Set Up Your Environment
   - Use the Programiz JavaScript Online Compiler to write and test your JavaScript code 
   - Open the compiler and ensure you can run basic JavaScript commands, like `console.log("be Kind")`

2. Write a Song Using JavaScript
   - Choose a song with repetitive lines (e.g., a refrain)
   - Write a `printedSong()` function that uses `console.log()` to print the entire song line by line. Each line should have its own `console.log()` statement
3. Simplify Your Code with a Function
   - Identify the repeated lines in your song (e.g., the refrain).  
   - Create a separate `refrain()` function that uses `console.log()` to print the repeated lines 
   - Update your `song()` function to call `refrain()` wherever the repeated lines occur instead of writing them multiple times. 
4. Refactor Using the `return` Statement
   - Make a second refrain function called `refactoredRefrain()` to use a `return` statement that returns the repeated lines as a single string, separated by the special `\n` character (for line breaks)
   - Make a second song function called `refactoredSong()` function to call `refactoredRefrain()` and log the returned value

## Submission Instructions

- Do not use the same song as I did
- Copy and paste your final code into the Programiz JavaScript Online Compiler
- Verify that it runs without errors and outputs your complete song in the console  
- Create a GitHub repository with a JS File inside
- Copy and paste your code with the three exercises on it
- Add a README.md using Markdown to explain your code
- Push the changes to GitHub
- Submit the GitHub repo link here

### Code Explanation

*javascript the language, I am using.

## In row num. 43 is showing a log of a simple message

`console.log("Be Kind");`

## In row 47-53 you will see the song tittle and the Lyrics-Life's Adventure; serving as metadata for the program

-Underneath the golden sun, Waves are crashing, everyone
Tacos in the sun, life has just begun, On the beach, we're having fun
Pickleball at dawn, travel 'til we're gone, This is how we run
this is life we love! Journey far and roam the skies
Life's adventure never dies, Tacos in the sun
life has just begun, On the beach, we're having fun, Pickleball at dawn
travel 'til we're gone, This is how we run, this is life we love!

## In row 57-72 you will see the this function prints the entire song line by line using

`console.log()`

`function printedSong(){
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
`

## In row 77-84 This function returns the repeated refrain as a single string with line breaks

`factoredRefrain(){
  return("Tacos in the sun, life has just begun,\n"+
        "On the beach, we're having fun,\n"+
        "Pickleball at dawn, travel 'til we're gone,\n"+
        "This is how we run, this is life we love!");
}`

## In row 86-98 This function reuses refactoredRefrain() to avoid repeating the refrain's line multiple times in the code, enhancing maintaninability

`function refactoredSong() {

console.log("Underneath the golden sun,");

console.log("Waves are crashing, everyone,");

console.log(refactoredRefrain());

console.log("Journey far and roam the skies,");

console.log("Life's adventure never dies,");

console.log(refactoredRefrain());}`

### In row 102-105 Call the functions: Prints the entire song w/all lines manually logged

`console.log("Original Song:");
printedSong();`
`console.log("\nRefactored Song");
refactoredSong();`

### In row 110-117 This is another function that prints the refrain line by line, similar to the original approach

```
function refrain() {

console.log("Tacos in the sun, life has just begun");
console.log("On the beach, we're having fun");
console.log("Pickleball at dawn, travel 'til we're gone");
console.log("This is how we run, this is life we love!");}  
    
function refrain();
```

### In row 123-133 This function demostrate how the refrain() function can be called to simplify song printing reducing duplication

```
function song() {
console.log("Underneath the golden sun,");
console.log("Waves are crashing, everyone,");

refrain();
    console.log("Journey far and roam the skies,");
    console.log("Life's adventure never dies,");
    refrain();

}
song();
```

### I will add and  commit the file `README.md`

After finish saving the file, I will follow this steps

```
git add README.md; git commit -m "Add README.md"
git push origin main
```
