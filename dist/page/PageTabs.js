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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTabs = exports.Tab = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var jotai_1 = require("jotai");
var PageSpinner_1 = require("./PageSpinner");
var tools_1 = require("tonwa-com/tools");
function Tab(props) {
    return null;
}
exports.Tab = Tab;
var tabId = 1;
function createTabsFromChildren(children) {
    var tabs = [];
    react_1.default.Children.forEach(children, function (element) {
        if (react_1.default.isValidElement(element) === false)
            return;
        var elType = element.type;
        if (elType === react_1.default.Fragment)
            return;
        if (elType !== Tab)
            return;
        invariant(elType === Tab, "[".concat(typeof elType === "string" ? elType : elType.name, "] is not a <Tab> component. All component children of <PageTabs> must be a <Tab>"));
        var props = element.props;
        var tab = {
            id: tabId++,
            name: props.name,
            tag: props.tag,
            content: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.children }, void 0),
            mountable: (0, jotai_1.atom)(false),
        };
        tabs.push(tab);
    });
    (0, tools_1.setAtomValue)(tabs[0].mountable, true);
    return tabs;
}
function PageTabs(_a) {
    var children = _a.children;
    var tabs = (0, react_1.useRef)(createTabsFromChildren(children)).current;
    function onTabClick(tabCur) {
        var _loop_1 = function (tab) {
            var element = tab.element;
            var cn;
            if (tabCur === tab) {
                cn = 'tonwa-pane active';
                (0, tools_1.setAtomValue)(tab.mountable, true);
                setTimeout(function () {
                    var element = tabCur.element;
                    if (element !== undefined)
                        element.className = cn;
                }, 100);
            }
            else {
                cn = 'tonwa-pane';
            }
            if (element !== undefined) {
                element.className = cn;
            }
        };
        for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
            var tab = tabs_1[_i];
            _loop_1(tab);
        }
    }
    function Tags(_a) {
        var cur = _a.cur;
        var cn = 'nav nav-tabs position-sticky tonwa-band-container justify-content-evenly bg-light';
        return (0, jsx_runtime_1.jsx)("ul", __assign({ className: cn, style: { bottom: '0' } }, { children: tabs.map(function (v, index) { return (0, jsx_runtime_1.jsx)("li", __assign({ className: "nav-item flex-fill align-self-stretch" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ onClick: function () { return onTabClick(v); }, className: 'nav-link h-100 p-0 ' + (index === cur ? 'active' : 'cursor-pointer') }, { children: v.tag }), void 0) }), v.id); }) }), void 0);
    }
    function TabPane(_a) {
        var tab = _a.tab, active = _a.active, index = _a.index;
        //let divRef = useScroll(false);
        var atomMoutable = tab.mountable, content = tab.content;
        var mountable = (0, jotai_1.useAtomValue)(atomMoutable);
        if (mountable === false)
            return null;
        return (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(PageSpinner_1.PageSpinner, {}, void 0) }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ ref: function (div) { return tabs[index].element = div; }, className: 'tonwa-pane ' + (active === index ? 'active' : '') }, { children: [content, (0, jsx_runtime_1.jsx)(Tags, { cur: index }, void 0)] }), void 0) }), void 0);
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tabs.map(function (v, index) { return (0, jsx_runtime_1.jsx)(TabPane, { tab: v, active: 0, index: index }, v.id); }) }, void 0);
}
exports.PageTabs = PageTabs;
function invariant(condition, message) {
    if (!condition)
        throw new Error(message);
}
//# sourceMappingURL=PageTabs.js.map