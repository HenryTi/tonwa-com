"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = exports.VFormContext = exports.FormContext = void 0;
var jotai_1 = require("jotai");
var react_1 = __importStar(require("react"));
var tools_1 = require("../tools");
var band_1 = require("../band");
var FormContext = /** @class */ (function (_super) {
    __extends(FormContext, _super);
    function FormContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorResponse = (0, jotai_1.atom)({
            hasError: false,
            errors: undefined,
        });
        return _this;
    }
    Object.defineProperty(FormContext.prototype, "isDetail", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    FormContext.prototype.setError = function (name, err) {
        if (!err)
            return;
        var errors;
        var hasError;
        if (Array.isArray(err) === false)
            err = [err];
        if (!name) {
            if (err && err.length > 0) {
                errors = __spreadArray([], err, true);
                hasError = true;
            }
            return;
        }
        hasError = _super.prototype.setError.call(this, name, err);
        (0, tools_1.setAtomValue)(this.errorResponse, { hasError: hasError, errors: errors });
        return hasError;
    };
    FormContext.prototype.clearError = function (name) {
        _super.prototype.clearError.call(this, name);
        (0, tools_1.setAtomValue)(this.errorResponse, {
            hasError: false,
            errors: undefined,
        });
    };
    FormContext.prototype.clearAllErrors = function () {
        _super.prototype.clearAllErrors.call(this);
        (0, tools_1.setAtomValue)(this.errorResponse, {
            hasError: false,
            errors: undefined,
        });
    };
    FormContext.prototype.clearValues = function () {
        for (var i in this.valueAtoms) {
            this.setValue(i, undefined);
        }
        for (var i in this.fields) {
            this.fields[i].reset();
        }
        this.clearAllErrors();
    };
    return FormContext;
}(band_1.BandContainerContext));
exports.FormContext = FormContext;
exports.VFormContext = react_1.default.createContext(undefined);
function useForm() {
    return (0, react_1.useContext)(exports.VFormContext);
}
exports.useForm = useForm;
//# sourceMappingURL=FormContext.js.map