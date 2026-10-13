let count = 0;

let header = document.getElementById("count");
let button1 = document.getElementById("hut");
let button2 = document.getElementById("bot");
let button3 = document.getElementById("moth");

function updateDisplay(){
    header.textContent = count
}

button1.addEventListener("click", function(){
count = count + 1; 
updateDisplay()
})

button2.addEventListener("click", function(){
count = count - 1; 
updateDisplay()
})

button3.addEventListener("click", function(){
count = 0; 
updateDisplay()
})



