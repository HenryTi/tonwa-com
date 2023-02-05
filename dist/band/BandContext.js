"use strict";
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
exports.useBand = exports.VBandContext = exports.BandContext = void 0;
var jotai_1 = require("jotai");
var react_1 = __importStar(require("react"));
var tools_1 = require("../tools");
var BandContext = /** @class */ (function () {
    function BandContext(container, memos) {
        this.errors = (0, jotai_1.atom)([]);
        this.readOnly = false;
        this.container = container;
        this.memos = memos;
        this.fields = {};
        container === null || container === void 0 ? void 0 : container.bands.push(this);
    }
    BandContext.prototype.setError = function (name, error) {
        if (this.fields[name] === true) {
            var errors = (0, tools_1.getAtomValue)(this.errors);
            if (error) {
                (0, tools_1.setAtomValue)(this.errors, __spreadArray(__spreadArray([], errors, true), error.map(function (v) { return ({ name: name, error: v }); }), true));
                return true;
            }
            return errors.length > 0;
        }
        return false;
    };
    BandContext.prototype.clearError = function (name) {
        if (this.fields[name] === true) {
            (0, tools_1.setAtomValue)(this.errors, []);
        }
    };
    BandContext.prototype.clearAllErrors = function () {
        (0, tools_1.setAtomValue)(this.errors, []);
    };
    return BandContext;
}());
exports.BandContext = BandContext;
exports.VBandContext = react_1.default.createContext(undefined);
function useBand() {
    return (0, react_1.useContext)(exports.VBandContext);
}
exports.useBand = useBand;
//# sourceMappingURL=BandContext.js.map