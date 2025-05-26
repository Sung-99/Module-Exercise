//Simple exercise from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
//Calculate the area of three triangle types. I just did some add up set to
//look more fittable on html


let MyString = document.querySelector(".rotate_h1_content");

let output = document.querySelector(".output");





A = MyString.textContent;


setInterval(function() {
    
    output.textContent = A =  A.slice(1,10) + A[0];
},200)
