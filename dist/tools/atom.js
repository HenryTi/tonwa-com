"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAtomValue = exports.getAtomValue = void 0;
var jotai_1 = require("jotai");
var jotaiStore = (0, jotai_1.getDefaultStore)();
function getAtomValue(atom) {
    return jotaiStore.get(atom);
}
exports.getAtomValue = getAtomValue;
function setAtomValue(atom, value) {
    jotaiStore.set(atom, value);
}
exports.setAtomValue = setAtomValue;
//# sourceMappingURL=atom.js.map