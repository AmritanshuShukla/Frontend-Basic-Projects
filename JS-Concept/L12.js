// * map, filter, reduce , set , map //

// for each loop
const arr = [10, 20.6, "Rohit", true];
// one way to iterate is for of loop, now we'll se for each loop
// for each is a mthd.function in the array object (array is a type of object only) and we give it a callack , here "a"
arr.forEach((a) => {
  console.log(a);
});

//printing with index
arr.forEach((a, index) => {
  console.log(a, index);
});

// can also print the complete array simultaneously
arr.forEach((a, index, arr) => {
  console.log(a, index, arr);
});

// ! IMP - it can take 3 arguments , 1st one is mandatory which is used to iterate 2nd and 3rd are for index and complete array , it is convention, we can't
// !chnage their position 2nd place is for index only, 3rd is for complete array only, 1st to iterate. Can give whatever name we want but the function remains same
// i.e
// arr.forEach((arr) => {
//   console.log(arr);
// });
// arr.forEach((a,arr) => {
//   console.log(a,arr);
// });
// arr.forEach((a,arr,index) => {
//   console.log(a,arr,index);
// });
// arr.forEach((a,arr,index) => {
//   console.log(a,index,arr);
// });

// to find the sum of numbers in the array
const arr2 = [10, 20, 30, 40, 50];
let sum = 0;
arr2.forEach((number) => {
  sum = sum + number;
});
console.log(sum);

// sum using for of loop
const a = [10, 20, 30, 40, 50];
// let n = 0;
// for (let x of a) {
//   n = n + x;
//   console.log(x);
// }
// console.log(n);

// FILTER , SEE THE LEC AGAIN FOR MUCH DEEP KNOWLEDGE
// .filter is also a method/function and it returns a new array
const newArr = a.filter((num) => num > 25);
console.log(newArr);

//MAP -> to modify the array and return the updated array 
const newArr2 = a.map((num) => num * 2);
console.log(newArr2);

// REDUCE


// DATA STRUCTURE
// 1. SET
