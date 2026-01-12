// console.log("Hello World!!")
//console.log(afghjds) this will show error as string has to be in " "
let firstName = "Amritanshu";
let lastName = "Shukla";
let fullName = firstName + " " + lastName;
console.log(fullName);

let a = "dfj";
let b = 1234;
let c = "gksdnan";
console.table([a, b, c]);

let name = "Ammu";
let age = 19;
console.log(name, age);

// let and const new variables
let x = 9;
// let x = 3 var with same name will show error

// var is old
var z = 9;
varz = 9; // redeclaration possible no error

// var is functional and scope. while let is block scope

let p = 10;
let q = p;
q = 20;
console.log(p, q); // q mein p ki copy pass hui thats why p ki value same hi rhi

// i.e primitive data types are passed by value whereas non primitive(jisme bracket hita hai) are passed by reference the reason is
// primitive datatpe stores small value so no problem in creating a new copy but non primitve generally stores large data hence large
// memory req and making copy will cost taking so much space. isliye original mein hi change kr dete hai taaki space na lena pde

let tt = 90;
console.log("hello", tt);
