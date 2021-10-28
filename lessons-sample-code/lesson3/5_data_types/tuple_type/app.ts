/**
 * app.ts
 */
 //Tuple types express an array where the type of certain elements is known, 
 // but need not be the same. For example, you may want to represent an array 
 // with a string at position 0 and a number at position 1:

 // Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error

//When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

//Note that in TypeScript 1.4, when accessing an element outside the set of 
// known indices, a union type is used instead:
//x[2] = "world"; // Not OK in current TS version
// console.log(x[5].toString()); // OK in TS 1.4, 'string' and 'number' both have toString
// x[6] = true; // Error, boolean isn't number or string