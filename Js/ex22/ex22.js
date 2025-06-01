"use strict";
function isValidWalk(walk) {
    let n = 0, s = 0, w = 0, e = 0;
    if (walk.length > 10 || walk.length % 2 != 0)
        return false;
    for (let x = 0; x < walk.length; x++) {
        if (walk[x] == 'n')
            n++;
        if (walk[x] == 's')
            s++;
        if (walk[x] == 'w')
            w++;
        if (walk[x] == 'e')
            e++;
    }
    return (n === s && w === e);
}
module.exports = isValidWalk;
