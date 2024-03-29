import { EnumString } from "./defs";
export const en = {
    strings: {
        [EnumString.rule_required]: 'Is required',
        [EnumString.rule_mustBeInteger]: 'Must be integer',
        [EnumString.rule_mustBeDecimal]: 'Must be number',
        [EnumString.rule_belowMin]: 'Min is ',
        [EnumString.rule_overMax]: 'Max is ',
        [EnumString.placeholder_pick]: 'Click to pick',
        [EnumString.placeholder_select]: 'Click to select',
        [EnumString.string_submit]: 'Submit',
        [EnumString.time_yesterday]: 'Yday',
        [EnumString.time_today]: 'Today',
        [EnumString.time_tomorrow]: 'Tmw',
    },
    funcs: {
        time_md: (month, date) => `${month}-${date}`,
        time_ymd: (year, month, date) => `${year}-${month}-${date}`,
    }
};
//# sourceMappingURL=en.js.map