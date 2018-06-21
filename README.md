PART ONE
Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

Example output:

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

PART TWO
Adding Conditions to the Loop
Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

Example output:

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

PART THREE
Even More Excited
Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

Example output:

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

PART FOUR
Function Arguments
Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

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