/**
 * app.ts
 */
// TypeScript’s type system allows you to build new types out of existing ones
// using a large variety of operators.
// Defining a Union Type:
/*
A union type is a type formed from two or more other types, representing values that
 may be any one of those types. We refer to each of these types as the union’s members.
*/
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
//printId({ myID: 22342 });
// -- Argument of type '{ myID: number; }' is not assignable to parameter of 
// -- type 'string | number'.
// --Type '{ myID: number; }' is not assignable to type 'number'.
