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
exports.BandCom = exports.Band = exports.BandMemos = exports.BandMemo = exports.BandFieldErrors = exports.BandFieldError = exports.BandContentType = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var BandContext_1 = require("./BandContext");
var coms_1 = require("../coms");
var BandContainer_1 = require("./BandContainer");
var jotai_1 = require("jotai");
var BandContentType;
(function (BandContentType) {
    BandContentType[BandContentType["check"] = 0] = "check";
    BandContentType[BandContentType["com"] = 1] = "com";
})(BandContentType = exports.BandContentType || (exports.BandContentType = {}));
;
function BandFieldError(_a) {
    var error = _a.error;
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "px-2 py-1 small" }, { children: [(0, jsx_runtime_1.jsx)(coms_1.FA, { name: "exclamation-circle", className: "me-2 text-danger" }, void 0), (0, jsx_runtime_1.jsx)("span", __assign({ className: "text-info" }, { children: error }), void 0)] }), void 0);
}
exports.BandFieldError = BandFieldError;
function BandFieldErrors(_a) {
    var errors = _a.errors;
    if (!errors)
        return null;
    if (errors.length === 0)
        return null;
    var arr = [];
    var _loop_1 = function (err) {
        var error = err.error;
        var p = arr.findIndex(function (v) { return v === error; });
        if (p < 0)
            arr.push(error);
    };
    for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
        var err = errors_1[_i];
        _loop_1(err);
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: arr.map(function (v, index) { return (0, jsx_runtime_1.jsx)(BandFieldError, { error: v }, index); }) }, void 0);
}
exports.BandFieldErrors = BandFieldErrors;
function BandMemo(_a) {
    var memo = _a.memo;
    if (typeof (memo) === 'string') {
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: "px-2 py-1 small text-muted" }, { children: [(0, jsx_runtime_1.jsx)(coms_1.FA, { name: "caret-right", className: "me-2" }, void 0), memo] }), void 0);
    }
    return memo;
}
exports.BandMemo = BandMemo;
function BandMemos(_a) {
    var memos = _a.memos;
    if (!memos)
        return null;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: memos.map(function (v, index) { return (0, jsx_runtime_1.jsx)(BandMemo, { memo: v }, index); }) }, void 0);
}
exports.BandMemos = BandMemos;
function buildMemosFromChildren(children) {
    var memos = [];
    function each(cs) {
        react_1.default.Children.forEach(cs, function (c) {
            if (!c)
                return;
            if (react_1.default.isValidElement(c) === false)
                return;
            var e = c;
            var props = e.props;
            if (props) {
                var memo = props.memo;
                if (memo && typeof memo === 'string')
                    memos.push(memo);
                each(props.children);
            }
        });
    }
    each(children);
    if (memos.length === 0)
        return;
    return memos;
}
function buildDetailChildren(children) {
    var readOnly = true;
    function each(cs) {
        var ret = [];
        react_1.default.Children.forEach(cs, function (c) {
            if (c.type === react_1.default.Fragment) {
                debugger;
            }
            if (react_1.default.isValidElement(c) === false) {
                ret.push(c);
                return;
            }
            var e = c;
            var props = e.props;
            if (props) {
                var key = e.key;
                var name_1 = props.name, options = props.options;
                if (!(props.readOnly === true))
                    readOnly = false;
                if (name_1) {
                    ret.push((0, jsx_runtime_1.jsx)(Value, { name: name_1, options: options }, key));
                    return;
                }
            }
            if (cs === c)
                return; // 这里应该不可能的，child 居然 = parent
            ret.push(react_1.default.createElement.apply(react_1.default, __spreadArray([e.type, props], each(e), false)));
            return;
        });
        return ret;
    }
    ;
    return [each(children), readOnly];
}
function Value(_a) {
    var name = _a.name, options = _a.options;
    var bandContainer = (0, BandContainer_1.useBandContainer)();
    var defaultNone = bandContainer.defaultNone;
    var val = bandContainer.getValue(name);
    if (options) {
        if (val) {
            var option = options.find(function (v) { return v.value === val; });
            if (option) {
                val = option.label;
            }
        }
    }
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: 'py-2' }, { children: val !== null && val !== void 0 ? val : defaultNone }), void 0);
}
function Band(props) {
    var label = props.label, labelSize = props.labelSize, children = props.children, BandTemplate = props.BandTemplate, sep = props.sep, contentType = props.contentType, toEdit = props.toEdit, rightIcon = props.rightIcon, contentContainerClassName = props.contentContainerClassName;
    var content = children;
    var bandContainer = (0, BandContainer_1.useBandContainer)();
    labelSize = bandContainer.props.labelSize;
    var memos = buildMemosFromChildren(children);
    var band = (0, react_1.useRef)(new BandContext_1.BandContext(bandContainer, memos)).current;
    var errors = (0, jotai_1.useAtomValue)(band.errors);
    if (!bandContainer) {
        return (0, jsx_runtime_1.jsxs)("div", { children: ["Error: ", '<Band /> can only be in <Form />'] }, void 0);
    }
    BandTemplate = BandTemplate !== null && BandTemplate !== void 0 ? BandTemplate : bandContainer.BandTemplate;
    switch (contentType) {
        case BandContentType.com:
            break;
        default:
            if (bandContainer.isDetail === true) {
                switch (contentType) {
                    case BandContentType.check:
                        children = (0, jsx_runtime_1.jsx)("div", __assign({ className: 'py-2' }, { children: children }), void 0);
                        break;
                    default:
                        var _a = buildDetailChildren(children), newChildren = _a[0], readOnly = _a[1];
                        children = (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: newChildren }, void 0);
                        if (readOnly === true)
                            band.readOnly = true;
                        else if (bandContainer.readOnly === true) {
                            band.readOnly = true;
                        }
                        break;
                }
            }
            break;
    }
    return (0, jsx_runtime_1.jsx)(BandContext_1.VBandContext.Provider, __assign({ value: band }, { children: (0, jsx_runtime_1.jsx)(BandTemplate, __assign({ label: label, labelSize: labelSize, errors: errors, memos: band.memos, content: content, sep: sep, contentType: contentType, toEdit: toEdit, rightIcon: rightIcon, contentContainerClassName: contentContainerClassName }, { children: children }), void 0) }), void 0);
}
exports.Band = Band;
function BandCom(props) {
    return (0, jsx_runtime_1.jsx)(Band, __assign({}, props, { contentType: BandContentType.com }, { children: props.children }), void 0);
}
exports.BandCom = BandCom;
//# sourceMappingURL=Band.js.map