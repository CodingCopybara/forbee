import type { PropType, TransitionProps } from 'vue';
import type { PieItem, TextTemplate } from './types.js';
export type VPieSlots = {
    center: {
        total: number;
    };
    legend: {
        isActive: (item: PieItem) => boolean;
        toggle: (item: PieItem) => void;
        items: PieItem[];
        total: number;
    };
    'legend-text': {
        item: PieItem;
        total: number;
    };
    title: never;
    tooltip: {
        item: PieItem;
        total: number;
    };
};
export declare const makeVPieProps: <Defaults extends {
    animation?: unknown;
    gap?: unknown;
    rounded?: unknown;
    reveal?: unknown;
    innerCut?: unknown;
    hoverScale?: unknown;
    hideSlice?: unknown;
    density?: unknown;
    title?: unknown;
    bgColor?: unknown;
    items?: unknown;
    palette?: unknown;
    itemKey?: unknown;
    itemValue?: unknown;
    itemTitle?: unknown;
    size?: unknown;
    rotate?: unknown;
    gaugeCut?: unknown;
    legend?: unknown;
    tooltip?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    animation: unknown extends Defaults["animation"] ? {
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        }>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["animation"] ? boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        } : boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        } | Defaults["animation"]>;
        default: unknown extends Defaults["animation"] ? boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        } : NonNullable<boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        }> | Defaults["animation"];
    };
    gap: unknown extends Defaults["gap"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["gap"] ? string | number : string | number | Defaults["gap"]>;
        default: unknown extends Defaults["gap"] ? string | number : NonNullable<string | number> | Defaults["gap"];
    };
    rounded: unknown extends Defaults["rounded"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["rounded"] ? string | number : string | number | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number : NonNullable<string | number> | Defaults["rounded"];
    };
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
    hideSlice: unknown extends Defaults["hideSlice"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSlice"] ? boolean : boolean | Defaults["hideSlice"]>;
        default: unknown extends Defaults["hideSlice"] ? boolean : boolean | Defaults["hideSlice"];
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
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<Record<string, any> | {
            color?: string;
            pattern?: string;
        }[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<Record<string, any> | {
            color?: string;
            pattern?: string;
        }[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? Record<string, any> | {
            color?: string;
            pattern?: string;
        }[] : Record<string, any> | {
            color?: string;
            pattern?: string;
        }[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? Record<string, any> | {
            color?: string;
            pattern?: string;
        }[] : Defaults["items"] | NonNullable<Record<string, any> | {
            color?: string;
            pattern?: string;
        }[]>;
    };
    palette: unknown extends Defaults["palette"] ? {
        type: PropType<({
            color?: string;
            pattern?: string;
        } | string)[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<({
            color?: string;
            pattern?: string;
        } | string)[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["palette"] ? (string | {
            color?: string;
            pattern?: string;
        })[] : (string | {
            color?: string;
            pattern?: string;
        })[] | Defaults["palette"]>;
        default: unknown extends Defaults["palette"] ? (string | {
            color?: string;
            pattern?: string;
        })[] : (string | {
            color?: string;
            pattern?: string;
        })[] | Defaults["palette"];
    };
    itemKey: unknown extends Defaults["itemKey"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemKey"] ? string : string | Defaults["itemKey"]>;
        default: unknown extends Defaults["itemKey"] ? string : string | Defaults["itemKey"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"];
    };
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
    };
    rotate: unknown extends Defaults["rotate"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["rotate"] ? string | number : string | number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? string | number : NonNullable<string | number> | Defaults["rotate"];
    };
    gaugeCut: unknown extends Defaults["gaugeCut"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["gaugeCut"] ? string | number : string | number | Defaults["gaugeCut"]>;
        default: unknown extends Defaults["gaugeCut"] ? string | number : NonNullable<string | number> | Defaults["gaugeCut"];
    };
    legend: unknown extends Defaults["legend"] ? {
        type: PropType<boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        }>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["legend"] ? boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        } : boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        } | Defaults["legend"]>;
        default: unknown extends Defaults["legend"] ? boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        } : Defaults["legend"] | NonNullable<boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        }>;
    };
    tooltip: unknown extends Defaults["tooltip"] ? {
        type: PropType<boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        }>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        }>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tooltip"] ? boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        } : boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        } | Defaults["tooltip"]>;
        default: unknown extends Defaults["tooltip"] ? boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        } : Defaults["tooltip"] | NonNullable<boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        }>;
    };
};
export declare const VPie: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        };
        legend: boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        };
        size: string | number;
        tooltip: boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        };
        items: Record<string, any> | {
            color?: string;
            pattern?: string;
        }[];
        itemValue: string;
        density: import("../../composables/density.js").Density;
        itemTitle: string;
        itemKey: string;
        reveal: boolean | {
            duration?: number;
        };
        palette: (string | {
            color?: string;
            pattern?: string;
        })[];
        hoverScale: string | number;
        hideSlice: boolean;
    } & {
        gap?: string | number | undefined;
        rotate?: string | number | undefined;
        title?: string | undefined;
        rounded?: string | number | undefined;
        bgColor?: string | undefined;
        innerCut?: string | number | undefined;
        gaugeCut?: string | number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            center?: ((arg: {
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            legend?: ((arg: {
                isActive: (item: PieItem) => boolean;
                toggle: (item: PieItem) => void;
                items: PieItem[];
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            'legend-text'?: ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            tooltip?: ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            center?: false | ((arg: {
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            legend?: false | ((arg: {
                isActive: (item: PieItem) => boolean;
                toggle: (item: PieItem) => void;
                items: PieItem[];
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            'legend-text'?: false | ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            tooltip?: false | ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:center"?: false | ((arg: {
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:legend"?: false | ((arg: {
            isActive: (item: PieItem) => boolean;
            toggle: (item: PieItem) => void;
            items: PieItem[];
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:legend-text"?: false | ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:tooltip"?: false | ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        };
        legend: boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        };
        size: string | number;
        tooltip: boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        };
        items: Record<string, any> | {
            color?: string;
            pattern?: string;
        }[];
        itemValue: string;
        density: import("../../composables/density.js").Density;
        itemTitle: string;
        itemKey: string;
        reveal: boolean | {
            duration?: number;
        };
        palette: (string | {
            color?: string;
            pattern?: string;
        })[];
        hoverScale: string | number;
        hideSlice: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        center: (arg: {
            total: number;
        }) => import("vue").VNode[];
        legend: (arg: {
            isActive: (item: PieItem) => boolean;
            toggle: (item: PieItem) => void;
            items: PieItem[];
            total: number;
        }) => import("vue").VNode[];
        'legend-text': (arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNode[];
        title: () => import("vue").VNode[];
        tooltip: (arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNode[];
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
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        };
        legend: boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        };
        size: string | number;
        tooltip: boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        };
        items: Record<string, any> | {
            color?: string;
            pattern?: string;
        }[];
        itemValue: string;
        density: import("../../composables/density.js").Density;
        itemTitle: string;
        itemKey: string;
        reveal: boolean | {
            duration?: number;
        };
        palette: (string | {
            color?: string;
            pattern?: string;
        })[];
        hoverScale: string | number;
        hideSlice: boolean;
    } & {
        gap?: string | number | undefined;
        rotate?: string | number | undefined;
        title?: string | undefined;
        rounded?: string | number | undefined;
        bgColor?: string | undefined;
        innerCut?: string | number | undefined;
        gaugeCut?: string | number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            center?: ((arg: {
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            legend?: ((arg: {
                isActive: (item: PieItem) => boolean;
                toggle: (item: PieItem) => void;
                items: PieItem[];
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            'legend-text'?: ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            tooltip?: ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            center?: false | ((arg: {
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            legend?: false | ((arg: {
                isActive: (item: PieItem) => boolean;
                toggle: (item: PieItem) => void;
                items: PieItem[];
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            'legend-text'?: false | ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            tooltip?: false | ((arg: {
                item: PieItem;
                total: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:center"?: false | ((arg: {
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:legend"?: false | ((arg: {
            isActive: (item: PieItem) => boolean;
            toggle: (item: PieItem) => void;
            items: PieItem[];
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:legend-text"?: false | ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:tooltip"?: false | ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, {}, {}, {}, {
        animation: boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        };
        legend: boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        };
        size: string | number;
        tooltip: boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        };
        items: Record<string, any> | {
            color?: string;
            pattern?: string;
        }[];
        itemValue: string;
        density: import("../../composables/density.js").Density;
        itemTitle: string;
        itemKey: string;
        reveal: boolean | {
            duration?: number;
        };
        palette: (string | {
            color?: string;
            pattern?: string;
        })[];
        hoverScale: string | number;
        hideSlice: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    animation: boolean | {
        duration?: number;
        easing?: keyof typeof import("../../util/index.js").easingPatterns;
    };
    legend: boolean | {
        position?: "left" | "top" | "right" | "bottom";
        textFormat?: TextTemplate;
    };
    size: string | number;
    tooltip: boolean | {
        titleFormat?: TextTemplate;
        subtitleFormat?: TextTemplate;
        avatarSize?: number;
        transition?: string | boolean | TransitionProps;
        offset?: number;
    };
    items: Record<string, any> | {
        color?: string;
        pattern?: string;
    }[];
    itemValue: string;
    density: import("../../composables/density.js").Density;
    itemTitle: string;
    itemKey: string;
    reveal: boolean | {
        duration?: number;
    };
    palette: (string | {
        color?: string;
        pattern?: string;
    })[];
    hoverScale: string | number;
    hideSlice: boolean;
} & {
    gap?: string | number | undefined;
    rotate?: string | number | undefined;
    title?: string | undefined;
    rounded?: string | number | undefined;
    bgColor?: string | undefined;
    innerCut?: string | number | undefined;
    gaugeCut?: string | number | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        $stable?: boolean;
    } | {
        center?: ((arg: {
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        legend?: ((arg: {
            isActive: (item: PieItem) => boolean;
            toggle: (item: PieItem) => void;
            items: PieItem[];
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        'legend-text'?: ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        tooltip?: ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        center?: false | ((arg: {
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        legend?: false | ((arg: {
            isActive: (item: PieItem) => boolean;
            toggle: (item: PieItem) => void;
            items: PieItem[];
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        'legend-text'?: false | ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        tooltip?: false | ((arg: {
            item: PieItem;
            total: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:center"?: false | ((arg: {
        total: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:legend"?: false | ((arg: {
        isActive: (item: PieItem) => boolean;
        toggle: (item: PieItem) => void;
        items: PieItem[];
        total: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:legend-text"?: false | ((arg: {
        item: PieItem;
        total: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:tooltip"?: false | ((arg: {
        item: PieItem;
        total: number;
    }) => import("vue").VNodeChild) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    animation: boolean | {
        duration?: number;
        easing?: keyof typeof import("../../util/index.js").easingPatterns;
    };
    legend: boolean | {
        position?: "left" | "top" | "right" | "bottom";
        textFormat?: TextTemplate;
    };
    size: string | number;
    tooltip: boolean | {
        titleFormat?: TextTemplate;
        subtitleFormat?: TextTemplate;
        avatarSize?: number;
        transition?: string | boolean | TransitionProps;
        offset?: number;
    };
    items: Record<string, any> | {
        color?: string;
        pattern?: string;
    }[];
    itemValue: string;
    density: import("../../composables/density.js").Density;
    itemTitle: string;
    itemKey: string;
    reveal: boolean | {
        duration?: number;
    };
    palette: (string | {
        color?: string;
        pattern?: string;
    })[];
    hoverScale: string | number;
    hideSlice: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    center: (arg: {
        total: number;
    }) => import("vue").VNode[];
    legend: (arg: {
        isActive: (item: PieItem) => boolean;
        toggle: (item: PieItem) => void;
        items: PieItem[];
        total: number;
    }) => import("vue").VNode[];
    'legend-text': (arg: {
        item: PieItem;
        total: number;
    }) => import("vue").VNode[];
    title: () => import("vue").VNode[];
    tooltip: (arg: {
        item: PieItem;
        total: number;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    animation: {
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        }>;
        default: boolean;
    };
    gap: (StringConstructor | NumberConstructor)[];
    rounded: (StringConstructor | NumberConstructor)[];
    reveal: {
        type: PropType<boolean | {
            duration?: number;
        }>;
        default: boolean;
    };
    innerCut: (StringConstructor | NumberConstructor)[];
    hoverScale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideSlice: BooleanConstructor;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    title: StringConstructor;
    bgColor: StringConstructor;
    items: {
        type: PropType<Record<string, any> | {
            color?: string;
            pattern?: string;
        }[]>;
        default: () => never[];
    };
    palette: {
        type: PropType<({
            color?: string;
            pattern?: string;
        } | string)[]>;
        default: () => never[];
    };
    itemKey: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: (StringConstructor | NumberConstructor)[];
    gaugeCut: (StringConstructor | NumberConstructor)[];
    legend: {
        type: PropType<boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        }>;
        default: boolean;
    };
    tooltip: {
        type: PropType<boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        }>;
        default: boolean;
    };
}, import("vue").ExtractPropTypes<{
    animation: {
        type: PropType<boolean | {
            duration?: number;
            easing?: keyof typeof import("../../util/index.js").easingPatterns;
        }>;
        default: boolean;
    };
    gap: (StringConstructor | NumberConstructor)[];
    rounded: (StringConstructor | NumberConstructor)[];
    reveal: {
        type: PropType<boolean | {
            duration?: number;
        }>;
        default: boolean;
    };
    innerCut: (StringConstructor | NumberConstructor)[];
    hoverScale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideSlice: BooleanConstructor;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    title: StringConstructor;
    bgColor: StringConstructor;
    items: {
        type: PropType<Record<string, any> | {
            color?: string;
            pattern?: string;
        }[]>;
        default: () => never[];
    };
    palette: {
        type: PropType<({
            color?: string;
            pattern?: string;
        } | string)[]>;
        default: () => never[];
    };
    itemKey: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: (StringConstructor | NumberConstructor)[];
    gaugeCut: (StringConstructor | NumberConstructor)[];
    legend: {
        type: PropType<boolean | {
            position?: "left" | "top" | "right" | "bottom";
            textFormat?: TextTemplate;
        }>;
        default: boolean;
    };
    tooltip: {
        type: PropType<boolean | {
            titleFormat?: TextTemplate;
            subtitleFormat?: TextTemplate;
            avatarSize?: number;
            transition?: string | boolean | TransitionProps;
            offset?: number;
        }>;
        default: boolean;
    };
}>>;
export type VPie = InstanceType<typeof VPie>;
