let obj = {
  name: "sdfhj",
  age: 567,
  9: "qgdwo",
};
console.log(obj);
console.log(obj[9]);
//console.log(obj[age]); won't works , but
console.log(obj["age"]); // this works

function counter() {
  function increment() {
    console.log("I am Increment function");
    return 3;
  }

  return increment; // this means to return the complete function , "reference" of the function
  // return increment(); // returns the returned value only
}

const count = counter();
// console.log(count); // prints the returned value
console.log(count());
// count();

// count and count() ;  whenever the function returns a complete function we can use count() and whenever a function returns
// only a value we use count only
