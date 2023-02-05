export declare type Rule = (val: any) => (string | string[]);
export declare function checkRule(val: any, rule: Rule | Rule[]): string[];
export declare function ruleIsRequired(val: any): string;
