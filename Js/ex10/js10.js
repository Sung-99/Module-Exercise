


let inp_Name1 = document.querySelector("#inp-name1");
let inp_Name2 = document.querySelector("#inp-name2");
let compare =  document.querySelector("#compare");
let objec1 = {};
let objec2 = {};


function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
  
    return true;
  }
  
  function isObject(object) {
    return object != null && typeof object === 'object';
  }


compare.onclick = function (){

    objec1 =
    { 
        name: inp_Name1.value,
       
    };
    objec2 =
    { 
        name: inp_Name2.value,
        
    };
    console.log(deepEqual(objec1, objec2));
}  
