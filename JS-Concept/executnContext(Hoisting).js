// var a = 10;
// var b = 20;
// var s1 = addnumber(a, b);
// console.log(s1);
// function addnumber(n1, n2) {
//   var sum = n1 + n2;
//   return sum;
// }

// console.log(a);
// var a = 9;

// console.log(b);
// let b = 3;

// execution phase is dependent on memory allocation phase
// The execution phase operates on the variables and functions already allocated during the memory creation phase. 

/*
EXECUTION CONTEXT
1. Memory Allocation Phase:

a = <uninitialized> TDZ
b = <uninitialized> TDZ
addNumber = <uninitialized> TDZ (because it is "const", doesn't matter if it is storing function in it)
similary a execution context ismade for function also, everytime it is called with the parameter it is passed with 
result = <uninitialized> TDZ

2. Execution Phase:

a = 10
b = 20
addNumber = {fn code}
result = 30 (fn is called and result is returned)
console.log(result) => 30
*/

// let a = 10;
// const b = 20;
// const addNumbers = function (n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// };
// const result = addNumbers(a, b);
// console.log(result);

// EXECUTION CONTEXT
/*
1. Memory Allocation
a = <uninitialized> TDZ
b = <uninitialized> TDZ
result = <uninitialized> TDZ
addNumber = <uninitialized> TDZ

2. Execution Phase
a=10
b=10
result = return the value from addNumber , but it is unitialized in the 1st step so ERROR
*/

let a = 10;
const b = 20;
const result = addNumbers(a, b);
console.log(result);
const addNumbers = function (n1, n2) {
  const sum = n1 + n2;
  return sum;
};
