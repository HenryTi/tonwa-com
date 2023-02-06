import { env } from "../tools";
export function buildTFunc(res) {
    let langRes = res[env.lang];
    return function (str) {
        return langRes[str] ?? str;
    };
}
//# sourceMappingURL=buildTFunc.js.map