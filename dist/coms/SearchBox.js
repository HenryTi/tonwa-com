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
exports.SearchBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var tools_1 = require("../tools");
function SearchBox(props) {
    var className = props.className, inputClassName = props.inputClassName, onFocus = props.onFocus, label = props.label, placeholder = props.placeholder, buttonText = props.buttonText, maxLength = props.maxLength, size = props.size;
    var input;
    var button;
    var key = null;
    function onChange(evt) {
        key = evt.target.value;
        if (key !== undefined) {
            key = key.trim();
            if (key === '')
                key = undefined;
        }
        console.log('key = ' + key);
        if (props.allowEmptySearch === true) {
        }
        else {
            button.disabled = key === undefined || key.length === 0;
        }
    }
    function onSubmit(evt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.preventDefault();
                        if (key === null)
                            key = props.initKey || '';
                        if (props.allowEmptySearch !== true) {
                            if (!key)
                                return [2 /*return*/];
                            if (input)
                                input.disabled = true;
                            if (button)
                                button.disabled = true;
                        }
                        return [4 /*yield*/, props.onSearch(key)];
                    case 1:
                        _a.sent();
                        if (input)
                            input.disabled = false;
                        if (button)
                            button.disabled = false;
                        return [2 /*return*/];
                }
            });
        });
    }
    var inputSize;
    switch (size) {
        default:
        case 'sm':
            inputSize = 'input-group-sm';
            break;
        case 'md':
            inputSize = 'input-group-md';
            break;
        case 'lg':
            inputSize = 'input-group-lg';
            break;
    }
    var autoComplete;
    if (tools_1.env.isMobile === true)
        autoComplete = 'off';
    return (0, jsx_runtime_1.jsx)("form", __assign({ className: className, onSubmit: onSubmit, autoComplete: autoComplete }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "input-group " + inputSize }, { children: [label && (0, jsx_runtime_1.jsx)("div", __assign({ className: "input-group-addon align-self-center me-2" }, { children: label }), void 0), (0, jsx_runtime_1.jsx)("input", { ref: function (v) { return input = v; }, onChange: onChange, type: "text", name: "key", onFocus: onFocus, className: 'form-control ' + (inputClassName !== null && inputClassName !== void 0 ? inputClassName : 'border-primary'), placeholder: placeholder, defaultValue: props.initKey, maxLength: maxLength }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "input-group-append" }, { children: (0, jsx_runtime_1.jsxs)("button", __assign({ ref: function (v) { return button = v; }, className: "btn btn-primary", type: "submit", disabled: props.allowEmptySearch !== true }, { children: [(0, jsx_runtime_1.jsx)("i", { className: 'fa fa-search' }, void 0), (0, jsx_runtime_1.jsx)("i", { className: "fa" }, void 0), buttonText] }), void 0) }), void 0)] }), void 0) }), void 0);
}
exports.SearchBox = SearchBox;
//# sourceMappingURL=SearchBox.js.map