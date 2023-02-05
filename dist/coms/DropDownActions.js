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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownActions = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var DropdownActions = /** @class */ (function (_super) {
    __extends(DropdownActions, _super);
    function DropdownActions(props) {
        var _this = _super.call(this, props) || this;
        /*
        componentDidMount() {
            document.addEventListener('click', this.handleDocumentClick);
            document.addEventListener('touchstart', this.handleDocumentClick);
        }
    
        componentWillUnmount() {
            document.removeEventListener('click', this.handleDocumentClick);
            document.removeEventListener('touchstart', this.handleDocumentClick);
        }
        */
        _this.handleDocumentClick = function (evt) {
            document.removeEventListener('click', _this.handleDocumentClick);
            document.removeEventListener('touchstart', _this.handleDocumentClick);
            if (_this.state.dropdownOpen === false)
                return;
            //if (this.button && this.button.contains(evt.target)) return;
            if (!_this.menu)
                return;
            //if (!this.menu.contains(evt.target)) 
            _this.toggle();
        };
        _this.toggle = function () {
            var dropdownOpen = _this.state.dropdownOpen;
            dropdownOpen = !dropdownOpen;
            _this.setState({ dropdownOpen: dropdownOpen });
            if (dropdownOpen === true) {
                setTimeout(function () {
                    document.addEventListener('click', _this.handleDocumentClick);
                    document.addEventListener('touchstart', _this.handleDocumentClick);
                }, 10);
            }
        };
        _this.state = {
            dropdownOpen: false
        };
        return _this;
    }
    DropdownActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, icon = _a.icon, content = _a.content, actions = _a.actions, isRight = _a.isRight, className = _a.className, containerClass = _a.containerClass, itemIconClass = _a.itemIconClass, itemCaptionClass = _a.itemCaptionClass;
        containerClass = containerClass !== null && containerClass !== void 0 ? containerClass : '';
        if (isRight === undefined)
            isRight = true;
        var hasIcon = actions.some(function (v) {
            if (!v)
                return false;
            return v.icon !== undefined;
        });
        var dropdownOpen = this.state.dropdownOpen;
        //isOpen={this.state.dropdownOpen} toggle={this.toggle}
        var cn = className !== null && className !== void 0 ? className : 'cursor-pointer dropdown-toggle btn btn-sm';
        //if (className) cn += className;
        var cnMenu = 'dropdown-menu';
        if (isRight === true)
            cnMenu += ' dropdown-menu-right';
        if (dropdownOpen === true)
            cnMenu += ' show';
        return (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'dropdown ' + containerClass }, { children: [(0, jsx_runtime_1.jsxs)("button", __assign({ ref: function (v) { return _this.button = v; }, className: cn, "data-toggle": "dropdown", "aria-expanded": dropdownOpen, onClick: this.toggle }, { children: [icon !== null && (0, jsx_runtime_1.jsx)("i", { className: 'fa fa-fw fa-' + (icon !== null && icon !== void 0 ? icon : 'ellipsis-v') }, void 0), content && (0, jsx_runtime_1.jsx)("span", __assign({ className: "ms-1" }, { children: content }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ ref: function (v) { return _this.menu = v; }, className: cnMenu }, { children: actions.map(function (v, index) {
                        if (!v) {
                            return (0, jsx_runtime_1.jsx)("div", { className: "dropdown-divider" }, index);
                        }
                        var icon = v.icon, caption = v.caption, action = v.action, iconClass = v.iconClass, captionClass = v.captionClass;
                        if (icon === undefined && caption === undefined)
                            return (0, jsx_runtime_1.jsx)("div", { className: "dropdown-divider" }, void 0);
                        var i;
                        if (hasIcon === true) {
                            if (icon !== undefined)
                                icon = 'fa-' + icon;
                            if (!iconClass)
                                iconClass = 'text-info';
                            i = (0, jsx_runtime_1.jsx)("i", { className: 'me-2  fa-fw fa ' + icon + ' ' + iconClass, "aria-hidden": true }, void 0);
                        }
                        if (action === undefined) {
                            return (0, jsx_runtime_1.jsxs)("h6", __assign({ className: "dropdown-header" }, { children: [i, " ", caption] }), void 0);
                        }
                        var content = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [i, " ", (0, jsx_runtime_1.jsx)("span", __assign({ className: captionClass || itemCaptionClass }, { children: caption }), void 0)] }, void 0);
                        if (typeof action === 'function') {
                            var onMenuItemClick = function (evt) {
                                evt.preventDefault();
                                action();
                            };
                            var onTouchStart = function (evt) {
                                action();
                            };
                            return (0, jsx_runtime_1.jsx)("a", __assign({ className: "dropdown-item", href: "#/", onClick: onMenuItemClick, onTouchStart: onTouchStart }, { children: content }), index);
                        }
                        else {
                            var to = action;
                            return (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ className: "dropdown-item", to: to }, { children: content }), index);
                        }
                    }) }), void 0)] }), void 0);
    };
    return DropdownActions;
}(react_1.default.Component));
exports.DropdownActions = DropdownActions;
//# sourceMappingURL=DropDownActions.js.map