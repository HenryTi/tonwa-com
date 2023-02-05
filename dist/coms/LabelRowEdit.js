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
exports.LabelRowEdit = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var jotai_1 = require("jotai");
var tonwa_app_1 = require("tonwa-app");
var FA_1 = require("./FA");
var LabelRow_1 = require("./LabelRow");
function LabelRowEdit(props) {
    var label = props.label, initValue = props.value, onValueChanged = props.onValueChanged, Edit = props.Edit;
    var _a = (0, tonwa_app_1.useModal)(), openModal = _a.openModal, closeModal = _a.closeModal;
    var atomValue = (0, react_1.useMemo)(function () { return (0, jotai_1.atom)(Number(initValue)); }, [initValue]);
    var _b = (0, jotai_1.useAtom)(atomValue), value = _b[0], setValue = _b[1];
    function onClick() {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, openModal((0, jsx_runtime_1.jsx)(OneModal, {}, void 0), 'one modal')];
                    case 1:
                        ret = _a.sent();
                        if (ret !== undefined) {
                            setValue(ret);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return (0, jsx_runtime_1.jsxs)(LabelRow_1.LabelRow, __assign({}, props, { children: [label, (0, jsx_runtime_1.jsx)("div", { children: value }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ onClick: onClick, className: "cursor-pointer p-3" }, { children: (0, jsx_runtime_1.jsx)(FA_1.FA, { name: "pencil", className: "text-info" }, void 0) }), void 0)] }), void 0);
    function OneModal() {
        var _a = (0, tonwa_app_1.useModal)(), openModal = _a.openModal, closeModal = _a.closeModal;
        var _b = (0, jotai_1.useAtom)(atomValue), value = _b[0], setValue = _b[1];
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-3" }, { children: ["modal title value: ", value, (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return setValue(Number(value) + 1); } }, { children: "+" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return openModal((0, jsx_runtime_1.jsx)(ChildModal, {}, void 0)); } }, { children: "open" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return closeModal(value); } }, { children: "return" }), void 0)] }), void 0);
    }
    function ChildModal() {
        var _a = (0, jotai_1.useAtom)(atomValue), value = _a[0], setValue = _a[1];
        var arr = [];
        for (var i = 0; i < 200; i++) {
            arr.push((0, jsx_runtime_1.jsx)("div", { children: i }, i));
        }
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "p-3" }, { children: [value, (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return setValue(Number(value) + 1); } }, { children: "+" }), void 0), "child modal", arr] }), void 0);
    }
}
exports.LabelRowEdit = LabelRowEdit;
//# sourceMappingURL=LabelRowEdit.js.map