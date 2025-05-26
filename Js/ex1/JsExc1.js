//Simple exercise from https://www.w3resource.com/javascript-exercises/
//Calculate the area of three triangle types. I just did some add up set to
//look more fittable on html


let EquiConst = document.querySelector("#Eqi");
let RighttConst = document.querySelector("#Rec");
let IsoConst = document.querySelector("#Iso");

let outer_content = document.querySelector(".outer_content")

let NewW = document.querySelectorAll(".Appear");

let sub = document.querySelector(".form-acc");


var radioButtons = document.querySelectorAll('input[type="radio"]');


//use code from Azoof Ahmed on https://stackoverflow.com/questions/77956842/any-idea-about-why-my-background-color-is-not-workin/77957267#77957267
//but added just a simple feature on work in all my 3 elements
function handleChange(e) {
  if(e.target.value === 'equilateral') {
    NewW[0].classList.add("drop");
   
  } else {
    NewW[0].classList.remove("drop");
  }

  if(e.target.value === 'rectangle') {
    NewW[1].classList.add("drop");
  } else {
    NewW[1].classList.remove("drop");
  }               
  
  if(e.target.value === 'isosceles') {
    NewW[2].classList.add("drop");
  } else {
    NewW[2].classList.remove("drop");
  }
}

// trigger handler with all radio buttons
radioButtons.forEach(function(radioButton) {
    
        radioButton.addEventListener('change', handleChange);
    
    
});


//append child to my div appear for put some data in there

let sideEqui = document.createElement("input");
sideEqui.type = "number";
sideEqui.style.width = "150px";
sideEqui.placeholder = "put the triangle base";


let sideRect = document.createElement("input");
sideRect.type = "number";
sideRect.style.width = "150px";
sideRect.placeholder = "put the triangle base";

let side2Rect = document.createElement("input");
side2Rect.type = "number";
side2Rect.style.width = "150px";
side2Rect.placeholder = "put the triangle height";

let sideIsocele= document.createElement("input");
sideIsocele.type = "number";
sideIsocele.style.width = "150px";
sideIsocele.placeholder = "put the triangle base";

let side2Isocele= document.createElement("input");
side2Isocele.type = "number";
side2Isocele.style.width = "150px";
side2Isocele.placeholder = "put the triangle height";


let submittt = document.createElement("button");
submittt.type = "submit";
submittt.style.height = "20px";
submittt.style.width = "70px";
submittt.textContent = "Submit";

let childEquil = NewW[0].appendChild(sideEqui);
let childRightTriangle = NewW[1].appendChild(sideRect);
let childRightTriangleHeight = NewW[1].appendChild(side2Rect);
let childOIsoceleTriangle = NewW[2].appendChild(sideIsocele);
let childOIsoceleTriangleHeight = NewW[2].appendChild(side2Isocele);

sub.appendChild(submittt);




outer_content.appendChild(result);




    
   


sub.addEventListener("submit", (e) => {
    e.preventDefault();
  
  
    
    
    if(EquiConst.checked){
        result.innerHTML = Equilatero(sideEqui.value);
        sideRect.value = ' ';
        side2Rect.value=  ' ';
        side2Isocele.value = ' ';
        sideIsocele.value = ' ';

    }else 
    if(RighttConst.checked){
        result.innerHTML = RightTri(sideRect.value, side2Rect.value);
        
        side2Isocele.value =  ' ';
        sideIsocele.value =  ' ';
        sideEqui.value =  ' ';
    }

    
    
    
  });

function Equilatero(l1){
    return  ((Math.sqrt(((l1*l1)*3)))/4).toFixed(2);
}

function RightTri(l1, l2){
    return  ((l1*l2)/2).toFixed(2);
}


//Not going for the isosceles, it is enough !!! 