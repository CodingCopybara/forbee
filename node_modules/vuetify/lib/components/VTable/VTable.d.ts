import type { PropType } from 'vue';
export type VTableSlots = {
    default: never;
    top: never;
    bottom: never;
    wrapper: never;
};
export type Striped = null | 'odd' | 'even';
export declare const makeVTableProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    fixedHeader?: unknown;
    fixedFooter?: unknown;
    height?: unknown;
    hover?: unknown;
    striped?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
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
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    fixedFooter: unknown extends Defaults["fixedFooter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"]>;
        default: unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    striped: unknown extends Defaults["striped"] ? {
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["striped"] ? Striped : Striped | Defaults["striped"]>;
        default: unknown extends Defaults["striped"] ? Striped : Defaults["striped"] | NonNullable<Striped>;
    };
};
export declare const VTable: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        striped: Striped;
        hover: boolean;
        fixedHeader: boolean;
        fixedFooter: boolean;
    } & {
        height?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            top?: (() => import("vue").VNodeChild) | undefined;
            bottom?: (() => import("vue").VNodeChild) | undefined;
            wrapper?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            top?: false | (() => import("vue").VNodeChild) | undefined;
            bottom?: false | (() => import("vue").VNodeChild) | undefined;
            wrapper?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:top"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:bottom"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:wrapper"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        striped: Striped;
        hover: boolean;
        fixedHeader: boolean;
        fixedFooter: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        top: () => import("vue").VNode[];
        bottom: () => import("vue").VNode[];
        wrapper: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        striped: Striped;
        hover: boolean;
        fixedHeader: boolean;
        fixedFooter: boolean;
    } & {
        height?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            top?: (() => import("vue").VNodeChild) | undefined;
            bottom?: (() => import("vue").VNodeChild) | undefined;
            wrapper?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            top?: false | (() => import("vue").VNodeChild) | undefined;
            bottom?: false | (() => import("vue").VNodeChild) | undefined;
            wrapper?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:top"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:bottom"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:wrapper"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        striped: Striped;
        hover: boolean;
        fixedHeader: boolean;
        fixedFooter: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    striped: Striped;
    hover: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
} & {
    height?: string | number | undefined;
    class?: any;
    theme?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        top?: (() => import("vue").VNodeChild) | undefined;
        bottom?: (() => import("vue").VNodeChild) | undefined;
        wrapper?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        top?: false | (() => import("vue").VNodeChild) | undefined;
        bottom?: false | (() => import("vue").VNodeChild) | undefined;
        wrapper?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:top"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:bottom"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:wrapper"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    striped: Striped;
    hover: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    top: () => import("vue").VNode[];
    bottom: () => import("vue").VNode[];
    wrapper: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    striped: {
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    striped: {
        type: PropType<Striped>;
        default: null;
        validator: (v: any) => boolean;
    };
}>>;
export type VTable = InstanceType<typeof VTable>;
