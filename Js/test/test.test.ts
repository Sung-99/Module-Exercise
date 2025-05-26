const Test = require('@codewars/test-compat');



function maskify(c:any) {
    const unchangedCount = 4; // Number of characters to keep unchanged
    const limitIndex = c.length - unchangedCount; // Calculate the limit

    return c.split('').map((char:any, index:any) =>  index < limitIndex ? '#' : char).join('');
}


describe("maskify", function(){
  it("should work for some examples", function(){
    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
  });
});
