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
exports.BandPick = exports.Pick = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var coms_1 = require("../coms");
var band_1 = require("../band");
var res_1 = require("../res");
var tools_1 = require("../tools");
var PickFieldItem = /** @class */ (function () {
    function PickFieldItem(name) {
        this.name = name;
    }
    PickFieldItem.prototype.reset = function () {
    };
    return PickFieldItem;
}());
function Pick(props) {
    var _a, _b;
    var band = (0, band_1.useBand)();
    var bandContainer = (0, band_1.useBandContainer)();
    var _c = (0, react_1.useState)(), value = _c[0], setValue = _c[1];
    (0, react_1.useEffect)(function () {
        var name = props.name;
        if (band)
            band.fields[name] = true;
        bandContainer.fields[name] = new PickFieldItem(name /*, val*/);
    }, [band, bandContainer, props]);
    var formProps = bandContainer.props;
    var name = props.name, className = props.className, onPick = props.onPick, placeholder = props.placeholder, readOnly = props.readOnly, Value = props.Value;
    readOnly = readOnly !== null && readOnly !== void 0 ? readOnly : formProps.readOnly;
    value = value !== null && value !== void 0 ? value : (_a = bandContainer.props.values) === null || _a === void 0 ? void 0 : _a[name];
    var cn = 'd-flex ';
    var vRight;
    var onClick;
    var vValue;
    if (readOnly !== true) {
        cn += ' cursor-pointer ';
        vRight = (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(coms_1.FA, { name: "angle-right" }, void 0) }, void 0);
        onClick = function () {
            return __awaiter(this, void 0, void 0, function () {
                var ret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, onPick(value)];
                        case 1:
                            ret = _a.sent();
                            (0, tools_1.setAtomValue)(bandContainer.getValue(name), ret);
                            setValue(ret);
                            return [2 /*return*/];
                    }
                });
            });
        };
        if (value === null) {
            vValue = null;
        }
        else if (value !== undefined) {
            vValue = Value === undefined ? JSON.stringify(value) : (0, jsx_runtime_1.jsx)(Value, { value: value }, void 0);
        }
        else {
            vValue = placeholder !== null && placeholder !== void 0 ? placeholder : res_1.resStrings[res_1.EnumString.placeholder_pick];
        }
    }
    else {
        vValue = value !== null && value !== void 0 ? value : bandContainer.defaultNone;
    }
    cn += ((_b = className !== null && className !== void 0 ? className : formProps.pickClassName) !== null && _b !== void 0 ? _b : bandContainer.defaultPickClassName);
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: cn, onClick: onClick }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-grow-1" }, { children: vValue }), void 0), vRight] }), void 0);
}
exports.Pick = Pick;
function BandPick(props) {
    return (0, jsx_runtime_1.jsx)(band_1.Band, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Pick, __assign({}, props), void 0) }), void 0);
}
exports.BandPick = BandPick;
//# sourceMappingURL=Pick.js.map