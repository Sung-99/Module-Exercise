


function calc_closestValue(x,y){
    return (Math.abs(100 - x) < Math.abs(100 - y)) ? x : y;
}
console.log(calc_closestValue(198,140));

