let stringg = document.querySelector('input');


const p = document.querySelector('.example-text');

// This is the modern way to set up event handlers:
document.querySelector('button').addEventListener("click", function(){
  // First, clean up leading or trailing spaces from the whole string
  let x =stringg.value.trim();  
  
  // Split the string at newlines into an array,  then loop over that array and 
  // trim each item within the array and return that item into the new array
  // returned by the map() function.
  let y = x.split(',').map(function(item, idx){
    let obj = {};  

    obj[idx] = item.trim();
    return obj;
  });
  console.log(console.table(y));
});
