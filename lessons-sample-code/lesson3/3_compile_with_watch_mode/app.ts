/**
 * app.ts
 */
const firstName: string = "Anna";
const lastName: string = "Smith";

const greet = (firstName, lastName) => {
    return `Good morning, ${firstName} ${lastName}`;
};

console.log(greet(firstName, lastName));
