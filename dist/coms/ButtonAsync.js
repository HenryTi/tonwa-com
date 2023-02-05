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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonAsync = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var react_3 = require("react");
function ButtonAsync(props) {
    var _this = this;
    var _a = (0, react_3.useState)(false), isWaiting = _a[0], setIsWaiting = _a[1];
    var children = props.children, onClick = props.onClick;
    var isMounted = (0, react_1.useRef)(false);
    var newOnClick;
    (0, react_2.useEffect)(function () {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    });
    if (onClick) {
        newOnClick = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsWaiting(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, onClick(evt)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        throw err_1;
                    case 4:
                        if (isMounted.current === true) {
                            setIsWaiting(false);
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
    }
    if (isWaiting === true) {
        var className = props.className;
        className = (className !== null && className !== void 0 ? className : '') + ' position-relative';
        var style = {
            zIndex: 30001,
            background: 'rgba(0, 0, 0, 0.3)',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
        };
        return (0, jsx_runtime_1.jsxs)("button", __assign({}, props, { disabled: true, className: className }, { children: [children, (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex position-absolute align-items-center justify-content-center", style: style }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa fa-spinner fa-spin" }, void 0) }), void 0)] }), void 0);
    }
    else {
        return (0, jsx_runtime_1.jsx)("button", __assign({}, props, { onClick: newOnClick }, { children: children }), void 0);
    }
}
exports.ButtonAsync = ButtonAsync;
//# sourceMappingURL=ButtonAsync.js.map