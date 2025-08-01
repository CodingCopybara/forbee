import type { PropType } from 'vue';
import type { PieItem, TextTemplate } from './types.js';
export type VPieTooltipSlots = {
    default: {
        item: PieItem;
    };
    prepend: {
        item: PieItem;
    };
};
export declare const makeVPieTooltipProps: <Defaults extends {
    offset?: unknown;
    transition?: unknown;
    modelValue?: unknown;
    item?: unknown;
    titleFormat?: unknown;
    subtitleFormat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    offset: unknown extends Defaults["offset"] ? {
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    } : Omit<{
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : NonNullable<string | number | number[] | undefined> | Defaults["offset"];
    };
    transition: unknown extends Defaults["transition"] ? import("vue").Prop<string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    }) | null> : {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | null : string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | Defaults["transition"] | null>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | null : NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | null> | Defaults["transition"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    item: unknown extends Defaults["item"] ? {
        type: PropType<PieItem | null>;
        default: null;
    } : Omit<{
        type: PropType<PieItem | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["item"] ? PieItem | null : PieItem | Defaults["item"] | null>;
        default: unknown extends Defaults["item"] ? PieItem | null : PieItem | Defaults["item"];
    };
    titleFormat: unknown extends Defaults["titleFormat"] ? {
        type: PropType<TextTemplate>;
        default: string;
    } : Omit<{
        type: PropType<TextTemplate>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["titleFormat"] ? TextTemplate : TextTemplate | Defaults["titleFormat"]>;
        default: unknown extends Defaults["titleFormat"] ? TextTemplate : Defaults["titleFormat"] | NonNullable<TextTemplate>;
    };
    subtitleFormat: unknown extends Defaults["subtitleFormat"] ? {
        type: PropType<TextTemplate>;
        default: string;
    } : Omit<{
        type: PropType<TextTemplate>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["subtitleFormat"] ? TextTemplate : TextTemplate | Defaults["subtitleFormat"]>;
        default: unknown extends Defaults["subtitleFormat"] ? TextTemplate : NonNullable<TextTemplate> | Defaults["subtitleFormat"];
    };
};
export declare const VPieTooltip: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        offset: string | number | number[] | undefined;
        item: PieItem | null;
        modelValue: boolean;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    } & {
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | null | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | {
            default?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        offset: string | number | number[] | undefined;
        item: PieItem | null;
        modelValue: boolean;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            item: PieItem;
        }) => import("vue").VNode[];
        prepend: (arg: {
            item: PieItem;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        offset: string | number | number[] | undefined;
        item: PieItem | null;
        modelValue: boolean;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    } & {
        transition?: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | null | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | {
            default?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: {
                item: PieItem;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, {}, {}, {}, {
        offset: string | number | number[] | undefined;
        item: PieItem | null;
        modelValue: boolean;
        titleFormat: TextTemplate;
        subtitleFormat: TextTemplate;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    offset: string | number | number[] | undefined;
    item: PieItem | null;
    modelValue: boolean;
    titleFormat: TextTemplate;
    subtitleFormat: TextTemplate;
} & {
    transition?: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    }) | null | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | ((arg: {
        item: PieItem;
    }) => import("vue").VNodeChild) | {
        default?: ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: {
            item: PieItem;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        item: PieItem;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: {
        item: PieItem;
    }) => import("vue").VNodeChild) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    offset: string | number | number[] | undefined;
    item: PieItem | null;
    modelValue: boolean;
    titleFormat: TextTemplate;
    subtitleFormat: TextTemplate;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        item: PieItem;
    }) => import("vue").VNode[];
    prepend: (arg: {
        item: PieItem;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    offset: {
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    };
    transition: import("vue").Prop<null | string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    })>;
    modelValue: BooleanConstructor;
    item: {
        type: PropType<PieItem | null>;
        default: null;
    };
    titleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
    subtitleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    offset: {
        type: PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    };
    transition: import("vue").Prop<null | string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    })>;
    modelValue: BooleanConstructor;
    item: {
        type: PropType<PieItem | null>;
        default: null;
    };
    titleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
    subtitleFormat: {
        type: PropType<TextTemplate>;
        default: string;
    };
}>>;
export type VPieTooltip = InstanceType<typeof VPieTooltip>;
