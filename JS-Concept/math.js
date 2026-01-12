let a = 12.38975;
a.toFixed(1);
console.log(a); // won't update
console.log(a.toFixed(1)); // number of digits after decimal and the output is now string , it return a string , rounded off //

/*
a is a variable of number datatype which is immuntable , so 
let a = 12.38975 is immutable and just writing "a.toFixed(1)" won't change the number a because it is immutable
insted it will return a "string" with the new value we will need to store that string in a variable to get the new expected value
! i.e let c = a.toFixed() or concole.log(a.toFixed())
*/

console.log(a.toPrecision(5)); // five the total of 5 digits (precision) , rounded off

console.log(a.toString()); // converts a to string, return a string

let x = new Number(4);
let y = new Number(4);
console.log(x == y); // x and y both are two diff objects so they point to diff memory location inspite of having same value
// as objects get new memory allocated
let z = new Number(9);
let v = z; // hew v refer to z only so both are equal
console.log(v == z);

// non primitive -> compared on the basis of reference whereas primitive -> compared on the basis of value

// MATH object
console.log(Math.abs(-4));
console.log(Math.LN10);
console.log(Math.SQRT2);
console.log(Math.random()); // it will give value between : [0,1)

// change the range to 0 to 9
console.log(Math.floor(Math.random() * 10));

// add 1 to change the range to [1,10]
console.log(Math.floor(Math.random() * 10) + 1);

// [0 to 6)
console.log(Math.floor(Math.random() * 6));

// console.log(Math.floor(Math.random() * x)+shift) , x is the total no. of outcomes needed no. starting from 0 , shift if any needed
// eg , 15-25 range
console.log(Math.floor(Math.random() * 11) + 15); // 11 is the numbers between 15 to 25

// ! In Short : console.log(Math.floor(Math.random() * (max-min+1))+min);
// OTP : 4 digit number (1000 to 9999)
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
