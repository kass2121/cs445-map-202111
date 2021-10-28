/**
 * app.ts
 */
// Two ways to declare an array type
// 1: Using Square parenthesis
let values: number[] = [12, 24, 48];

// 2: Using a generic array type, Array<elementType>
let fruits: Array<string> = ["Apple", "Banana", "Carrots"];

// We can declare an array of union type, which enables
// the array to contain elements of multiple types specified in the union type
let fruit2: (string | number)[] = ["Apple", 2, 4, "Carrot"];
// Alternative syntax
let fruit3: Array<string | number> = ["Apple", 2, 4, "Carrot"];

