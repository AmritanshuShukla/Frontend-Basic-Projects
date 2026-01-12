let count=0;
let num = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count = count+1
    num.innerText = count
}

function save(){
    // console.log(count)
    let countDisp = count + " - "
    saveEl.textContent += countDisp
    num.textContent=0
    count=0
}

