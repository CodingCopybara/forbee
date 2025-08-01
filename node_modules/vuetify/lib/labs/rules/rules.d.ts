import type { InjectionKey, Ref } from 'vue';
import type { LocaleInstance } from "../../composables/locale.js";
import type { ValidationProps, ValidationRule } from "../../composables/validation.js";
export type ValidationRuleBuilderWithoutOptions = (err?: string) => ValidationRule;
export type ValidationRuleBuilderWithOptions<T> = (options: T, err?: string) => ValidationRule;
export type ValidationRuleBuilder = ValidationRuleBuilderWithoutOptions | ValidationRuleBuilderWithOptions<any>;
export interface RuleAliases {
    [name: string]: ValidationRuleBuilder;
    required: ValidationRuleBuilderWithoutOptions;
    email: ValidationRuleBuilderWithoutOptions;
    number: ValidationRuleBuilderWithoutOptions;
    integer: ValidationRuleBuilderWithoutOptions;
    capital: ValidationRuleBuilderWithoutOptions;
    maxLength: ValidationRuleBuilderWithOptions<number>;
    minLength: ValidationRuleBuilderWithOptions<number>;
    strictLength: ValidationRuleBuilderWithOptions<number>;
    exclude: ValidationRuleBuilderWithOptions<string[]>;
    notEmpty: ValidationRuleBuilderWithoutOptions;
    pattern: ValidationRuleBuilderWithOptions<RegExp>;
}
export type RulesOptions = {
    aliases?: Partial<RuleAliases>;
};
type ValidationRuleParams = [any, string?];
export type ValidationAlias = string | [string, ...ValidationRuleParams];
export type RulesInstance = (fn: () => ValidationProps['rules']) => Readonly<Ref<any[]>>;
export declare function createRules(options: RulesOptions | undefined, locale: LocaleInstance): (fn: () => ValidationProps["rules"]) => import("vue").ComputedRef<(ValidationRule | [string, any, (string | undefined)?])[]>;
export declare const RulesSymbol: InjectionKey<RulesInstance>;
export declare function useRules(fn: () => ValidationProps['rules']): Readonly<Ref<any[], any[]>> | Readonly<Ref<readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[], readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[]>>;

