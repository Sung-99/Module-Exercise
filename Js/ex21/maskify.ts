 function maskify(c:any) {
    const unchangedCount = 4; // Number of characters to keep unchanged
    const limitIndex = c.length - unchangedCount; // Calculate the limit

    return c.split('').map((char:any, index:any) =>  index < limitIndex ? '#' : char).join('');
}