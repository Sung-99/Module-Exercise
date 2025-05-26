let Calc = document.querySelector("button");


let answer = document.querySelector("#Answer");


let date = new Date();
let christmasDate = new Date(2024, 11, 25);


 Calc.onclick = function(){
  answer.textContent = Math.round((christmasDate.getTime()/(1000*3600*24))-(Date.now()/(1000*3600*24)));
}

