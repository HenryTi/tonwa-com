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
exports.useBandContainer = exports.VBandContainerContext = exports.BandContainerContext = void 0;
var react_1 = __importStar(require("react"));
var jotai_1 = require("jotai");
var tools_1 = require("../tools");
var defaultStringClassName = 'form-control';
var defaultCheckClassName = 'form-check-input';
var defaultSelectClassName = 'form-select';
var defaultPickClassName = 'form-control';
var defaultRangeClassName = 'form-range';
var BandContainerContext = /** @class */ (function () {
    function BandContainerContext(props) {
        var _this = this;
        this.defaultStringClassName = defaultStringClassName;
        this.defaultCheckClassName = defaultCheckClassName;
        this.defaultSelectClassName = defaultSelectClassName;
        this.defaultPickClassName = defaultPickClassName;
        this.defaultRangeClassName = defaultRangeClassName;
        this.defaultNone = '-';
        this.onValuesChanged = function (values) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _i, i, vNew, vOld;
            var _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = [];
                        for (_b in values)
                            _a.push(_b);
                        _i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        i = _a[_i];
                        vNew = values[i];
                        vOld = this.getValue(i);
                        if (!(vNew !== vOld)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ((_d = (_c = this.props).onValuesChanged) === null || _d === void 0 ? void 0 : _d.call(_c, { name: i, value: vNew, preValue: vOld }, this))];
                    case 2:
                        _e.sent();
                        this.setValue(i, vNew);
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var values = props.values, BandTemplate = props.BandTemplate, readOnly = props.readOnly;
        this.bands = [];
        this.BandTemplate = BandTemplate;
        this.props = props;
        this.readOnly = readOnly;
        this.valueAtoms = {};
        if (values) {
            for (var i in values) {
                this.valueAtoms[i] = (0, jotai_1.atom)(values[i]);
            }
        }
        this.fields = {};
        this.fieldStates = {};
        var each = function (cs) {
            react_1.default.Children.forEach(cs, function (c) {
                if (!c)
                    return;
                if (react_1.default.isValidElement(c) === false)
                    return;
                var e = c;
                var cProps = e.props;
                if (cProps) {
                    var name_1 = cProps.name;
                    if (name_1)
                        _this.fieldStates[name_1] = (0, jotai_1.atom)({ readOnly: false, disabled: false });
                    each(cProps.children);
                }
            });
        };
        each(props.children);
    }
    BandContainerContext.prototype.getValue = function (name) {
        var atom = this.valueAtoms[name];
        if (!atom)
            return undefined;
        return (0, tools_1.getAtomValue)(atom);
    };
    BandContainerContext.prototype.setValue = function (name, val) {
        var a = this.valueAtoms[name];
        if (!a) {
            this.valueAtoms[name] = (0, jotai_1.atom)(val);
        }
        else {
            (0, tools_1.setAtomValue)(a, val);
        }
        var values = {};
        values[name] = val;
        this.onValuesChanged(values);
    };
    BandContainerContext.prototype.getValues = function () {
        var values = {};
        for (var i in this.valueAtoms) {
            values[i] = (0, tools_1.getAtomValue)(this.valueAtoms[i]);
        }
        return values;
    };
    BandContainerContext.prototype.setError = function (name, err) {
        var hasError = false;
        for (var _i = 0, _a = this.bands; _i < _a.length; _i++) {
            var band = _a[_i];
            var bandHasError = band.setError(name, err);
            if (bandHasError === false)
                continue;
            hasError = true;
        }
        return hasError;
    };
    BandContainerContext.prototype.clearError = function (name) {
        for (var _i = 0, _a = this.bands; _i < _a.length; _i++) {
            var band = _a[_i];
            band.clearError(name);
        }
    };
    BandContainerContext.prototype.clearAllErrors = function () {
        for (var _i = 0, _a = this.bands; _i < _a.length; _i++) {
            var band = _a[_i];
            band.clearAllErrors();
        }
    };
    BandContainerContext.prototype.setReadonly = function (name, readOnly) {
        var atomFieldState = this.fieldStates[name];
        var fieldState = (0, tools_1.getAtomValue)(atomFieldState);
        if (fieldState) {
            (0, tools_1.setAtomValue)(atomFieldState, __assign(__assign({}, fieldState), { readOnly: readOnly }));
        }
    };
    BandContainerContext.prototype.setDisabled = function (name, disabled) {
        var atomFieldState = this.fieldStates[name];
        var fieldState = (0, tools_1.getAtomValue)(atomFieldState);
        if (fieldState) {
            (0, tools_1.setAtomValue)(atomFieldState, __assign(__assign({}, fieldState), { disabled: disabled }));
        }
    };
    return BandContainerContext;
}());
exports.BandContainerContext = BandContainerContext;
exports.VBandContainerContext = react_1.default.createContext(undefined);
function useBandContainer() {
    return (0, react_1.useContext)(exports.VBandContainerContext);
}
exports.useBandContainer = useBandContainer;
//# sourceMappingURL=BandContainer.js.map