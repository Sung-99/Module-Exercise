let button = document.querySelector('#btn-make');
let numberInputed = document.querySelector("#in-number");
let answerArea = document.querySelector('#answer-solution');

let inputValue  = numberInputed.value;

let answer;
button.addEventListener("click", () =>{
    answer = numberInputed.value-13;

     ( numberInputed.value > 13) ? answerArea.textContent = 2*Math.abs(numberInputed.value-13): answerArea.textContent = 13-numberInputed.value;
    //answerArea.textContent = numberInputed.value; // this work
   // answerArea.textContent = inputValue // *this show nothing
});
    
