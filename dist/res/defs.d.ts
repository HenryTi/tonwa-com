export declare enum EnumString {
    rule_required = 0,
    rule_mustBeInteger = 1,
    rule_mustBeDecimal = 2,
    rule_belowMin = 3,
    rule_overMax = 4,
    placeholder_pick = 5,
    placeholder_select = 6,
    string_submit = 7,
    time_yesterday = 8,
    time_today = 9,
    time_tomorrow = 10
}
export interface LangFunc {
    time_md: (month: number, date: number) => string;
    time_ymd: (year: number, month: number, date: number) => string;
}
export interface StringsAndFuncs {
    strings: {
        [key in EnumString]: string;
    };
    funcs: LangFunc;
}
