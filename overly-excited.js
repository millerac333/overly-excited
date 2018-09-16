// // PART ONE
// // Create an array that contains the words in the sentence
// let sentenceArray1 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let sentenceArray2 =["I", "can", "accept", "failure, ","but", "I", "can't", "accept", "not", "trying"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// const addExcitment = function(theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp
//         let newWord = theWordArray[i];
//         buildMeUp += " " + newWord
//         // Print buildMeUp to the console
//         console.log(buildMeUp);
//     }

// }

// // Invoke the function and pass in the array
// addExcitment(sentenceArray1)
// addExcitment(sentenceArray2)

//  // // PART TWO
// let sentenceArray1 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let sentenceArray2 =["I", "can", "accept", "failure, ","but", "I", "can't", "accept", "not", "trying"];

// const addExcitment = function(theWordArray) {
//     let buildMeUp = ""
//     let specialCharactrer = "!"

//     for (let i = 0; i < theWordArray.length; i++) {
//             if ((i+1) % 3 === 0){
//                 console.log(buildMeUp += `${theWordArray[i]} ${specialCharactrer}`);
//             }
//             else {
//                 buildMeUp += " " + theWordArray[i];
//             console.log(buildMeUp)
//             }
//         }
//     }

// addExcitment(sentenceArray1)
// addExcitment(sentenceArray2)

// // PART THREE
// let sentenceArray1 = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let sentenceArray2 =["I", "can", "accept", "failure, ","but", "I", "can't", "accept", "not", "trying"];

// const addExcitment = function(theWordArray) {
//     let buildMeUp = ""
//     let specialCharactrer = "!"

//     for (let i = 0; i < theWordArray.length; i++) {
//             if ((i+1) % 3 === 0){
//                 console.log(buildMeUp += `${theWordArray[i]} ${specialCharactrer}`);
//                 specialCharactrer += "!"
//             }
//             else {
//                 buildMeUp += " " + theWordArray[i];
//             console.log(buildMeUp)
//             }
//         }
//     }

// addExcitment(sentenceArray1)
// addExcitment(sentenceArray2)

// // // PART THREE, FOUR, AND  ARROW CHALLENGE
let sentenceArray1 = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon"
];
let sentenceArray2 = [
  "I",
  "can",
  "accept",
  "failure, ",
  "but",
  "I",
  "can't",
  "accept",
  "not",
  "trying"
];

const addExcitment = (theWordArray, specialCharacterInput) => {
  let buildMeUp = "";
  let specialCharactrer = specialCharacterInput;

  for (let i = 0; i < theWordArray.length; i++) {
    if ((i + 1) % 3 === 0) {
      console.log((buildMeUp += `${theWordArray[i]} ${specialCharactrer}`));
      specialCharactrer += specialCharacterInput;
    } else {
      buildMeUp += " " + theWordArray[i];
      console.log(buildMeUp);
    }
  }
};

addExcitment(sentenceArray1, "?");
addExcitment(sentenceArray2, "$");
