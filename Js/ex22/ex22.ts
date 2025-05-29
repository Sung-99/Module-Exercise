function isValidWalk(walk:any) {

  if (walk.length > 10 || walk.length/2 != 0) return false
  
  if(walk.length <= 10 )return true;
}

module.exports = isValidWalk;