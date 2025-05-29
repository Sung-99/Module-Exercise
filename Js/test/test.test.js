


/*---------------------This were my ex21-------------------------*/

/*---------------------------------------
const Test = require('@codewars/test-compat');
const maskify = require('../ex21/maskify.js');


describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});
------------------------------------------*/
/*----------------------------------------------------------------*/

/*---------------------This were my ex22-------------------------*/

/*---------------------------------------*/
const chai = require("chai");
const isValidWalk = require('../ex22/ex22.js');
const assert = chai.assert;
chai.config.truncateThreshold=0;
/*
describe("Tests", () => {
  it("test", () => {
    some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});*/
 console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));