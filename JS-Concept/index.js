const newElmnt = document.createElement("h2")
// console.log(newElmnt)
newElmnt.textContent = "Ayo!!"
newElmnt.id="sec";
//console.log(newElmnt)

const element = document.getElementById("second")
element.after(newElmnt)
// element.before(newElmnt)

const newElmnt2 = document.createElement("h3")
newElmnt2.textContent=`Holi aa rhi hai`
newElmnt2.id="third"
// newElmnt2.class="e2" , ! caution it should be className not just class
newElmnt2.className="holi"

// an element can have multiple class
// instead of giving manually which is a bit tricky we use classList
newElmnt2.classList.add("festival");
newElmnt2.classList.add("colours");
newElmnt2.classList.remove("colours");

newElmnt2.style.backgroundColor="yellow"
newElmnt2.style.fontSize="20px"

const topHeading = document.getElementById("first")
topHeading.before(newElmnt2)

console.log(newElmnt2);
console.log(newElmnt2.getAttribute("id"));
console.log(newElmnt2.getAttribute("class"));

 
