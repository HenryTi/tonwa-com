"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroller = void 0;
var scrollAfter = 20; // 20ms之后，scroll执行
var Scroller = /** @class */ (function () {
    function Scroller(el) {
        this.el = el;
    }
    Scroller.prototype.scrollToTop = function () {
        var _this = this;
        setTimeout(function () { return _this.el.scrollTo(0, 0); }, scrollAfter);
    };
    Scroller.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () { return _this.el.scrollTo(0, _this.el.scrollTop + _this.el.offsetHeight); }, scrollAfter);
    };
    return Scroller;
}());
exports.Scroller = Scroller;
//# sourceMappingURL=PageProps.js.map