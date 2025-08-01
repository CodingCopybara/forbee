import { easingPatterns } from "../../util/index.js";
import type { PropType } from 'vue';
export declare const makeVPieSegmentProps: <Defaults extends {
    reveal?: unknown;
    rotate?: unknown;
    value?: unknown;
    color?: unknown;
    innerCut?: unknown;
    hoverScale?: unknown;
    gap?: unknown;
    rounded?: unknown;
    animation?: unknown;
    pattern?: unknown;
    hideSlice?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    reveal: unknown extends Defaults["reveal"] ? {
        type: PropType<boolean | {
            duration?: number;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            duration?: number;
        }>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["reveal"] ? boolean | {
            duration?: number;
        } : boolean | {
            duration?: number;
        } | Defaults["reveal"]>;
        default: unknown extends Defaults["reveal"] ? boolean | {
            duration?: number;
        } : NonNullable<boolean | {
            duration?: number;
        }> | Defaults["reveal"];
    };
    rotate: unknown extends Defaults["rotate"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["rotate"] ? string | number : string | number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? string | number : NonNullable<string | number> | Defaults["rotate"];
    };
    value: unknown extends Defaults["value"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["value"] ? number : number | Defaults["value"]>;
        default: unknown extends Defaults["value"] ? number : number | Defaults["value"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    innerCut: unknown extends Defaults["innerCut"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["innerCut"] ? string | number : string | number | Defaults["innerCut"]>;
        default: unknown extends Defaults["innerCut"] ? string | number : NonNullable<string | number> | Defaults["innerCut"];
    };
    hoverScale: unknown extends Defaults["hoverScale"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["hoverScale"] ? string | number : string | number | Defaults["hoverScale"]>;
        default: unknown extends Defaults["hoverScale"] ? string | number : NonNullable<string | number> | Defaults["hoverScale"];
    };
    gap: unknown extends Defaults["gap"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["gap"] ? string | number : string | number | Defaults["gap"]>;
        default: unknown extends Defaults["gap"] ? string | number : NonNullable<string | number> | Defaults["gap"];
    };
    rounded: unknown extends Defaults["rounded"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["rounded"] ? string | number : string | number | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number : NonNullable<string | number> | Defaults["rounded"];
    };
    animation: unknown extends Defaults["animation"] ? {
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        }>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["animation"] ? boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        } : boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        } | Defaults["animation"]>;
        default: unknown extends Defaults["animation"] ? boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        } : Defaults["animation"] | NonNullable<boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        }>;
    };
    pattern: unknown extends Defaults["pattern"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["pattern"] ? string : string | Defaults["pattern"]>;
        default: unknown extends Defaults["pattern"] ? string : string | Defaults["pattern"];
    };
    hideSlice: unknown extends Defaults["hideSlice"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSlice"] ? boolean : boolean | Defaults["hideSlice"]>;
        default: unknown extends Defaults["hideSlice"] ? boolean : boolean | Defaults["hideSlice"];
    };
};
export declare const VPieSegment: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        };
        value: number;
        reveal: boolean | {
            duration?: number;
        };
        hoverScale: string | number;
        hideSlice: boolean;
    } & {
        color?: string | undefined;
        gap?: string | number | undefined;
        rotate?: string | number | undefined;
        pattern?: string | undefined;
        rounded?: string | number | undefined;
        innerCut?: string | number | undefined;
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
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        };
        value: number;
        reveal: boolean | {
            duration?: number;
        };
        hoverScale: string | number;
        hideSlice: boolean;
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
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        };
        value: number;
        reveal: boolean | {
            duration?: number;
        };
        hoverScale: string | number;
        hideSlice: boolean;
    } & {
        color?: string | undefined;
        gap?: string | number | undefined;
        rotate?: string | number | undefined;
        pattern?: string | undefined;
        rounded?: string | number | undefined;
        innerCut?: string | number | undefined;
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
    }, () => JSX.Element, {}, {}, {}, {
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        };
        value: number;
        reveal: boolean | {
            duration?: number;
        };
        hoverScale: string | number;
        hideSlice: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    animation: boolean | {
        duration?: number;
        easing?: keyof typeof easingPatterns;
    };
    value: number;
    reveal: boolean | {
        duration?: number;
    };
    hoverScale: string | number;
    hideSlice: boolean;
} & {
    color?: string | undefined;
    gap?: string | number | undefined;
    rotate?: string | number | undefined;
    pattern?: string | undefined;
    rounded?: string | number | undefined;
    innerCut?: string | number | undefined;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    animation: boolean | {
        duration?: number;
        easing?: keyof typeof easingPatterns;
    };
    value: number;
    reveal: boolean | {
        duration?: number;
    };
    hoverScale: string | number;
    hideSlice: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    reveal: {
        type: PropType<boolean | {
            duration?: number;
        }>;
        default: boolean;
    };
    rotate: (StringConstructor | NumberConstructor)[];
    value: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
    innerCut: (StringConstructor | NumberConstructor)[];
    hoverScale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    gap: (StringConstructor | NumberConstructor)[];
    rounded: (StringConstructor | NumberConstructor)[];
    animation: {
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        }>;
        default: boolean;
    };
    pattern: StringConstructor;
    hideSlice: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    reveal: {
        type: PropType<boolean | {
            duration?: number;
        }>;
        default: boolean;
    };
    rotate: (StringConstructor | NumberConstructor)[];
    value: {
        type: NumberConstructor;
        default: number;
    };
    color: StringConstructor;
    innerCut: (StringConstructor | NumberConstructor)[];
    hoverScale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    gap: (StringConstructor | NumberConstructor)[];
    rounded: (StringConstructor | NumberConstructor)[];
    animation: {
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof easingPatterns;
        }>;
        default: boolean;
    };
    pattern: StringConstructor;
    hideSlice: BooleanConstructor;
}>>;
export type VPieSegment = InstanceType<typeof VPieSegment>;
