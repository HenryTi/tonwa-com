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
exports.ClearErrorsButton = exports.Clear = exports.Submit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var band_1 = require("../band");
var coms_1 = require("../coms");
var res_1 = require("../res");
var fields_1 = require("../fields");
var FormContext_1 = require("./FormContext");
var jotai_1 = require("jotai");
var SubmitItem = /** @class */ (function () {
    function SubmitItem(name, disabled) {
        this.name = name;
    }
    SubmitItem.prototype.reset = function () {
    };
    return SubmitItem;
}());
//const submitProxy = proxy({ readOnly: false, disabled: false });
function Submit(_a) {
    var _b;
    var name = _a.name, className = _a.className, children = _a.children, onSubmit = _a.onSubmit, disabled = _a.disabled;
    var form = (0, FormContext_1.useForm)();
    var _c = (0, jotai_1.useAtom)(form.errorResponse), errorResponse = _c[0], setErrorResponse = _c[1];
    var bandContainer = (0, band_1.useBandContainer)();
    var fields = bandContainer.fields, fieldStates = bandContainer.fieldStates;
    var atomState = (0, react_1.useRef)((0, jotai_1.atom)({ readOnly: false, disabled: disabled })).current;
    var fieldState = (0, jotai_1.useAtomValue)(name ? fieldStates[name] : atomState);
    className = className !== null && className !== void 0 ? className : 'btn btn-primary';
    children = children !== null && children !== void 0 ? children : (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(coms_1.FA, { name: 'share-square-o' }, void 0), " ", res_1.resStrings[res_1.EnumString.string_submit]] }, void 0);
    (0, react_1.useEffect)(function () {
        if (name) {
            fields[name] = new SubmitItem(name, disabled);
            Object.assign(fieldStates[name], { readOnly: undefined, disabled: disabled });
        }
    }, [fields, fieldStates, name, disabled]);
    function onClick(evt) {
        return __awaiter(this, void 0, void 0, function () {
            var props, rule, values, errors, i, ret, _i, ret_1, item, _a, name_1, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        evt.preventDefault();
                        props = form.props;
                        rule = props.rule;
                        values = form.getValues();
                        errors = [];
                        for (i in values) {
                            (0, fields_1.checkRule)(values[i], rule);
                        }
                        if (!(errors.length > 0)) return [3 /*break*/, 1];
                        setErrorResponse({
                            errors: errors,
                            hasError: true
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, onSubmit(form.getValues())];
                    case 2:
                        ret = _b.sent();
                        if (ret) {
                            switch (typeof ret) {
                                default:
                                    if (Array.isArray(ret) === true) {
                                        for (_i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
                                            item = ret_1[_i];
                                            if (!item) {
                                                form.clearAllErrors();
                                            }
                                            else if (Array.isArray(item) === true) {
                                                _a = item, name_1 = _a[0], err = _a[1];
                                                form.setError(name_1, err);
                                            }
                                            else {
                                                form.setError(undefined, ret);
                                            }
                                        }
                                    }
                                    break;
                                case 'string':
                                    form.setError(undefined, ret);
                                    break;
                            }
                        }
                        else {
                            form.clearAllErrors();
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (0, jsx_runtime_1.jsx)(coms_1.ButtonAsync, __assign({ onClick: onClick, disabled: ((_b = fieldState.disabled) !== null && _b !== void 0 ? _b : false) || errorResponse.hasError, className: className }, { children: children }), void 0);
}
exports.Submit = Submit;
function Clear(_a) {
    var className = _a.className, children = _a.children;
    var form = (0, FormContext_1.useForm)();
    function onClick(evt) {
        evt.preventDefault();
        form.clearValues();
    }
    return (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClick, className: className }, { children: children }), void 0);
}
exports.Clear = Clear;
function ClearErrorsButton(_a) {
    var className = _a.className, children = _a.children;
    var form = (0, FormContext_1.useForm)();
    var hasError = (0, jotai_1.useAtomValue)(form.errorResponse).hasError;
    function onClick(evt) {
        evt.preventDefault();
        form.clearAllErrors();
    }
    return (0, jsx_runtime_1.jsx)("button", __assign({ onClick: onClick, disabled: !hasError, className: className }, { children: children }), void 0);
}
exports.ClearErrorsButton = ClearErrorsButton;
//# sourceMappingURL=Buttons.js.map