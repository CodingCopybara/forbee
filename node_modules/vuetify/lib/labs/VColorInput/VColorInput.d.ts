import type { VTextFieldSlots } from "../../components/VTextField/VTextField.js";
export type VColorInputActionsSlot = {
    save: () => void;
    cancel: () => void;
    isPristine: boolean;
};
export type VColorInputSlots = Omit<VTextFieldSlots, 'default'> & {
    actions: VColorInputActionsSlot;
    default: never;
};
export declare const makeVColorInputProps: <Defaults extends {
    location?: unknown;
    height?: unknown;
    border?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    position?: unknown;
    style?: unknown;
    title?: unknown;
    disabled?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    mode?: unknown;
    landscape?: unknown;
    elevation?: unknown;
    modelValue?: unknown;
    rounded?: unknown;
    tile?: unknown;
    divided?: unknown;
    bgColor?: unknown;
    dotSize?: unknown;
    modes?: unknown;
    swatches?: unknown;
    hideHeader?: unknown;
    canvasHeight?: unknown;
    hideCanvas?: unknown;
    hideSliders?: unknown;
    hideInputs?: unknown;
    showSwatches?: unknown;
    swatchesMaxHeight?: unknown;
    loading?: unknown;
    appendInnerIcon?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    active?: unknown;
    centerAffix?: unknown;
    baseColor?: unknown;
    details?: unknown;
    dirty?: unknown;
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
    validateOn?: unknown;
    validationValue?: unknown;
    width?: unknown;
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
    cancelText?: unknown;
    okText?: unknown;
    hideActions?: unknown;
    pip?: unknown;
    pipIcon?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    location: unknown extends Defaults["location"] ? import("vue").PropType<import("../../util/index.js").Anchor | null> : {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minHeight: unknown extends Defaults["minHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : NonNullable<string | number> | Defaults["minHeight"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    position: unknown extends Defaults["position"] ? {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : "fixed" | "absolute" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : NonNullable<"fixed" | "absolute" | "relative" | "static" | "sticky"> | Defaults["position"];
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
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    mode: unknown extends Defaults["mode"] ? {
        type: import("vue").PropType<keyof typeof import("../../components/VColorPicker/util/index.js").modes>;
        default: string;
        validator: (v: string) => boolean;
    } : Omit<{
        type: import("vue").PropType<keyof typeof import("../../components/VColorPicker/util/index.js").modes>;
        default: string;
        validator: (v: string) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["mode"] ? "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa" : "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa" | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa" : NonNullable<"rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa"> | Defaults["mode"];
    };
    landscape: unknown extends Defaults["landscape"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"]>;
        default: unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"];
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<Record<string, unknown> | string | undefined | null>;
    } : Omit<{
        type: import("vue").PropType<Record<string, unknown> | string | undefined | null>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? string | Record<string, unknown> | null | undefined : string | Record<string, unknown> | Defaults["modelValue"] | null | undefined>;
        default: unknown extends Defaults["modelValue"] ? string | Record<string, unknown> | null | undefined : NonNullable<string | Record<string, unknown> | null | undefined> | Defaults["modelValue"];
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
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    dotSize: unknown extends Defaults["dotSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["dotSize"] ? string | number : string | number | Defaults["dotSize"]>;
        default: unknown extends Defaults["dotSize"] ? string | number : NonNullable<string | number> | Defaults["dotSize"];
    };
    modes: unknown extends Defaults["modes"] ? {
        type: import("vue").PropType<readonly (keyof typeof import("../../components/VColorPicker/util/index.js").modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<readonly (keyof typeof import("../../components/VColorPicker/util/index.js").modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modes"] ? readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] : readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] | Defaults["modes"]>;
        default: unknown extends Defaults["modes"] ? readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] : readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] | Defaults["modes"];
    };
    swatches: unknown extends Defaults["swatches"] ? import("vue").PropType<readonly (readonly (string | number | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    })[])[]> : {
        type: import("vue").PropType<unknown extends Defaults["swatches"] ? readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] : readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | Defaults["swatches"]>;
        default: unknown extends Defaults["swatches"] ? readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] : readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | Defaults["swatches"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? {
        type: import("vue").PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    canvasHeight: unknown extends Defaults["canvasHeight"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["canvasHeight"] ? string | number : string | number | Defaults["canvasHeight"]>;
        default: unknown extends Defaults["canvasHeight"] ? string | number : NonNullable<string | number> | Defaults["canvasHeight"];
    };
    hideCanvas: unknown extends Defaults["hideCanvas"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideCanvas"] ? boolean : boolean | Defaults["hideCanvas"]>;
        default: unknown extends Defaults["hideCanvas"] ? boolean : boolean | Defaults["hideCanvas"];
    };
    hideSliders: unknown extends Defaults["hideSliders"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideSliders"] ? boolean : boolean | Defaults["hideSliders"]>;
        default: unknown extends Defaults["hideSliders"] ? boolean : boolean | Defaults["hideSliders"];
    };
    hideInputs: unknown extends Defaults["hideInputs"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideInputs"] ? boolean : boolean | Defaults["hideInputs"]>;
        default: unknown extends Defaults["hideInputs"] ? boolean : boolean | Defaults["hideInputs"];
    };
    showSwatches: unknown extends Defaults["showSwatches"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showSwatches"] ? boolean : boolean | Defaults["showSwatches"]>;
        default: unknown extends Defaults["showSwatches"] ? boolean : boolean | Defaults["showSwatches"];
    };
    swatchesMaxHeight: unknown extends Defaults["swatchesMaxHeight"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["swatchesMaxHeight"] ? string | number : string | number | Defaults["swatchesMaxHeight"]>;
        default: unknown extends Defaults["swatchesMaxHeight"] ? string | number : NonNullable<string | number> | Defaults["swatchesMaxHeight"];
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    appendInnerIcon: unknown extends Defaults["appendInnerIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendInnerIcon"]>;
        default: unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendInnerIcon"];
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
    cancelText: unknown extends Defaults["cancelText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["cancelText"] ? string : string | Defaults["cancelText"]>;
        default: unknown extends Defaults["cancelText"] ? string : string | Defaults["cancelText"];
    };
    okText: unknown extends Defaults["okText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["okText"] ? string : string | Defaults["okText"]>;
        default: unknown extends Defaults["okText"] ? string : string | Defaults["okText"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    pip: unknown extends Defaults["pip"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["pip"] ? boolean : boolean | Defaults["pip"]>;
        default: unknown extends Defaults["pip"] ? boolean : boolean | Defaults["pip"];
    };
    pipIcon: unknown extends Defaults["pipIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["pipIcon"] ? string : string | Defaults["pipIcon"]>;
        default: unknown extends Defaults["pipIcon"] ? string : string | Defaults["pipIcon"];
    };
};
export declare const VColorInput: {
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
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
        landscape: boolean;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        divided: boolean;
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
        dotSize: string | number;
        modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
        hideHeader: boolean;
        canvasHeight: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        pip: boolean;
        pipIcon: string;
    } & {
        name?: string | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        title?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        elevation?: string | number | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: string | Record<string, unknown> | null | undefined;
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
        swatches?: readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | undefined;
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
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
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
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
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
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
        landscape: boolean;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
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
        dotSize: string | number;
        modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
        hideHeader: boolean;
        canvasHeight: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        pip: boolean;
        pipIcon: string;
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
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        actions: (arg: VColorInputActionsSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
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
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
        landscape: boolean;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        divided: boolean;
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
        dotSize: string | number;
        modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
        hideHeader: boolean;
        canvasHeight: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        pip: boolean;
        pipIcon: string;
    } & {
        name?: string | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        title?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        elevation?: string | number | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: string | Record<string, unknown> | null | undefined;
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
        swatches?: readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | undefined;
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
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
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
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
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
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }, {}, {}, {}, {}, {
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
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
        landscape: boolean;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
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
        dotSize: string | number;
        modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
        hideHeader: boolean;
        canvasHeight: string | number;
        hideCanvas: boolean;
        hideSliders: boolean;
        hideInputs: boolean;
        showSwatches: boolean;
        swatchesMaxHeight: string | number;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        pip: boolean;
        pipIcon: string;
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
    tag: string | import("../../util/index.js").JSXComponent;
    mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
    landscape: boolean;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    divided: boolean;
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
    dotSize: string | number;
    modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
    hideHeader: boolean;
    canvasHeight: string | number;
    hideCanvas: boolean;
    hideSliders: boolean;
    hideInputs: boolean;
    showSwatches: boolean;
    swatchesMaxHeight: string | number;
    cancelText: string;
    okText: string;
    hideActions: boolean;
    pip: boolean;
    pipIcon: string;
} & {
    name?: string | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    id?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    title?: string | undefined;
    prefix?: string | undefined;
    role?: string | undefined;
    class?: any;
    theme?: string | undefined;
    placeholder?: string | undefined;
    elevation?: string | number | undefined;
    counter?: string | number | boolean | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: string | Record<string, unknown> | null | undefined;
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
    swatches?: readonly (readonly (string | number | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    })[])[] | undefined;
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
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
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
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
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
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: VColorInputActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    tag: string | import("../../util/index.js").JSXComponent;
    mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
    landscape: boolean;
    messages: string | readonly string[];
    rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    divided: boolean;
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
    dotSize: string | number;
    modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
    hideHeader: boolean;
    canvasHeight: string | number;
    hideCanvas: boolean;
    hideSliders: boolean;
    hideInputs: boolean;
    showSwatches: boolean;
    swatchesMaxHeight: string | number;
    cancelText: string;
    okText: string;
    hideActions: boolean;
    pip: boolean;
    pipIcon: string;
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
    counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
    'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    actions: (arg: VColorInputActionsSlot) => import("vue").VNode[];
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
    height: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    title: StringConstructor;
    disabled: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<keyof typeof import("../../components/VColorPicker/util/index.js").modes>;
        default: string;
        validator: (v: string) => boolean;
    };
    landscape: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    modelValue: {
        type: import("vue").PropType<Record<string, unknown> | string | undefined | null>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    divided: BooleanConstructor;
    bgColor: StringConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modes: {
        type: import("vue").PropType<readonly (keyof typeof import("../../components/VColorPicker/util/index.js").modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    swatches: import("vue").PropType<import("vue").DeepReadonly<import("../../util/index.js").Color[][]>>;
    hideHeader: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    showSwatches: BooleanConstructor;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    appendInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
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
    baseColor: StringConstructor;
    details: BooleanConstructor;
    dirty: BooleanConstructor;
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
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    width: (StringConstructor | NumberConstructor)[];
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
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
    pip: BooleanConstructor;
    pipIcon: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
    height: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    title: StringConstructor;
    disabled: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    mode: {
        type: import("vue").PropType<keyof typeof import("../../components/VColorPicker/util/index.js").modes>;
        default: string;
        validator: (v: string) => boolean;
    };
    landscape: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    modelValue: {
        type: import("vue").PropType<Record<string, unknown> | string | undefined | null>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    divided: BooleanConstructor;
    bgColor: StringConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modes: {
        type: import("vue").PropType<readonly (keyof typeof import("../../components/VColorPicker/util/index.js").modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
    swatches: import("vue").PropType<import("vue").DeepReadonly<import("../../util/index.js").Color[][]>>;
    hideHeader: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    canvasHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideCanvas: BooleanConstructor;
    hideSliders: BooleanConstructor;
    hideInputs: BooleanConstructor;
    showSwatches: BooleanConstructor;
    swatchesMaxHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    appendInnerIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
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
    baseColor: StringConstructor;
    details: BooleanConstructor;
    dirty: BooleanConstructor;
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
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    width: (StringConstructor | NumberConstructor)[];
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
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    hideActions: BooleanConstructor;
    pip: BooleanConstructor;
    pipIcon: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VColorInput = InstanceType<typeof VColorInput>;
