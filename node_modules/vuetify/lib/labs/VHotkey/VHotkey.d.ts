/**
 * VHotkey Component
 *
 * Purpose: Renders keyboard shortcuts in a visually consistent and accessible way.
 * This component handles the complex logic of displaying keyboard combinations
 * across different platforms (Mac vs PC) and display modes (icons, symbols, text).
 *
 * Why it exists:
 * - Provides consistent visual representation of keyboard shortcuts
 * - Handles platform-specific key differences (Cmd vs Ctrl, Option vs Alt)
 * - Supports multiple display modes for different design needs
 * - Encapsulates complex key parsing and rendering logic
 * - Used throughout the command palette for instruction display
 *
 * Key Mapping Structure:
 * The keyMap uses a simple object structure where each key has:
 * - `default`: Required configuration for all platforms
 * - `mac`: Optional Mac-specific overrides
 * Each config can specify `symbol`, `icon`, and `text` representations.
 *
 * Example:
 * ```
 * ctrl: {
 *   mac: { symbol: '⌃', icon: '$ctrl', text: 'Control' },
 *   default: { text: 'Ctrl', icon: '$ctrl' }
 * }
 * ```
 */
import type { PropType } from 'vue';
type DisplayMode = 'icon' | 'symbol' | 'text';
type HotkeyVariant = 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain' | 'contained';
type KeyConfig = {
    symbol?: string;
    icon?: string;
    text: string;
};
type PlatformKeyConfig = {
    mac?: KeyConfig;
    default: KeyConfig;
};
type KeyMapConfig = Record<string, PlatformKeyConfig>;
export declare const hotkeyMap: KeyMapConfig;
export declare const makeVHotkeyProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    border?: unknown;
    theme?: unknown;
    class?: unknown;
    style?: unknown;
    keys?: unknown;
    displayMode?: unknown;
    keyMap?: unknown;
    platform?: unknown;
    inline?: unknown;
    disabled?: unknown;
    prefix?: unknown;
    suffix?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? HotkeyVariant : HotkeyVariant | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? HotkeyVariant : Defaults["variant"] | NonNullable<HotkeyVariant>;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : import("vue").StyleValue | Defaults["style"]>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : NonNullable<import("vue").StyleValue> | Defaults["style"];
    };
    keys: unknown extends Defaults["keys"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["keys"] ? string : string | Defaults["keys"]>;
        default: unknown extends Defaults["keys"] ? string : string | Defaults["keys"];
    };
    displayMode: unknown extends Defaults["displayMode"] ? {
        type: PropType<DisplayMode>;
        default: string;
    } : Omit<{
        type: PropType<DisplayMode>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["displayMode"] ? DisplayMode : DisplayMode | Defaults["displayMode"]>;
        default: unknown extends Defaults["displayMode"] ? DisplayMode : Defaults["displayMode"] | NonNullable<DisplayMode>;
    };
    keyMap: unknown extends Defaults["keyMap"] ? {
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    } : Omit<{
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["keyMap"] ? KeyMapConfig : KeyMapConfig | Defaults["keyMap"]>;
        default: unknown extends Defaults["keyMap"] ? KeyMapConfig : KeyMapConfig | Defaults["keyMap"];
    };
    platform: unknown extends Defaults["platform"] ? {
        type: PropType<"auto" | "pc" | "mac">;
        default: string;
    } : Omit<{
        type: PropType<"auto" | "pc" | "mac">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["platform"] ? "auto" | "pc" | "mac" : "auto" | "pc" | "mac" | Defaults["platform"]>;
        default: unknown extends Defaults["platform"] ? "auto" | "pc" | "mac" : Defaults["platform"] | NonNullable<"auto" | "pc" | "mac">;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    suffix: unknown extends Defaults["suffix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"]>;
        default: unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"];
    };
};
export declare const VHotkey: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        variant: HotkeyVariant;
        platform: "auto" | "pc" | "mac";
        inline: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
    } & {
        keys?: string | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        prefix?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        suffix?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        variant: HotkeyVariant;
        platform: "auto" | "pc" | "mac";
        inline: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        variant: HotkeyVariant;
        platform: "auto" | "pc" | "mac";
        inline: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
    } & {
        keys?: string | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        prefix?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        suffix?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        variant: HotkeyVariant;
        platform: "auto" | "pc" | "mac";
        inline: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        displayMode: DisplayMode;
        keyMap: KeyMapConfig;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    variant: HotkeyVariant;
    platform: "auto" | "pc" | "mac";
    inline: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    tile: boolean;
    displayMode: DisplayMode;
    keyMap: KeyMapConfig;
} & {
    keys?: string | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    prefix?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    suffix?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    variant: HotkeyVariant;
    platform: "auto" | "pc" | "mac";
    inline: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    displayMode: DisplayMode;
    keyMap: KeyMapConfig;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: {
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    theme: StringConstructor;
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    keys: StringConstructor;
    displayMode: {
        type: PropType<DisplayMode>;
        default: string;
    };
    keyMap: {
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    };
    platform: {
        type: PropType<"auto" | "pc" | "mac">;
        default: string;
    };
    inline: BooleanConstructor;
    disabled: BooleanConstructor;
    prefix: StringConstructor;
    suffix: StringConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: {
        type: PropType<HotkeyVariant>;
        default: "elevated";
        validator: (v: any) => boolean;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    theme: StringConstructor;
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    keys: StringConstructor;
    displayMode: {
        type: PropType<DisplayMode>;
        default: string;
    };
    keyMap: {
        type: PropType<KeyMapConfig>;
        default: () => KeyMapConfig;
    };
    platform: {
        type: PropType<"auto" | "pc" | "mac">;
        default: string;
    };
    inline: BooleanConstructor;
    disabled: BooleanConstructor;
    prefix: StringConstructor;
    suffix: StringConstructor;
}>>;
export type VHotkey = InstanceType<typeof VHotkey>;
export type { KeyConfig, PlatformKeyConfig, KeyMapConfig, DisplayMode };
