"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringFormat = void 0;
function stringFormat(format) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    // store arguments in an array
    // let args = arguments;
    // use replace to iterate over the string
    // select the match and check if the related argument is present
    // if yes, replace the match with the argument
    return format.replace(/{([0-9]+)}/g, function (match, index) {
        var _a;
        // check if the argument is present
        var i = Number(match.substring(1, match.length - 1));
        return (_a = params[i]) !== null && _a !== void 0 ? _a : '';
    });
}
exports.stringFormat = stringFormat;
;
//# sourceMappingURL=stringFormat.js.map