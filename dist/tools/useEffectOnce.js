"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectOnce = void 0;
var react_1 = require("react");
function useEffectOnce(effect) {
    var effectFn = (0, react_1.useRef)(effect);
    var destroyFn = (0, react_1.useRef)();
    var effectCalled = (0, react_1.useRef)(false);
    var rendered = (0, react_1.useRef)(false);
    var _a = (0, react_1.useState)(0), refresh = _a[1];
    if (effectCalled.current) {
        rendered.current = true;
    }
    (0, react_1.useEffect)(function () {
        if (!effectCalled.current) {
            destroyFn.current = effectFn.current();
            effectCalled.current = true;
        }
        refresh(1);
        return function () {
            if (rendered.current === false)
                return;
            if (destroyFn.current)
                destroyFn.current();
        };
    }, []);
}
exports.useEffectOnce = useEffectOnce;
;
//# sourceMappingURL=useEffectOnce.js.map