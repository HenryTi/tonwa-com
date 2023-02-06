import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { Link } from "react-router-dom";
export class DropdownActions extends React.Component {
    menu;
    button;
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }
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
    handleDocumentClick = (evt) => {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('touchstart', this.handleDocumentClick);
        if (this.state.dropdownOpen === false)
            return;
        //if (this.button && this.button.contains(evt.target)) return;
        if (!this.menu)
            return;
        //if (!this.menu.contains(evt.target)) 
        this.toggle();
    };
    toggle = () => {
        let { dropdownOpen } = this.state;
        dropdownOpen = !dropdownOpen;
        this.setState({ dropdownOpen });
        if (dropdownOpen === true) {
            setTimeout(() => {
                document.addEventListener('click', this.handleDocumentClick);
                document.addEventListener('touchstart', this.handleDocumentClick);
            }, 10);
        }
    };
    render() {
        let { icon, content, actions, isRight, className, containerClass, itemIconClass, itemCaptionClass } = this.props;
        containerClass = containerClass ?? '';
        if (isRight === undefined)
            isRight = true;
        let hasIcon = actions.some(v => {
            if (!v)
                return false;
            return v.icon !== undefined;
        });
        let { dropdownOpen } = this.state;
        //isOpen={this.state.dropdownOpen} toggle={this.toggle}
        let cn = className ?? 'cursor-pointer dropdown-toggle btn btn-sm';
        //if (className) cn += className;
        let cnMenu = 'dropdown-menu';
        if (isRight === true)
            cnMenu += ' dropdown-menu-right';
        if (dropdownOpen === true)
            cnMenu += ' show';
        return _jsxs("div", { className: 'dropdown ' + containerClass, children: [_jsxs("button", { ref: v => this.button = v, className: cn, "data-toggle": "dropdown", "aria-expanded": dropdownOpen, onClick: this.toggle, children: [icon !== null && _jsx("i", { className: 'fa fa-fw fa-' + (icon ?? 'ellipsis-v') }, void 0), content && _jsx("span", { className: "ms-1", children: content }, void 0)] }, void 0), _jsx("div", { ref: v => this.menu = v, className: cnMenu, children: actions.map((v, index) => {
                        if (!v) {
                            return _jsx("div", { className: "dropdown-divider" }, index);
                        }
                        let { icon, caption, action, iconClass, captionClass } = v;
                        if (icon === undefined && caption === undefined)
                            return _jsx("div", { className: "dropdown-divider" }, void 0);
                        let i;
                        if (hasIcon === true) {
                            if (icon !== undefined)
                                icon = 'fa-' + icon;
                            if (!iconClass)
                                iconClass = 'text-info';
                            i = _jsx("i", { className: 'me-2  fa-fw fa ' + icon + ' ' + iconClass, "aria-hidden": true }, void 0);
                        }
                        if (action === undefined) {
                            return _jsxs("h6", { className: "dropdown-header", children: [i, " ", caption] }, void 0);
                        }
                        let content = _jsxs(_Fragment, { children: [i, " ", _jsx("span", { className: captionClass || itemCaptionClass, children: caption }, void 0)] }, void 0);
                        if (typeof action === 'function') {
                            let onMenuItemClick = (evt) => {
                                evt.preventDefault();
                                action(v);
                            };
                            let onTouchStart = (evt) => {
                                action(v);
                            };
                            return _jsx("a", { className: "dropdown-item", href: "#/", onClick: onMenuItemClick, onTouchStart: onTouchStart, children: content }, index);
                        }
                        else {
                            let to = action;
                            return _jsx(Link, { className: "dropdown-item", to: to, children: content }, index);
                        }
                    }) }, void 0)] }, void 0);
    }
}
//# sourceMappingURL=DropDownActions.js.map