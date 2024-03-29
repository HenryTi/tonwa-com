import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { FA } from './FA';
export class IconText extends React.Component {
    render() {
        let { icon, iconClass, text, textClass, onClick } = this.props;
        return _jsxs("div", { className: "py-2", onClick: onClick, children: [_jsx(FA, { className: iconClass, name: icon, fixWidth: true }), _jsx("span", { className: textClass, children: text })] });
    }
}
//# sourceMappingURL=IconText.js.map