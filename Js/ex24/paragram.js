"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
var isPangram = function (phrase) {
    var set = new Set();
   
    for (var _i = 0, _a = phrase.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (char >= 'a' && char <= 'z') {
            set.add(char);
        }
    }
    return set.size === 26;
};
exports.isPangram = isPangram;
