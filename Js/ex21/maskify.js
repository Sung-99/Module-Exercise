"use strict";
function maskify(c) {
    const unchangedCount = 4; // Number of characters to keep unchanged
    const limitIndex = c.length - unchangedCount; // Calculate the limit
    return c.split('').map((char, index) => index < limitIndex ? '#' : char).join('');
}

module.exports = maskify;
