// event - moving the mouse, clicking, double click
// event listmer - listening the event
// event action - what action to take when an event is performed

// function handleClick() {
//   const element = document.getElementById("first");
//   element.textContent = "Surprise surprise MF!!";
// }
// but we don't prefer this one

// const element = document.getElementById("first");
// element.onclick = function handleClick() {
//   element.textContent = "surpsrise surprise mf!!";
// };
// we also don't prefer this one
// ! BECAUSE OF OVERWRITING ISSUE , for eg

// BEST METHOD -> addEvent Listner

// const element = document.getElementById("first")
// *element.addEventListener('click',()=>{
// *    element.textContent="hahahaha";
// *})

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// })

// now we changed the event
// element.addEventListener('dblclick',()=>{
//     element.textContent="BRUH!!";
// })

// similarly there are multiple more events

// const element = document.getElementById("first");
// element.addEventListener("click", () => {
//   element.textContent = "I am Clicked!";
// });
// now instead of doing this much for every child we can do it like :

const parent = document.getElementById("parent");
// ! a very imp thing about event listner , The addEventListener method can only be called on a single element.
// ! so we can't apply it to document.getElementsByClassName("parent") returns an HTMLCollection, which is a list of all elements with that class name, not a single element
// ! to fix either apply on class ,loop or use .queySelector
parent.addEventListener("click", (e) => {
  // e = pointer event
  e.target.textContent = "I am Clicked!";
});

// * we also need to know how to remoive event listner.
// use removeEventListner fir this.
// for above case it won't work , i.e 

// parent.removeEventListener("click", (e) => {
//   e.target.textContent = "I am Clicked!";
// });    ,, won't work.


