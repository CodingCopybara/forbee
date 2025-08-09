import type { VTextFieldSlots } from "../../components/VTextField/VTextField.js";
export type VMaskInputSlots = VTextFieldSlots;
export declare const makeVMaskInputProps: <Defaults extends {
    mask?: unknown;
    returnMaskedValue?: unknown;
    theme?: unknown;
    rounded?: unknown;
    tile?: unknown;
    loading?: unknown;
    class?: unknown;
    style?: unknown;
    appendInnerIcon?: unknown;
    bgColor?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    active?: unknown;
    centerAffix?: unknown;
    color?: unknown;
    baseColor?: unknown;
    details?: unknown;
    dirty?: unknown;
    disabled?: unknown;
    glow?: unknown;
    error?: unknown;
    flat?: unknown;
    iconColor?: unknown;
    label?: unknown;
    persistentClear?: unknown;
    prependInnerIcon?: unknown;
    reverse?: unknown;
    singleLine?: unknown;
    variant?: unknown;
    'onClick:clear'?: unknown;
    'onClick:appendInner'?: unknown;
    'onClick:prependInner'?: unknown;
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    name?: unknown;
    readonly?: unknown;
    rules?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    width?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    density?: unknown;
    id?: unknown;
    appendIcon?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    direction?: unknown;
    'onClick:prepend'?: unknown;
    'onClick:append'?: unknown;
    autofocus?: unknown;
    counter?: unknown;
    counterValue?: unknown;
    prefix?: unknown;
    placeholder?: unknown;
    persistentPlaceholder?: unknown;
    persistentCounter?: unknown;
    suffix?: unknown;
    role?: unknown;
    type?: unknown;
    modelModifiers?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mask: unknown extends Defaults["mask"] ? import("vue").PropType<string | import("../../composables/mask.js").MaskOptions> : {
        type: import("vue").PropType<unknown extends Defaults["mask"] ? string | import("../../composables/mask.js").MaskOptions : string | import("../../composables/mask.js").MaskOptions | Defaults["mask"]>;
        default: unknown extends Defaults["mask"] ? string | import("../../composables/mask.js").MaskOptions : NonNullable<string | import("../../composables/mask.js").MaskOptions> | Defaults["mask"];
    };
    returnMaskedValue: unknown extends Defaults["returnMaskedValue"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnMaskedValue"] ? boolean : boolean | Defaults["returnMaskedValue"]>;
        default: unknown extends Defaults["returnMaskedValue"] ? boolean : boolean | Defaults["returnMaskedValue"];
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : import("vue").StyleValue | Defaults["style"]>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : NonNullable<import("vue").StyleValue> | Defaults["style"];
    };
    appendInnerIcon: unknown extends Defaults["appendInnerIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendInnerIcon"]>;
        default: unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendInnerIcon"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    clearIcon: unknown extends Defaults["clearIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["clearIcon"]>;
        default: unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["clearIcon"];
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    details: unknown extends Defaults["details"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["details"] ? boolean : boolean | Defaults["details"]>;
        default: unknown extends Defaults["details"] ? boolean : boolean | Defaults["details"];
    };
    dirty: unknown extends Defaults["dirty"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"]>;
        default: unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : NonNullable<string | boolean> | Defaults["iconColor"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    persistentClear: unknown extends Defaults["persistentClear"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"]>;
        default: unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"];
    };
    prependInnerIcon: unknown extends Defaults["prependInnerIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependInnerIcon"]>;
        default: unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependInnerIcon"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    singleLine: unknown extends Defaults["singleLine"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"]>;
        default: unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" : "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" : NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled"> | Defaults["variant"];
    };
    'onClick:clear': unknown extends Defaults["onClick:clear"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"]>;
        default: unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"];
    };
    'onClick:appendInner': unknown extends Defaults["onClick:appendInner"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"]>;
        default: unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"];
    };
    'onClick:prependInner': unknown extends Defaults["onClick:prependInner"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"]>;
        default: unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"];
    };
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    'onUpdate:focused': unknown extends Defaults["onUpdate:focused"] ? import("vue").PropType<(args_0: boolean) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : NonNullable<string | readonly string[] | null> | Defaults["errorMessages"];
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : NonNullable<string | number> | Defaults["maxErrors"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    rules: unknown extends Defaults["rules"] ? {
        type: import("vue").PropType<readonly (import("../../types.js").ValidationRule | import("../rules/index.js").ValidationAlias)[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly (import("../../types.js").ValidationRule | import("../rules/index.js").ValidationAlias)[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] : readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[] | Defaults["rules"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    validateOn: unknown extends Defaults["validateOn"] ? import("vue").PropType<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | Defaults["validateOn"] | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : NonNullable<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> | Defaults["validateOn"];
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? import("vue").PropType<boolean | "auto"> : {
        type: import("vue").PropType<unknown extends Defaults["hideDetails"] ? boolean | "auto" : boolean | "auto" | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? boolean | "auto" : NonNullable<boolean | "auto"> | Defaults["hideDetails"];
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : NonNullable<string | readonly string[]> | Defaults["messages"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    'onClick:prepend': unknown extends Defaults["onClick:prepend"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    'onClick:append': unknown extends Defaults["onClick:append"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
    };
    counter: unknown extends Defaults["counter"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["counter"] ? string | number | boolean : string | number | boolean | Defaults["counter"]>;
        default: unknown extends Defaults["counter"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["counter"];
    };
    counterValue: unknown extends Defaults["counterValue"] ? import("vue").PropType<number | ((value: any) => number)> : {
        type: import("vue").PropType<unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : number | ((value: any) => number) | Defaults["counterValue"]>;
        default: unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : NonNullable<number | ((value: any) => number)> | Defaults["counterValue"];
    };
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    persistentPlaceholder: unknown extends Defaults["persistentPlaceholder"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"]>;
        default: unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"];
    };
    persistentCounter: unknown extends Defaults["persistentCounter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"]>;
        default: unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"];
    };
    suffix: unknown extends Defaults["suffix"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"]>;
        default: unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"];
    };
    role: unknown extends Defaults["role"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["role"] ? string : string | Defaults["role"]>;
        default: unknown extends Defaults["role"] ? string : string | Defaults["role"];
    };
    type: unknown extends Defaults["type"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    modelModifiers: unknown extends Defaults["modelModifiers"] ? import("vue").PropType<Record<string, boolean>> : {
        type: import("vue").PropType<unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"]>;
        default: unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"];
    };
};
export declare const VMaskInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        returnMaskedValue: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        mask?: string | import("../../composables/mask.js").MaskOptions | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "details" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            default?: (() => import("vue").VNode[]) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            } & {
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'click:control': (e: MouseEvent) => true;
            'mousedown:control': (e: MouseEvent) => true;
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (val: string) => true;
        }, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            default: () => import("vue").VNode[];
            counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    }, "normalize" | "flat" | "reverse" | "variant" | "name" | "max" | "required" | "type" | "error" | "id" | "matches" | "height" | "width" | "active" | "remove" | "min" | "direction" | "translate" | "contains" | "value" | "hidden" | "details" | "form" | "select" | "slot" | "style" | "title" | "dir" | "animate" | "pattern" | "blur" | "click" | "focus" | "reset" | "scroll" | "autocomplete" | "checkValidity" | "reportValidity" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | "draggable" | "inert" | "innerText" | "lang" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "outerText" | "popover" | "spellcheck" | "writingSuggestions" | "attachInternals" | "hidePopover" | "showPopover" | "togglePopover" | "attributes" | "classList" | "className" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "currentCSSZoom" | "innerHTML" | "localName" | "namespaceURI" | "onfullscreenchange" | "onfullscreenerror" | "outerHTML" | "ownerDocument" | "part" | "prefix" | "scrollHeight" | "scrollLeft" | "scrollTop" | "scrollWidth" | "shadowRoot" | "tagName" | "attachShadow" | "checkVisibility" | "closest" | "computedStyleMap" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "getHTML" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasPointerCapture" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "releasePointerCapture" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "requestFullscreen" | "requestPointerLock" | "scrollBy" | "scrollIntoView" | "scrollTo" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setHTMLUnsafe" | "setPointerCapture" | "toggleAttribute" | "webkitMatchesSelector" | "_clickOutside" | "_onResize" | "_ripple" | "_observe" | "_mutate" | "_onScroll" | "_touchHandlers" | "_transitionInitialStyles" | "baseURI" | "childNodes" | "firstChild" | "isConnected" | "lastChild" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "parentElement" | "parentNode" | "previousSibling" | "textContent" | "appendChild" | "cloneNode" | "compareDocumentPosition" | "getRootNode" | "hasChildNodes" | "insertBefore" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "lookupNamespaceURI" | "lookupPrefix" | "removeChild" | "replaceChild" | "ELEMENT_NODE" | "ATTRIBUTE_NODE" | "TEXT_NODE" | "CDATA_SECTION_NODE" | "ENTITY_REFERENCE_NODE" | "ENTITY_NODE" | "PROCESSING_INSTRUCTION_NODE" | "COMMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_TYPE_NODE" | "DOCUMENT_FRAGMENT_NODE" | "NOTATION_NODE" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "dispatchEvent" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColIndexText" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRelevant" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowIndexText" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "role" | "getAnimations" | "after" | "before" | "replaceWith" | "nextElementSibling" | "previousElementSibling" | "childElementCount" | "children" | "firstElementChild" | "lastElementChild" | "append" | "prepend" | "querySelector" | "querySelectorAll" | "replaceChildren" | "assignedSlot" | "attributeStyleMap" | "contentEditable" | "enterKeyHint" | "inputMode" | "isContentEditable" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextlost" | "oncontextmenu" | "oncontextrestored" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "autofocus" | "dataset" | "nonce" | "tabIndex" | "disabled" | "labels" | "multiple" | "size" | "validationMessage" | "validity" | "willValidate" | "setCustomValidity" | "showPicker" | "readonly" | "maxLength" | "list" | "accept" | "readOnly" | "_" | "alt" | "step" | "placeholder" | "src" | "capture" | "checked" | "indeterminate" | "align" | "messages" | "rules" | "minLength" | "isValid" | "focused" | "errorMessages" | "maxErrors" | "validate" | "resetValidation" | "density" | "rounded" | "tile" | "_allExposed" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "controlRef" | "fieldIconColor" | "persistentPlaceholder" | "persistentCounter" | "defaultChecked" | "defaultValue" | "dirName" | "files" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "selectionDirection" | "selectionEnd" | "selectionStart" | "useMap" | "valueAsDate" | "valueAsNumber" | "webkitEntries" | "webkitdirectory" | "setRangeText" | "setSelectionRange" | "stepDown" | "stepUp" | "popoverTargetAction" | "popoverTargetElement"> & import("vue").ShallowUnwrapRef<Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "loading" | "label" | "prefix" | "role" | "class" | "theme" | "placeholder" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "counter" | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:append" | "onClick:prepend" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "suffix" | "counterValue" | "modelModifiers" | "onClick:control" | "onMousedown:control" | ("flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "details" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter") | "v-slot:counter">, `$${any}`> & {
        _allExposed: (Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            } & {
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }) | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (val: string) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        returnMaskedValue: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        returnMaskedValue: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        mask?: string | import("../../composables/mask.js").MaskOptions | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "details" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            default?: (() => import("vue").VNode[]) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        }, Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            } & {
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'click:control': (e: MouseEvent) => true;
            'mousedown:control': (e: MouseEvent) => true;
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (val: string) => true;
        }, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            details: boolean;
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            default: () => import("vue").VNode[];
            counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    }, "normalize" | "flat" | "reverse" | "variant" | "name" | "max" | "required" | "type" | "error" | "id" | "matches" | "height" | "width" | "active" | "remove" | "min" | "direction" | "translate" | "contains" | "value" | "hidden" | "details" | "form" | "select" | "slot" | "style" | "title" | "dir" | "animate" | "pattern" | "blur" | "click" | "focus" | "reset" | "scroll" | "autocomplete" | "checkValidity" | "reportValidity" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | "draggable" | "inert" | "innerText" | "lang" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "outerText" | "popover" | "spellcheck" | "writingSuggestions" | "attachInternals" | "hidePopover" | "showPopover" | "togglePopover" | "attributes" | "classList" | "className" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "currentCSSZoom" | "innerHTML" | "localName" | "namespaceURI" | "onfullscreenchange" | "onfullscreenerror" | "outerHTML" | "ownerDocument" | "part" | "prefix" | "scrollHeight" | "scrollLeft" | "scrollTop" | "scrollWidth" | "shadowRoot" | "tagName" | "attachShadow" | "checkVisibility" | "closest" | "computedStyleMap" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "getHTML" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasPointerCapture" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "releasePointerCapture" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "requestFullscreen" | "requestPointerLock" | "scrollBy" | "scrollIntoView" | "scrollTo" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setHTMLUnsafe" | "setPointerCapture" | "toggleAttribute" | "webkitMatchesSelector" | "_clickOutside" | "_onResize" | "_ripple" | "_observe" | "_mutate" | "_onScroll" | "_touchHandlers" | "_transitionInitialStyles" | "baseURI" | "childNodes" | "firstChild" | "isConnected" | "lastChild" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "parentElement" | "parentNode" | "previousSibling" | "textContent" | "appendChild" | "cloneNode" | "compareDocumentPosition" | "getRootNode" | "hasChildNodes" | "insertBefore" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "lookupNamespaceURI" | "lookupPrefix" | "removeChild" | "replaceChild" | "ELEMENT_NODE" | "ATTRIBUTE_NODE" | "TEXT_NODE" | "CDATA_SECTION_NODE" | "ENTITY_REFERENCE_NODE" | "ENTITY_NODE" | "PROCESSING_INSTRUCTION_NODE" | "COMMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_TYPE_NODE" | "DOCUMENT_FRAGMENT_NODE" | "NOTATION_NODE" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "dispatchEvent" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColIndexText" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRelevant" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowIndexText" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "role" | "getAnimations" | "after" | "before" | "replaceWith" | "nextElementSibling" | "previousElementSibling" | "childElementCount" | "children" | "firstElementChild" | "lastElementChild" | "append" | "prepend" | "querySelector" | "querySelectorAll" | "replaceChildren" | "assignedSlot" | "attributeStyleMap" | "contentEditable" | "enterKeyHint" | "inputMode" | "isContentEditable" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextlost" | "oncontextmenu" | "oncontextrestored" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "autofocus" | "dataset" | "nonce" | "tabIndex" | "disabled" | "labels" | "multiple" | "size" | "validationMessage" | "validity" | "willValidate" | "setCustomValidity" | "showPicker" | "readonly" | "maxLength" | "list" | "accept" | "readOnly" | "_" | "alt" | "step" | "placeholder" | "src" | "capture" | "checked" | "indeterminate" | "align" | "messages" | "rules" | "minLength" | "isValid" | "focused" | "errorMessages" | "maxErrors" | "validate" | "resetValidation" | "density" | "rounded" | "tile" | "_allExposed" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "controlRef" | "fieldIconColor" | "persistentPlaceholder" | "persistentCounter" | "defaultChecked" | "defaultValue" | "dirName" | "files" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "selectionDirection" | "selectionEnd" | "selectionStart" | "useMap" | "valueAsDate" | "valueAsNumber" | "webkitEntries" | "webkitdirectory" | "setRangeText" | "setSelectionRange" | "stepDown" | "stepUp" | "popoverTargetAction" | "popoverTargetElement"> & import("vue").ShallowUnwrapRef<Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "loading" | "label" | "prefix" | "role" | "class" | "theme" | "placeholder" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "counter" | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:append" | "onClick:prepend" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "suffix" | "counterValue" | "modelModifiers" | "onClick:control" | "onMousedown:control" | ("flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "details" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter") | "v-slot:counter">, `$${any}`> & {
        _allExposed: (Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            } & {
                name?: string | undefined;
                id?: string | undefined;
                width?: string | number | undefined;
                color?: string | undefined;
                maxWidth?: string | number | undefined;
                minWidth?: string | number | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
                validationValue?: any;
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                iconColor?: string | boolean | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                iconColor?: string | boolean | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                details: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }) | {};
    }, {}, {}, {}, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        returnMaskedValue: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    details: boolean;
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    returnMaskedValue: boolean;
} & {
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    mask?: string | import("../../composables/mask.js").MaskOptions | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    role?: string | undefined;
    class?: any;
    theme?: string | undefined;
    placeholder?: string | undefined;
    counter?: string | number | boolean | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: any;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    iconColor?: string | boolean | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | (() => import("vue").VNodeChild) | {
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "details" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        default?: (() => import("vue").VNode[]) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:control': (e: MouseEvent) => true;
        'mousedown:control': (e: MouseEvent) => true;
        'update:focused': (focused: boolean) => true;
        'update:modelValue': (val: string) => true;
    }, string, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        details: boolean;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    details: boolean;
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
}> & Omit<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    details: boolean;
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
} & {
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    role?: string | undefined;
    class?: any;
    theme?: string | undefined;
    placeholder?: string | undefined;
    counter?: string | number | boolean | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: any;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    iconColor?: string | boolean | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | (() => import("vue").VNodeChild) | {
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
}, "normalize" | "flat" | "reverse" | "variant" | "name" | "max" | "required" | "type" | "error" | "id" | "matches" | "height" | "width" | "active" | "remove" | "min" | "direction" | "translate" | "contains" | "value" | "hidden" | "details" | "form" | "select" | "slot" | "style" | "title" | "dir" | "animate" | "pattern" | "blur" | "click" | "focus" | "reset" | "scroll" | "autocomplete" | "checkValidity" | "reportValidity" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | "draggable" | "inert" | "innerText" | "lang" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "outerText" | "popover" | "spellcheck" | "writingSuggestions" | "attachInternals" | "hidePopover" | "showPopover" | "togglePopover" | "attributes" | "classList" | "className" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "currentCSSZoom" | "innerHTML" | "localName" | "namespaceURI" | "onfullscreenchange" | "onfullscreenerror" | "outerHTML" | "ownerDocument" | "part" | "prefix" | "scrollHeight" | "scrollLeft" | "scrollTop" | "scrollWidth" | "shadowRoot" | "tagName" | "attachShadow" | "checkVisibility" | "closest" | "computedStyleMap" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "getHTML" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasPointerCapture" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "releasePointerCapture" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "requestFullscreen" | "requestPointerLock" | "scrollBy" | "scrollIntoView" | "scrollTo" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setHTMLUnsafe" | "setPointerCapture" | "toggleAttribute" | "webkitMatchesSelector" | "_clickOutside" | "_onResize" | "_ripple" | "_observe" | "_mutate" | "_onScroll" | "_touchHandlers" | "_transitionInitialStyles" | "baseURI" | "childNodes" | "firstChild" | "isConnected" | "lastChild" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "parentElement" | "parentNode" | "previousSibling" | "textContent" | "appendChild" | "cloneNode" | "compareDocumentPosition" | "getRootNode" | "hasChildNodes" | "insertBefore" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "lookupNamespaceURI" | "lookupPrefix" | "removeChild" | "replaceChild" | "ELEMENT_NODE" | "ATTRIBUTE_NODE" | "TEXT_NODE" | "CDATA_SECTION_NODE" | "ENTITY_REFERENCE_NODE" | "ENTITY_NODE" | "PROCESSING_INSTRUCTION_NODE" | "COMMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_TYPE_NODE" | "DOCUMENT_FRAGMENT_NODE" | "NOTATION_NODE" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "dispatchEvent" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColIndexText" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRelevant" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowIndexText" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "role" | "getAnimations" | "after" | "before" | "replaceWith" | "nextElementSibling" | "previousElementSibling" | "childElementCount" | "children" | "firstElementChild" | "lastElementChild" | "append" | "prepend" | "querySelector" | "querySelectorAll" | "replaceChildren" | "assignedSlot" | "attributeStyleMap" | "contentEditable" | "enterKeyHint" | "inputMode" | "isContentEditable" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextlost" | "oncontextmenu" | "oncontextrestored" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "autofocus" | "dataset" | "nonce" | "tabIndex" | "disabled" | "labels" | "multiple" | "size" | "validationMessage" | "validity" | "willValidate" | "setCustomValidity" | "showPicker" | "readonly" | "maxLength" | "list" | "accept" | "readOnly" | "_" | "alt" | "step" | "placeholder" | "src" | "capture" | "checked" | "indeterminate" | "align" | "messages" | "rules" | "minLength" | "isValid" | "focused" | "errorMessages" | "maxErrors" | "validate" | "resetValidation" | "density" | "rounded" | "tile" | "_allExposed" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "controlRef" | "fieldIconColor" | "persistentPlaceholder" | "persistentCounter" | "defaultChecked" | "defaultValue" | "dirName" | "files" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "selectionDirection" | "selectionEnd" | "selectionStart" | "useMap" | "valueAsDate" | "valueAsNumber" | "webkitEntries" | "webkitdirectory" | "setRangeText" | "setSelectionRange" | "stepDown" | "stepUp" | "popoverTargetAction" | "popoverTargetElement"> & import("vue").ShallowUnwrapRef<Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
}> & Omit<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
} & {
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    baseColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    iconColor?: string | boolean | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
    reset: () => Promise<void>;
    resetValidation: () => Promise<void>;
    validate: (silent?: boolean) => Promise<string[]>;
    isValid: import("vue").ComputedRef<boolean | null>;
    errorMessages: import("vue").ComputedRef<string[]>;
}> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
    modelValue?: unknown;
    'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
}, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
        default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: (event: "update:focused", focused: boolean) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, {
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:focused': (focused: boolean) => true;
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    error: boolean;
    active: boolean;
    details: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    focused: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
}> & Omit<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    error: boolean;
    active: boolean;
    details: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    focused: boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
} & {
    id?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    iconColor?: string | boolean | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
}, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
    controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    fieldIconColor: import("vue").ComputedRef<string | undefined>;
}> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
    modelValue?: unknown;
    'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
}, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
    _allExposed: {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    } | {
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    } | {};
}> & {} & import("vue").ComponentCustomProperties & {}, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "loading" | "label" | "prefix" | "role" | "class" | "theme" | "placeholder" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "counter" | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:append" | "onClick:prepend" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "suffix" | "counterValue" | "modelModifiers" | "onClick:control" | "onMousedown:control" | ("flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "details" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter") | "v-slot:counter">, `$${any}`> & {
    _allExposed: (Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "iconColor" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            iconColor?: string | boolean | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            details: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        details: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        iconColor?: string | boolean | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "iconColor" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "details" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }) | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: string) => true;
}, string, {
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    details: boolean;
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    returnMaskedValue: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNode[];
    details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNode[];
    append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
    'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    default: () => import("vue").VNode[];
    counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    mask: import("vue").PropType<string | import("../../composables/mask.js").MaskOptions>;
    returnMaskedValue: BooleanConstructor;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    appendInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    details: BooleanConstructor;
    dirty: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    glow: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': import("vue").PropType<(args_0: MouseEvent) => void>;
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly (import("../../types.js").ValidationRule | import("../rules/index.js").ValidationAlias)[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: import("vue").PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:append': import("vue").PropType<(args_0: MouseEvent) => void>;
    autofocus: BooleanConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    counterValue: import("vue").PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: import("vue").PropType<Record<string, boolean>>;
}, import("vue").ExtractPropTypes<{
    mask: import("vue").PropType<string | import("../../composables/mask.js").MaskOptions>;
    returnMaskedValue: BooleanConstructor;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    appendInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    bgColor: StringConstructor;
    clearable: BooleanConstructor;
    clearIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    color: StringConstructor;
    baseColor: StringConstructor;
    details: BooleanConstructor;
    dirty: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    glow: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: import("vue").PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': import("vue").PropType<(args_0: MouseEvent) => void>;
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly (import("../../types.js").ValidationRule | import("../rules/index.js").ValidationAlias)[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: import("vue").PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:append': import("vue").PropType<(args_0: MouseEvent) => void>;
    autofocus: BooleanConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    counterValue: import("vue").PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: StringConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: import("vue").PropType<Record<string, boolean>>;
}>>;
export type VMaskInput = InstanceType<typeof VMaskInput>;
