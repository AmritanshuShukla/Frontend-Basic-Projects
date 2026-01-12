// object : key - value pair
let user = {
  name: "david",
  age: 20,
  mail: "david.malan@gmail.com",
  amount: 5500,
};
// can also write key as string : "name":"xxx" , "age": , "mail" , etc..

// *console.log(user);
// *console.log(typeof user);
// *console.log(user.name, user.age, user.mail, user.amount);

// can also access like : user["name"], user["age"] i.e key["property_name as string"]

// CRUD operatn => create  read  update  delete
// we can do all these operation in an object , also we can add new property
user.weight = 70.23; // adding a new property
user.age = 21; // updation

//*console.log(user);

// DELETING a property
delete user.amount; // delete(property_name)
// console.log(user);

// object - > copy br reference
let user2 = user;
user2.weight = 72; // this will update the original user also
// console.log(user2);
// console.log(user);

//  IMP
// *console.log(Object.keys(user));
// *console.log(Object.values(user));
// *console.log(Object.entries(user));

// for in loop
for (let keys in user) {
  console.log(keys, user[keys]); // user.keys is wrong because wo user k ander keys type ki key dhundega which is not there, name,
  //age,height ye saari key hai user k ander keys naam ki koi key nhi hai!!
}

// let n = user.name;
// let a = user.age;
// console.log(n, a);
// instead of this we use the below mthd

//DESTRUCTURING OF OBJECT
let { name, age } = user; // has to be the same name as in object
console.log(name, age);

let { name: userName, age: useAge } = user; // to use some diff name
console.log(userName, useAge);

// for in loop is not recommended much
// sow e do for of loop but it applies on array only. so we covert out object to array
for (let key of Object.keys(user)) {
  console.log(key);
}

for (let value of Object.values(user)) {
  console.log(value);
}

for (let kv of Object.entries(user)) {
  console.log(kv);
}

// also i can use destructuring
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// object can have function inside it
let user3 = {
  name: "dfsa",
  class: 12,
  rollno: 2,
  greeting: function () {
    console.log(`Hello${this.name}`);
    return 99; // function can return an value also, just for example
  },
};

console.log(user3);
user3.greeting(); // won't print the returned value
let bb = user3.greeting(); // this will also store the returned value now
console.log(bb); // and we will now get the returned value also

// nested object
let person = {
  name: "rohit",
  age: 22,
  address: {
    city: "doon",
    state: "uk",
  },
};
console.log(person);
console.log(person.address);
console.log(person.address.city);

// person2 = person , ths is copy by refe any change is p2 or p1 will change in both
let person2 = { ...person }; //this creates a seperate copy of person2 , spread operator SHALLOW COPY
person2.name = "mohan";
console.log(person2);
console.log(person);
// but here is a catch, it works till one level , it doesn't make seperate copy for nested object i.e
//person2.address.city = "delhi"; //will change p1 city also
//console.log(person.address.city);

// !deep copy
person2 = structuredClone(person);
person2.address.city = "delhi"; // it won't chnage person1's city, only p2's city is changed by this
console.log(person.address.city);

// we can also key a numeric value also
let obj = {
  0: "ammu",
  1: "hello",
  2: 12,
  3: 99,
  day: "thursday",
};
//console.log(obj.0); can't access like this because the key is number here
console.log(obj[0]); //either like this
console.log(obj["1"]); // or this

// the above eg is how an array is stored, the array is stored as an object with index number as key and the element at that index
// as value eg ; let arr=[10,20,30]  => arr = {0:10,1:20,3:30}

// !key was confined to be string only but now we can use symbol datatype as a key also

// watch the last 20 min of the oobjects video of ROHIT NEGI
