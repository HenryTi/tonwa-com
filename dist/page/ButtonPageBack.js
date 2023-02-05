"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonPageBack = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var coms_1 = require("../coms");
function ButtonPageBack(props) {
    var back = props.back, onBack = props.onBack;
    function Back(_a) {
        var Back = _a.Back;
        switch (back) {
            default:
            case 'back': return (0, jsx_runtime_1.jsx)(Back, { icon: 'angle-left' }, void 0);
            case 'none': return (0, jsx_runtime_1.jsx)("div", __assign({ className: "py-2 ms-3" }, { children: "\u00A0" }), void 0);
            case 'close': return (0, jsx_runtime_1.jsx)(Back, { icon: 'close' }, void 0);
        }
    }
    function BackContent(_a) {
        var icon = _a.icon, onClick = _a.onClick;
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: "px-3 py-2 cursor-pointer", onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: icon }, void 0) }), void 0);
    }
    if (onBack) {
        function BackClick(_a) {
            var icon = _a.icon;
            return (0, jsx_runtime_1.jsx)(BackContent, { icon: icon, onClick: onBack }, void 0);
        }
        return (0, jsx_runtime_1.jsx)(Back, { Back: BackClick }, void 0);
    }
    else {
        function BackNav(_a) {
            var icon = _a.icon;
            var navigate = (0, react_router_dom_1.useNavigate)();
            function onClickBack() {
                navigate(-1);
            }
            return (0, jsx_runtime_1.jsx)(BackContent, { icon: icon, onClick: onClickBack }, void 0);
        }
        return (0, jsx_runtime_1.jsx)(Back, { Back: BackNav }, void 0);
    }
}
exports.ButtonPageBack = ButtonPageBack;
//# sourceMappingURL=ButtonPageBack.js.map