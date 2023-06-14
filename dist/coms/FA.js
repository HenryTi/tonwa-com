import { jsx as _jsx } from "react/jsx-runtime";
export function FA(props) {
    let { name, className, size, spin, fixWidth, border, pull, pulse, rotate, flip, inverse } = props;
    let cn = 'fa';
    if (className)
        cn += ' ' + className;
    if (name)
        cn += ' fa-' + name;
    if (size)
        cn += ' fa-' + size;
    if (fixWidth)
        cn += ' fa-fw';
    if (border)
        cn += ' fa-border';
    if (pull)
        cn += ' fa-pull-' + pull;
    if (spin)
        cn += ' fa-spin';
    if (pulse)
        cn += ' fa-pulse';
    if (rotate)
        cn += ' fa-rotate-' + rotate;
    if (flip)
        cn += ' fa-flip-' + flip;
    if (inverse)
        cn += ' fa-inverse';
    return _jsx("i", { className: cn });
}
export function StackedFA(props) {
    let { className, size, children } = props;
    let cn = 'fa-stack ';
    if (className)
        cn += className + ' ';
    if (size)
        cn += ' fa-' + size + ' ';
    return _jsx("span", { className: cn, children: children });
}
//# sourceMappingURL=FA.js.map