


/*---------------------This were my ex21-------------------------*/

/*---------------Here i worked with commonJS using module.export------------------------
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

/*--------------Here i worked with commonJS using module.export-------------------------
const chai = require("chai");
const isValidWalk = require('../ex22/ex22.js');
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
    assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
    assert.isFalse(isValidWalk(['w']), 'should return false');
    assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

  });
});
------------------------------------------*/
/*----------------------------------------------------------------*/

/*---------------------This were my ex23-------------------------*/

/*-------------Here i worked with type: module using import  // export-------------------------
import { expect } from 'chai';

import { narcissistic } from '../ex23/narcissistic.js';

describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(narcissistic(7)).to.equal(true, '7 is narcissistic');
    expect(narcissistic(153)).to.equal(true, '153 is narcissistic');
    expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic');
  });
});
------------------------------------------*/
/*----------------------------------------------------------------*/

/*---------------------This were my ex24-------------------------*/

/*-------------Here i worked with type: module using import  // export-------------------------
import { assert } from "chai";

import { isPangram } from "../ex24/isPangram.js";

describe("example", function() {
  it("test", function() {
    assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
    assert.strictEqual(isPangram("This is not a pangram."), false);
  });
});
------------------------------------------*/
/*----------------------------------------------------------------*/

/*---------------------This were my ex25-------------------------*/

/*-------------Here i worked with type: module using import  // export-------------------------
// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { duplicateCount } from "../ex25/duplicateCount.js";

describe("example", function() {
  it("test", function() {
    assert.equal(duplicateCount(""), 0);
    assert.equal(duplicateCount("abcde"), 0);
    assert.equal(duplicateCount("aabbcde"), 2);
    assert.equal(duplicateCount("aabBcde"), 2,"should ignore case");
    assert.equal(duplicateCount("Indivisibility"), 1)
    assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  });
});
------------------------------------------*/
/*----------------------------------------------------------------*/