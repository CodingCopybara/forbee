import { VVideoVolume } from './VVideoVolume.js';
import type { PropType, Ref } from 'vue';
export type VVideoControlsActionsSlot = {
    play: () => void;
    pause: () => void;
    skipTo: (v: number) => void;
    volume: Ref<number>;
    playing: boolean;
    progress: number;
    toggleMuted: () => void;
    fullscreen: boolean;
    toggleFullscreen: () => void;
    labels: Record<string, string>;
};
export type VVideoControlsSlots = {
    default: VVideoControlsActionsSlot;
    prepend: VVideoControlsActionsSlot;
    append: VVideoControlsActionsSlot;
};
declare const allowedVariants: readonly ["hidden", "default", "tube", "mini"];
export type VVideoControlsVariant = typeof allowedVariants[number];
export declare const makeVVideoControlsProps: <Defaults extends {
    theme?: unknown;
    elevation?: unknown;
    density?: unknown;
    color?: unknown;
    backgroundColor?: unknown;
    trackColor?: unknown;
    playing?: unknown;
    hidePlay?: unknown;
    hideVolume?: unknown;
    hideFullscreen?: unknown;
    fullscreen?: unknown;
    floating?: unknown;
    splitTime?: unknown;
    pills?: unknown;
    detached?: unknown;
    progress?: unknown;
    duration?: unknown;
    volume?: unknown;
    variant?: unknown;
    volumeProps?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    backgroundColor: unknown extends Defaults["backgroundColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["backgroundColor"] ? string : string | Defaults["backgroundColor"]>;
        default: unknown extends Defaults["backgroundColor"] ? string : string | Defaults["backgroundColor"];
    };
    trackColor: unknown extends Defaults["trackColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"]>;
        default: unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"];
    };
    playing: unknown extends Defaults["playing"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["playing"] ? boolean : boolean | Defaults["playing"]>;
        default: unknown extends Defaults["playing"] ? boolean : boolean | Defaults["playing"];
    };
    hidePlay: unknown extends Defaults["hidePlay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hidePlay"] ? boolean : boolean | Defaults["hidePlay"]>;
        default: unknown extends Defaults["hidePlay"] ? boolean : boolean | Defaults["hidePlay"];
    };
    hideVolume: unknown extends Defaults["hideVolume"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideVolume"] ? boolean : boolean | Defaults["hideVolume"]>;
        default: unknown extends Defaults["hideVolume"] ? boolean : boolean | Defaults["hideVolume"];
    };
    hideFullscreen: unknown extends Defaults["hideFullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideFullscreen"] ? boolean : boolean | Defaults["hideFullscreen"]>;
        default: unknown extends Defaults["hideFullscreen"] ? boolean : boolean | Defaults["hideFullscreen"];
    };
    fullscreen: unknown extends Defaults["fullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fullscreen"] ? boolean : boolean | Defaults["fullscreen"]>;
        default: unknown extends Defaults["fullscreen"] ? boolean : boolean | Defaults["fullscreen"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    splitTime: unknown extends Defaults["splitTime"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["splitTime"] ? boolean : boolean | Defaults["splitTime"]>;
        default: unknown extends Defaults["splitTime"] ? boolean : boolean | Defaults["splitTime"];
    };
    pills: unknown extends Defaults["pills"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["pills"] ? boolean : boolean | Defaults["pills"]>;
        default: unknown extends Defaults["pills"] ? boolean : boolean | Defaults["pills"];
    };
    detached: unknown extends Defaults["detached"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["detached"] ? boolean : boolean | Defaults["detached"]>;
        default: unknown extends Defaults["detached"] ? boolean : boolean | Defaults["detached"];
    };
    progress: unknown extends Defaults["progress"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["progress"] ? number : number | Defaults["progress"]>;
        default: unknown extends Defaults["progress"] ? number : number | Defaults["progress"];
    };
    duration: unknown extends Defaults["duration"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["duration"] ? number : number | Defaults["duration"]>;
        default: unknown extends Defaults["duration"] ? number : number | Defaults["duration"];
    };
    volume: unknown extends Defaults["volume"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["volume"] ? string | number : string | number | Defaults["volume"]>;
        default: unknown extends Defaults["volume"] ? string | number : NonNullable<string | number> | Defaults["volume"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<VVideoControlsVariant>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<VVideoControlsVariant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "default" | "hidden" | "tube" | "mini" : "default" | "hidden" | "tube" | "mini" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "default" | "hidden" | "tube" | "mini" : Defaults["variant"] | NonNullable<"default" | "hidden" | "tube" | "mini">;
    };
    volumeProps: unknown extends Defaults["volumeProps"] ? PropType<Pick<Partial<{
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
    }> & Omit<{
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
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
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
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
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps">> : {
        type: PropType<unknown extends Defaults["volumeProps"] ? Pick<Partial<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
        }> & Omit<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
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
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild);
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: Ref<boolean>;
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
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | (() => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> : Pick<Partial<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
        }> & Omit<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
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
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild);
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: Ref<boolean>;
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
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | (() => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> | Defaults["volumeProps"]>;
        default: unknown extends Defaults["volumeProps"] ? Pick<Partial<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
        }> & Omit<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
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
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild);
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: Ref<boolean>;
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
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | (() => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> : Pick<Partial<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
        }> & Omit<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
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
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild);
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: Ref<boolean>;
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
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | (() => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> | Defaults["volumeProps"];
    };
};
export declare const VVideoControls: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        detached: boolean;
        variant: "default" | "hidden" | "tube" | "mini";
        progress: number;
        playing: boolean;
        duration: number;
        fullscreen: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
    } & {
        backgroundColor?: string | undefined;
        color?: string | undefined;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        volume?: string | number | undefined;
        trackColor?: string | undefined;
        volumeProps?: Pick<Partial<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
        }> & Omit<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
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
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild);
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: Ref<boolean>;
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
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | (() => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onSkip?: ((val: number) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
        "onClick:fullscreen"?: (() => any) | undefined;
    }, {
        toggleMuted: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:playing': (val: boolean) => true;
        'update:progress': (val: number) => true;
        'update:volume': (val: number) => true;
        skip: (val: number) => true;
        'click:fullscreen': () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        detached: boolean;
        variant: "default" | "hidden" | "tube" | "mini";
        progress: number;
        playing: boolean;
        duration: number;
        fullscreen: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
        prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
        append: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        detached: boolean;
        variant: "default" | "hidden" | "tube" | "mini";
        progress: number;
        playing: boolean;
        duration: number;
        fullscreen: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
    } & {
        backgroundColor?: string | undefined;
        color?: string | undefined;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        volume?: string | number | undefined;
        trackColor?: string | undefined;
        volumeProps?: Pick<Partial<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
        }> & Omit<{
            inline: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            modelValue: number;
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
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild);
                'v-slots'?: {
                    default?: false | ((arg: {
                        isActive: Ref<boolean>;
                    }) => import("vue").VNodeChild) | undefined;
                    activator?: false | ((arg: {
                        isActive: boolean;
                        props: Record<string, any>;
                        targetRef: import("../../util/index.js").TemplateRef;
                    }) => import("vue").VNodeChild) | undefined;
                } | undefined;
                "v-slot:default"?: false | ((arg: {
                    isActive: Ref<boolean>;
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
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | {
                default?: (() => import("vue").VNodeChild) | undefined;
            } | (() => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | (() => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: number) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onSkip?: ((val: number) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
        "onClick:fullscreen"?: (() => any) | undefined;
    }, {
        toggleMuted: () => void;
    }, {}, {}, {}, {
        detached: boolean;
        variant: "default" | "hidden" | "tube" | "mini";
        progress: number;
        playing: boolean;
        duration: number;
        fullscreen: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    detached: boolean;
    variant: "default" | "hidden" | "tube" | "mini";
    progress: number;
    playing: boolean;
    duration: number;
    fullscreen: boolean;
    density: import("../../composables/density.js").Density;
    floating: boolean;
    hidePlay: boolean;
    hideVolume: boolean;
    hideFullscreen: boolean;
    splitTime: boolean;
    pills: boolean;
} & {
    backgroundColor?: string | undefined;
    color?: string | undefined;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    volume?: string | number | undefined;
    trackColor?: string | undefined;
    volumeProps?: Pick<Partial<{
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
    }> & Omit<{
        inline: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        modelValue: number;
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
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
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
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "inline" | "direction" | "style" | "modelValue">, "inline" | "direction" | "menuProps" | "sliderProps"> | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | {
        default?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
} & {
    onSkip?: ((val: number) => any) | undefined;
    "onUpdate:playing"?: ((val: boolean) => any) | undefined;
    "onUpdate:progress"?: ((val: number) => any) | undefined;
    "onUpdate:volume"?: ((val: number) => any) | undefined;
    "onClick:fullscreen"?: (() => any) | undefined;
}, {
    toggleMuted: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:playing': (val: boolean) => true;
    'update:progress': (val: number) => true;
    'update:volume': (val: number) => true;
    skip: (val: number) => true;
    'click:fullscreen': () => true;
}, string, {
    detached: boolean;
    variant: "default" | "hidden" | "tube" | "mini";
    progress: number;
    playing: boolean;
    duration: number;
    fullscreen: boolean;
    density: import("../../composables/density.js").Density;
    floating: boolean;
    hidePlay: boolean;
    hideVolume: boolean;
    hideFullscreen: boolean;
    splitTime: boolean;
    pills: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
    prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
    append: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    backgroundColor: StringConstructor;
    trackColor: StringConstructor;
    playing: BooleanConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    fullscreen: BooleanConstructor;
    floating: BooleanConstructor;
    splitTime: BooleanConstructor;
    pills: BooleanConstructor;
    detached: BooleanConstructor;
    progress: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    volume: (StringConstructor | NumberConstructor)[];
    variant: {
        type: PropType<VVideoControlsVariant>;
        default: string;
        validator: (v: any) => boolean;
    };
    volumeProps: PropType<Pick<VVideoVolume["$props"], "direction" | "inline" | "sliderProps" | "menuProps">>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    color: StringConstructor;
    backgroundColor: StringConstructor;
    trackColor: StringConstructor;
    playing: BooleanConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    fullscreen: BooleanConstructor;
    floating: BooleanConstructor;
    splitTime: BooleanConstructor;
    pills: BooleanConstructor;
    detached: BooleanConstructor;
    progress: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    volume: (StringConstructor | NumberConstructor)[];
    variant: {
        type: PropType<VVideoControlsVariant>;
        default: string;
        validator: (v: any) => boolean;
    };
    volumeProps: PropType<Pick<VVideoVolume["$props"], "direction" | "inline" | "sliderProps" | "menuProps">>;
}>>;
export type VVideoControls = InstanceType<typeof VVideoControls>;

