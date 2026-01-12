let x = 20;
let y = 10;
console.log(x > y); // true

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); // first datatype is string convert to string
console.log(1 + 2 + "2"); // add first two int then string encountered so convert to string

let c = 1 + "3";
console.log(typeof c); // confirming that type of c is string

console.log(1 > 3);
let z = 1 > "4";
console.log(typeof z);
console.log(1 > "3"); // converts the string to number, this is not just for string but for any other data type first convert
// to number and then compare

console.log(12 > "a");
console.log("d" > "f");

console.log(NaN == NaN); // gives false , IMP point
