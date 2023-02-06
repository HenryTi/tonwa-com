import { env } from '../tools';
import { en } from './en';
import { zh } from './zh';
const resLang = {
    en,
    zh
};
export let resStrings = en.strings;
export let resFuncs = en.funcs;
export * from './useT';
export * from './defs';
export * from './buildTFunc';
(function setLanguage() {
    let res = resLang[env.lang];
    if (res) {
        resStrings = res.strings;
        resFuncs = res.funcs;
    }
})();
//# sourceMappingURL=index.js.map