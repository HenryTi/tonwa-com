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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTabsLayout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var tonwa_com_1 = require("tonwa-com");
function PageTabsLayout(_a) {
    var tabs = _a.tabs;
    function tabClassName(_a) {
        var isActive = _a.isActive;
        return 'flex-fill mx-1 text-center py-1 ' +
            (isActive === true ? 'text-primary' : 'text-secondary');
    }
    var vTabs = (0, jsx_runtime_1.jsx)("div", __assign({ className: "d-flex container" }, { children: tabs.map(function (v) {
            var to = v.to, caption = v.caption, icon = v.icon;
            return (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, __assign({ to: to, className: tabClassName, replace: true }, { children: [(0, jsx_runtime_1.jsx)(tonwa_com_1.FA, { name: icon }, void 0), " ", (0, jsx_runtime_1.jsx)("br", {}, void 0), caption] }), caption);
        }) }), void 0);
    return (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'd-flex flex-column flex-fill h-100' }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'flex-fill d-flex' }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'invisible' }, { children: vTabs }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'tonwa-bg-gray-3 position-fixed bottom-0 w-100 bottom-top' }, { children: vTabs }), void 0)] }), void 0);
}
exports.PageTabsLayout = PageTabsLayout;
//# sourceMappingURL=PageTabsLayout.js.map