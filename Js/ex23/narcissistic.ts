 export function narcissistic(value: number): boolean {

  const power = (Array.from(value.toString().split(''))).length;
  let result=0;
 
  Array.from(value.toString().split('')).filter((w)=> result = result + Number(w)**power);
  
  return  result === value;
}

