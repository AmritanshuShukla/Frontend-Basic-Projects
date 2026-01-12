// "use strict" // * treat all JS code as newer version
//alert("yoyoy") // * can't directl use alert in node, there is a diff way
//  * meanwhile use in the browser console
let a = 33;
//console.log(typeof a);

let b = "33";
//console.log(typeof b);
let valueInNumber = Number(b);
//console.log(typeof valueInNumber);

let x = "33abc";
//console.log(typeof x);
// hum x ko convert krke dekhte hai number mein.
let convert = Number(x);
//console.log(typeof convert);

/*
!iska type number aa gya but x mein alphabets bhi hai to number mein kese convert
!hua. Actually wo convert hua hi nhi, js ne convert krne ki koshhis kri
!wo convert nhi hua , to NaN bn gya i.e not a number, NaN is basically
!and typeof NaN is number 
*/

//console.log(typeof NaN);