"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
var duplicateCount = function (phrase) {
    var setA = new Set();
    var setB = new Set();
    var cont = 0;
    for (var _i = 0, _a = phrase.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            if (setA.has(char)) {
                setB.add(char);
            }
            setA.add(char);
        }
    }
    return setB.size;
};
exports.duplicateCount = duplicateCount;
