let str = `Hello World`;
console.log(str);
console.log(str.length);
console.log(str[2]);
str[2] = "a";
console.log(str); // as strings are immutable in js , the above line doesn't change naything in the original str

console.log(str.toUpperCase());

// TO SEARCH FOR A SUBSTRING //
console.log(str.indexOf("Wor")); // returns -1 if not present
console.log(str.includes("Wor"));

let s1 = "abc";
let s2 = "xyz";
let s3 = s1 + " " + s2;
console.log(s3);

console.log(10 + "asdf");
console.log(10 + "asdf" + 26);
console.log(10 + 30 + "asdf");

let user = "  Amrit Shukla  ";
console.log(user);
console.log(user.trim());

let names = "agdj,asjh,lskjfd,iewqurh";
console.log(names.split(","));

// DATE
// let now = new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.toDateString());
// console.log(now.toLocaleString());

// let n = Date.n(); its Date.now(), a built in function
let now = Date.now();
console.log(now);
let today = new Date(now);
console.log(today.toString());
