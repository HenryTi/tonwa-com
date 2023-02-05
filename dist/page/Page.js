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
exports.Page = exports.PagePublic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var PageProps_1 = require("./PageProps");
require("font-awesome/css/font-awesome.min.css");
require("../css/tonwa.css");
var react_1 = require("react");
var ButtonPageBack_1 = require("./ButtonPageBack");
var app_1 = require("app");
var PageSpinner_1 = require("./PageSpinner");
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("jotai/react");
var scrollTimeGap = 100;
var scrollEdgeGap = 30;
// unanthorized page
function PagePublic(props) {
    var children = props.children, header = props.header, back = props.back, right = props.right, footer = props.footer, onClosed = props.onClosed;
    var div = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        function setScroll() {
            var el = div.current;
            if (!el)
                return;
            var elScroll = getScrollableParent(el);
            if (!elScroll)
                return;
            elScroll.onscroll = onScroll;
            window.onscroll = onScroll;
            var bottomTimeSave = 0;
            var topTimeSave = 0;
            var scrollTopSave = elScroll.scrollTop;
            function onScroll(e) {
                var onScroll = props.onScroll, onScrollTop = props.onScrollTop, onScrollBottom = props.onScrollBottom;
                if (onScroll)
                    onScroll(e);
                var el = e.target.scrollingElement;
                if (el.scrollTop > scrollTopSave)
                    scrollTopSave = el.scrollTop;
                var scroller = new PageProps_1.Scroller(el);
                if (el.scrollTop < scrollEdgeGap) {
                    if (onScrollTop !== undefined) {
                        var topTime = new Date().getTime();
                        if (topTime - topTimeSave > scrollTimeGap) {
                            topTimeSave = topTime;
                            onScrollTop(scroller).then(function (ret) {
                                // has more
                                if (ret === true) {
                                    var sh = el.scrollHeight;
                                    var top_1 = 200;
                                    if (top_1 > sh)
                                        top_1 = sh;
                                    el.scrollTop = top_1;
                                }
                            });
                        }
                    }
                }
                if (el.scrollTop + el.offsetHeight > el.scrollHeight - scrollEdgeGap) {
                    if (onScrollBottom !== undefined && el.scrollTop >= scrollTopSave) {
                        ++scrollTopSave;
                        var bottomTime = new Date().getTime();
                        if (bottomTime - bottomTimeSave > scrollTimeGap) {
                            bottomTimeSave = bottomTime;
                            onScrollBottom(scroller);
                        }
                    }
                }
            }
        }
        setScroll();
        return function () {
            onClosed === null || onClosed === void 0 ? void 0 : onClosed();
        };
    });
    if (header || back || right) {
        header = (0, jsx_runtime_1.jsxs)("div", __assign({ className: "d-flex align-items-center" }, { children: [(0, jsx_runtime_1.jsx)(ButtonPageBack_1.ButtonPageBack, __assign({}, props), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "flex-fill" }, { children: header }), void 0), right] }), void 0);
    }
    return (0, jsx_runtime_1.jsx)("div", __assign({ ref: div, className: "tonwa-page" }, { children: (0, jsx_runtime_1.jsxs)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(PageSpinner_1.PageSpinner, {}, void 0) }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: 'tonwa-page-header position-sticky top-0' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'container px-0 d-flex' }, { children: header }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'tonwa-page-content flex-fill d-flex' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'container px-0 d-flex flex-column' }, { children: children }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: 'tonwa-page-footer position-sticky bottom-0' }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: 'container px-0' }, { children: footer }), void 0) }), void 0)] }), void 0) }), void 0);
}
exports.PagePublic = PagePublic;
function Page(props) {
    var uqApp = (0, app_1.useUqApp)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var userAtom = uqApp.user, mustLogin = uqApp.mustLogin, pathLogin = uqApp.pathLogin;
    var user = (0, react_2.useAtomValue)(userAtom);
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    (0, react_1.useEffect)(function () {
        if (mustLogin && !user && pathLogin) {
            navigate(pathLogin, { state: pathname });
        }
    }, [user, mustLogin, pathLogin]);
    if (mustLogin && !user)
        return null;
    return (0, jsx_runtime_1.jsx)(PagePublic, __assign({}, props), void 0);
}
exports.Page = Page;
function isScrollable(ele) {
    var hasScrollableContent = ele.scrollHeight > ele.clientHeight;
    var overflowYStyle = window.getComputedStyle(ele).overflowY;
    var isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;
    return hasScrollableContent && !isOverflowHidden;
}
function getScrollableParent(ele) {
    return (!ele || ele === document.body) ?
        document.body
        :
            (isScrollable(ele) ?
                ele
                :
                    getScrollableParent(ele.parentElement));
}
//# sourceMappingURL=Page.js.map