let m = [10, 20, 30];
// console.log(m);
// console.log(m.length);

// let m2 = [10, "abced"];
// console.log(m2);
// m2.push(90);
// console.log(m2);
// console.log(typeof m2); // ARRAY is of type object and is MUTABLE

// for (let i = 0; i < m.length; i++) {
//   console.log(m[i]);
// }

// for (let num of m) {
//  // for of loop
//   console.log(num);
// }

// DESTRUCTURING
let [first, second] = m;
console.log(first, second);

// ! SLICE AND SPLICE

// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = arr1.slice(1, 3); // no change in arr1
// console.log(arr1);
// console.log(arr2);

// arr2 = arr1.splice(1, 3); // it does change the original array
// console.log(arr1);
// console.log(arr2);

// arr1.splice(1,3,"anc",54) , arr1 se element at index 1,2,3 delete krdo or unki jagah anc or 54 daal do , remove 3 elemnt and add these 2

// *SPREAD OPERATOR

//let n = [60, 70];
//m.push(n);  not the ideal way to concatenate two arays
//console.log(m);
let a = [1, 2, 3, 4];
let b = [5, 6];
a.concat(b); // this returns a new array therefore we didn't get the concatenated array in the next print line. we have to store it
console.log(a);

let c = a.concat(b); //  can concatenate multiple arrays
console.log(c);

let d = [a, b, c];
console.log(d);

console.log("SPREAD OPERATOR:");
let e = [...a, ...b];
console.group(e);

let x = ["abc", "lsdjf", "iwqu"];
let y = x.toString(); // converts x to the string : "abc,lsdf,iwqu"
console.log(y);

let q = x.join("-"); // converts the x to a complete string where elements are seperated by -
console.log(q);

console.log(x.includes("abc"));
console.log(x.indexOf("iwqu"));

// ! SORTING
// JS sort by considering every elemt inside it as string and then sort it acc to ASCII value.
x.sort();
console.log(x);

x.reverse(); // reverse the array, here we have first sorted the array and then reversing it so we get in descending order
console.log(x);

let r = [100, 93, 2, 45, 0];
r.sort(); // it didn't sort in ascending order of nunbers it considered every element as indiv string and then compare chr by char
// ASCII value and hence we get unexpected o/p. This rule of sorting is like this in JS because here an array can contain diff types
// of data and to sort diff type of data there has to be one universal rule. So they consodered the string as basis. Its not like other
// languages whre no.s are sorted in ascending order and string as ASCII there the array is homogeneous here it is heterogeneous.
console.log(r);

let s = [10, "amrit", true];
s.sort(); // "10","amrit","true" now compare char by char w.r.t ASCII value
console.log(s);

// how to sort numbers as we want ?

r.sort((a, b) => a - b); // a type of function : (a,b)=>a-b , it compares a and b and if the res of a-b is negative a<b else b>a and
// place them in the corret position accordingly
console.log(r);

// and how to do for descendin : ?
// * either rev the sorted result or use (a-b)=>b-a

// ! FLATTENING AN ARRAY
let g = [10, 20, [30, 40, 50, [60, 70], 80], 90];
let h = g.flat(); // by default flats only one level , either mention the number of flats or write Infinity if don't know how many flats
// to do ?
h = g.flat(Infinity);
console.log(h);

let op = [10, 12, "amrit", true];
op.grade = "A"; // ?? WHAT THE HECK IS THIS, array is stored as object in js , we'll study about object in next lec
console.log(op);
