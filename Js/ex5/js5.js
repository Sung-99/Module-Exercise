/*Write a JavaScript program to calculate the days left before Christmas.

***https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
*/



let newElementt = document.createElement('div');
let res = document.createElement('div');
let BTNineerNewElement = document.createElement('button');
//let FirsInnerElement = document.createElement('div');

newElementt.className = 'ElementNew';
BTNineerNewElement.className = 'BtnInnerElementNew';

document.body.appendChild(newElementt);
newElementt.appendChild(BTNineerNewElement);
newElementt.appendChild(res)

res.style.textAlign = 'center';
res.style.width = '100%';
res.style.height = '50px';

newElementt.style.width = '100%';
newElementt.style.height = '50px';
newElementt.style.backgroundColor = 'black';
newElementt.style.color = 'white'; 


BTNineerNewElement.textContent = 'Calculate';



BTNineerNewElement.addEventListener("click", () =>{

    res.textContent = getChristims();

});


function getChristims(){


    const today = new Date();
    const cmas = new Date(today.getFullYear(), 11, 25);
    
    
    
    if (today.getMonth() === 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    const one_day = 1000 * 60 * 60 * 24;
    return  Math.ceil((cmas.getTime() - today.getTime()) / (one_day));    
    
}