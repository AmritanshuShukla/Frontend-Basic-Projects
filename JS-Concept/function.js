/*function greeting() {
  console.log("hello world");
  return "THE END";
}
greeting();
*/

/*function addnumber(n1, n2, n3 = 0, n4 = 0) {
  // take n3,n4 = 0 if no there , default value , if passed in th functn call then take take value
  let sum = n1 + n2 + n3 + n4;
  console.log(`Sum is : ${sum}`);
}
addnumber(3, 6);
console.log(greeting());
addnumber(3, 2, 1);
addnumber(3, 2, 1, 5);
*/

// REST OPERATOR (seems like spread operator)
// when no. of arguments are unknown we can use this, it will create an array of parameters
// function addNumbers(...num) {
//   let sum = 0;
//   for (let n of num) {
//     // can use for of loop becoz its array
//     sum += n;
//   }
//   console.log(sum);
// }
// addNumbers(1, 2);
// addNumbers(1, 2, 5);
// addNumbers(1, 2, 32);

// I can call before initialization of the function in ths case as :
// console.log(sum(3,4))
// function sum(n1,n2){
//  return n1+n2;
//}

// anothe way for declaring function :
// let add = function (a, b) {
//   return a + b;
// };
// add(1,2) won't print anything as we are just returning a value fromt he func we need to store that, it ain't printin anything
//console.log(add(9, 1));

// ! in this case we can't call first and initialize later as we did in prev case, will throw error in this case

// ! two more ways to declare function , in total 4 ways

// * ARROR FUNCTION * // "() =>{-----}"
let hello = () => {
  console.log("whatsupp guys");
};
hello();

let addnumber = (n1, n2) => {
  return n1 + n2;
};
console.log(addnumber(2, 3));

// now in arror function if we have just one return statement and nothing else we can write it as :
let add = (m, n) => m + n; // no need to have brackets and also no need of return statement
console.log(add(2, 54));

// we have seen it in our sort operation
// arr.sort((a,b)=>a-b)

// if only 1 parameter is there then no need o bracket also
let square = (m) => m * m;
console.log(square(5));

// arrow function for returning object
let person = () => {
  let user = {
    name: "amrit",
    age: 19,
  };
};
person(); // no console log so nothing is printed
console.log(person()); // no return statement so undefined .

// now we update it
let person2 = () => {
  let user2 = {
    name: "amrit",
    age: 19,
  };
  return user2; // we are returning our object now
};
console.log(person2());

// we can shorten it
let person3 = () => {
  return {
    name: "amrit",
    age: 19,
  };
};
console.log(person3());

// since the function has only one return statement and nothing else we can remove the curly braces as we studied earlier
// ! let person4 = () => { name: "amrit",age: 19};
//* but this (above line) still shows error, just enclose this inside the bracket , i.e

let person4 = () => ({ name: "amrit", age: 19 }); // this bracket thing worls for evry case where we just have one return statemt
// and we can remove return and curly braces , we just write the thing to return, we can enclose that thing in bracket
// eg : let add = (m, n) => (m + n); , we've closed m+n inside the bracket

// *4th type of function
// !IIFE , immediately invoked function
// here the function is called along with its declaration (function_declaration)(), include ( ) at the end
(function greeting() {
  console.log("hello whats upp");
})();

// ? FUNCTION CALLBACK
// we pass a function as an argument inside another function 😮 , crazzzyyyy
// or real life use case jaanne k liye, coder army ki video dekhna ekdum clearly smjh aa jaega kb use krte hai exactly

function one(callback) {
  console.log("i am function one");
  callback();
}

function two() {
  console.log("i am calling function two");
}
function three() {
  console.log("i am calling function three");
}

one(two);
one(three);
