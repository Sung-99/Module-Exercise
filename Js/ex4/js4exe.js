
//Exercise 8 from: https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php


/*
***8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

*** 
*/


/* Answer code */




let Divouter = document.createElement("div");
Divouter.className = "Outer-Quest";
Divouter.id = 'OUTER';
Divouter.style.color = 'white';
Divouter.style.paddingTop = '50px';
Divouter.style.marginTop = '50px';
Divouter.style.paddingLeft = '50px';
Divouter.style.marginLeft = '50px';
Divouter.style.paddingRight = '0px';
Divouter.style.marginRight= '0px';

let Answer = document.createElement("input");
Answer.type = "number";
Answer.style.width = "140px";
Answer.placeholder = 'input a number';


let submittt = document.createElement("button");

submittt.style.height = "20px";
submittt.style.width = "70px";
submittt.textContent = "Submit";

let divExcl = document.createElement("div");
divExcl.className = "delli";
divExcl.id = 'delliite';

document.body.appendChild(Divouter);

Divouter.appendChild(Answer);
Divouter.appendChild(submittt);
Divouter.appendChild(divExcl);



take_Classsname = document.querySelector('#delliite');


let cont = 0;
submittt.addEventListener("click", (e) =>{
    
    
    let randd = Math.floor((Math.random() * (10 - 0) + 0));
    let giveAnswer = document.createElement('p');
    giveAnswer.className = 'pElement';
    divExcl.appendChild(giveAnswer);
    (Answer.value == randd ) ? giveAnswer.textContent = 'You are right': giveAnswer.textContent = 'GOT WRONG' + ' the right number is ' + randd ;
    cont++;
 
   
    if(cont > 10)
    {
    
    while (take_Classsname.firstChild)
    {
        take_Classsname.removeChild(take_Classsname.firstChild);
        
    }
        cont = 0;
       //It is possible to add a btn to do this function, but i'll live it this way
    }
    



});
