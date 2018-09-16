# Practice
## Book 2 Chapter 9: Javascript Functions 

### Exercise Instructions
### Part 1
For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

Example output:
```
The

The walrus

The walrus danced

The walrus danced through

The walrus danced through the

The walrus danced through the trees

The walrus danced through the trees in

The walrus danced through the trees in the

The walrus danced through the trees in the light

The walrus danced through the trees in the light of

The walrus danced through the trees in the light of the

The walrus danced through the trees in the light of the moon ...
```
Paste the following code into overly-excited.js
```
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp

        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)
```
### Part 2: Adding Conditions to the Loop
Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

Example output:
```
The

The walrus

The walrus danced!

The walrus danced! through

The walrus danced! through the

The walrus danced! through the trees!

The walrus danced! through the trees! in

The walrus danced! through the trees! in the

The walrus danced! through the trees! in the light!

The walrus danced! through the trees! in the light! of

The walrus danced! through the trees! in the light! of the

The walrus danced! through the trees! in the light! of the moon! ...
```

### Part 3: Even More Excited
Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

Example output:
```
The

The walrus

The walrus danced!

The walrus danced! through

The walrus danced! through the

The walrus danced! through the trees!!

The walrus danced! through the trees!! in

The walrus danced! through the trees!! in the

The walrus danced! through the trees!! in the light!!!

The walrus danced! through the trees!! in the light!!! of

The walrus danced! through the trees!! in the light!!! of the

The walrus danced! through the trees!! in the light!!! of the moon!!!! ...
```

### Part 4: Function Arguments
Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.
```
// I want to use a question mark
addExcitement(sentence, "?");

Example output:

The

The walrus

The walrus danced?

The walrus danced? through

The walrus danced? through the

The walrus danced? through the trees??

etc..
```

### Part : Another Sentence
Now you should define another variable that will hold an array of different words than your existing sentence. Perhaps name the variable betterSentence, or nextSentence.

Invoke your function for a second time, passing in the new sentence variable and a different special character.
```
// Example
addExcitement(nextSentence, "&");
```

### Challenge: Arrow Functions
See if you can rewrite addExcitement using arrow syntax.
```
// Complete this arrow function template to make your
// function work with it.
let addExcitement = () => { };
```

### Run Program
1. launch in code editor
2. run in browswer
3. view console in developer tools 
