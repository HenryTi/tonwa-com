"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useT = void 0;
var react_1 = require("react");
function useT() {
    var t = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        t[_i] = arguments[_i];
    }
    var callback = (0, react_1.useCallback)(function (str) {
        for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
            var r = t_1[_i];
            var ret = r(str);
            if (ret)
                return ret;
        }
        return str;
    }, [t]);
    return callback;
}
exports.useT = useT;
//# sourceMappingURL=useT.js.map