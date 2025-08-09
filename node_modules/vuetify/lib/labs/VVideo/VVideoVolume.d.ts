import { VMenu } from "../../components/VMenu/VMenu.js";
import { VSlider } from "../../components/VSlider/VSlider.js";
import type { PropType } from 'vue';
export declare const makeVVideoVolumeProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    inline?: unknown;
    label?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    menuProps?: unknown;
    sliderProps?: unknown;
    onClick?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    menuProps: unknown extends Defaults["menuProps"] ? PropType<Partial<{
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | null;
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
        disableInitialFocus: boolean;
    }> & Omit<{
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | null;
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
        disableInitialFocus: boolean;
        offset?: string | number | number[] | undefined;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus">> : {
        type: PropType<unknown extends Defaults["menuProps"] ? Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus"> : (Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus">) | Defaults["menuProps"]>;
        default: unknown extends Defaults["menuProps"] ? Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus"> : NonNullable<Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus">> | Defaults["menuProps"];
    };
    sliderProps: unknown extends Defaults["sliderProps"] ? PropType<Pick<Partial<{
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbLabel: boolean | "always" | undefined;
        thumbSize: string | number;
        noKeyboard: boolean;
    }> & Omit<{
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbSize: string | number;
        noKeyboard: boolean;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        thumbColor?: string | undefined;
        thumbLabel?: boolean | "always" | undefined;
        ticks?: readonly number[] | Record<number, string> | undefined;
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("../../components/VSlider/slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        onStart?: ((value: number) => any) | undefined;
        onEnd?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize">> : {
        type: PropType<unknown extends Defaults["sliderProps"] ? Pick<Partial<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
            noKeyboard: boolean;
        }> & Omit<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
            noKeyboard: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            onStart?: ((value: number) => any) | undefined;
            onEnd?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> : Pick<Partial<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
            noKeyboard: boolean;
        }> & Omit<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
            noKeyboard: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            onStart?: ((value: number) => any) | undefined;
            onEnd?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> | Defaults["sliderProps"]>;
        default: unknown extends Defaults["sliderProps"] ? Pick<Partial<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
            noKeyboard: boolean;
        }> & Omit<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
            noKeyboard: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            onStart?: ((value: number) => any) | undefined;
            onEnd?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> : Pick<Partial<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
            noKeyboard: boolean;
        }> & Omit<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
            noKeyboard: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            onStart?: ((value: number) => any) | undefined;
            onEnd?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> | Defaults["sliderProps"];
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent | KeyboardEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent | KeyboardEvent) => void : ((args_0: MouseEvent | KeyboardEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent | KeyboardEvent) => void : ((args_0: MouseEvent | KeyboardEvent) => void) | Defaults["onClick"];
    };
};
export declare const VVideoVolume: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
    } & {
        label?: string | undefined;
        class?: any;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        menuProps?: (Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus">) | undefined;
        sliderProps?: Pick<Partial<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
            noKeyboard: boolean;
        }> & Omit<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
            noKeyboard: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            onStart?: ((value: number) => any) | undefined;
            onEnd?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> | undefined;
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
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (val: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
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
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
    } & {
        label?: string | undefined;
        class?: any;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        menuProps?: (Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: {
                    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                        default: () => import("vue").VNode[];
                    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                        P: {};
                        B: {};
                        D: {};
                        C: {};
                        M: {};
                        Defaults: {};
                    }, {} & {
                        target?: HTMLElement | [x: number, y: number] | undefined;
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
                    }, () => JSX.Element, {}, {}, {}, {}>;
                    __isFragment?: never;
                    __isTeleport?: never;
                    __isSuspense?: never;
                } & import("vue").ComponentOptionsBase<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }, import("vue").ExtractPropTypes<{
                    target: PropType<HTMLElement | [x: number, y: number]>;
                }>>;
            } | null;
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            disableInitialFocus: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus">) | undefined;
        sliderProps?: Pick<Partial<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
            noKeyboard: boolean;
        }> & Omit<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            min: string | number;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            elevation: string | number;
            messages: string | readonly string[];
            rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            modelValue: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            ripple: boolean;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
            noKeyboard: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            iconColor?: string | boolean | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                'thumb-label'?: false | ((arg: {
                    modelValue: number;
                }) => import("vue").VNodeChild) | undefined;
                'tick-label'?: false | ((arg: {
                    tick: import("../../components/VSlider/slider.js").Tick;
                    index: number;
                }) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:tick-label"?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            onStart?: ((value: number) => any) | undefined;
            onEnd?: ((value: number) => any) | undefined;
            "onUpdate:modelValue"?: ((v: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> | undefined;
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
    } & {
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inline: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    modelValue: number;
} & {
    label?: string | undefined;
    class?: any;
    onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
    menuProps?: (Partial<{
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | null;
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
        disableInitialFocus: boolean;
    }> & Omit<{
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: {
                new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
                    default: () => import("vue").VNode[];
                }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                    P: {};
                    B: {};
                    D: {};
                    C: {};
                    M: {};
                    Defaults: {};
                }, {} & {
                    target?: HTMLElement | [x: number, y: number] | undefined;
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
                }, () => JSX.Element, {}, {}, {}, {}>;
                __isFragment?: never;
                __isTeleport?: never;
                __isSuspense?: never;
            } & import("vue").ComponentOptionsBase<{} & {
                target?: HTMLElement | [x: number, y: number] | undefined;
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
            }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
                default: () => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }, import("vue").ExtractPropTypes<{
                target: PropType<HTMLElement | [x: number, y: number]>;
            }>>;
        } | null;
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../../types.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../../types.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
        disableInitialFocus: boolean;
        offset?: string | number | number[] | undefined;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu" | "disableInitialFocus">) | undefined;
    sliderProps?: Pick<Partial<{
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbLabel: boolean | "always" | undefined;
        thumbSize: string | number;
        noKeyboard: boolean;
    }> & Omit<{
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly (string | boolean | PromiseLike<import("../../composables/validation.js").ValidationResult> | ((value: any) => import("../../composables/validation.js").ValidationResult) | ((value: any) => PromiseLike<import("../../composables/validation.js").ValidationResult>) | [string, any, (string | undefined)?])[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbSize: string | number;
        noKeyboard: boolean;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: (((args_0: boolean) => void) & ((value: boolean) => any)) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        iconColor?: string | boolean | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        thumbColor?: string | undefined;
        thumbLabel?: boolean | "always" | undefined;
        ticks?: readonly number[] | Record<number, string> | undefined;
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | {
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: false | ((arg: {
                tick: import("../../components/VSlider/slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("../../components/VSlider/slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        onStart?: ((value: number) => any) | undefined;
        onEnd?: ((value: number) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "reverse" | "max" | "error" | "min" | "direction" | "style" | "disabled" | "readonly" | "step" | "elevation" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "modelValue" | "density" | "rounded" | "tile" | "ripple" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "showTicks" | "tickSize" | "trackSize" | "thumbLabel" | "thumbSize" | "noKeyboard">, "width" | "color" | "maxWidth" | "disabled" | "trackColor" | "thumbSize"> | undefined;
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
} & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: number) => true;
}, string, {
    inline: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    modelValue: number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    inline: BooleanConstructor;
    label: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    menuProps: PropType<VMenu["$props"]>;
    sliderProps: PropType<Pick<VSlider["$props"], "color" | "disabled" | "thumbSize" | "trackColor" | "maxWidth" | "width">>;
    onClick: PropType<(args_0: MouseEvent | KeyboardEvent) => void>;
}, import("vue").ExtractPropTypes<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    inline: BooleanConstructor;
    label: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    menuProps: PropType<VMenu["$props"]>;
    sliderProps: PropType<Pick<VSlider["$props"], "color" | "disabled" | "thumbSize" | "trackColor" | "maxWidth" | "width">>;
    onClick: PropType<(args_0: MouseEvent | KeyboardEvent) => void>;
}>>;
export type VVideoVolume = InstanceType<typeof VVideoVolume>;
