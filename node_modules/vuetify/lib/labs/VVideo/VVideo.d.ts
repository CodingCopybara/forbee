import { VVideoControls } from './VVideoControls.js';
import type { Component, PropType, TransitionProps } from 'vue';
import type { VVideoControlsActionsSlot, VVideoControlsVariant } from './VVideoControls.js';
import type { LoaderSlotProps } from "../../composables/loader.js";
export type VVideoSlots = {
    header: never;
    controls: VVideoControlsActionsSlot;
    prepend: VVideoControlsActionsSlot;
    append: VVideoControlsActionsSlot;
    loader: LoaderSlotProps;
    sources: never;
};
declare const allowedVariants: readonly ["background", "player"];
type Variant = typeof allowedVariants[number];
export declare const makeVVideoProps: <Defaults extends {
    detached?: unknown;
    progress?: unknown;
    backgroundColor?: unknown;
    color?: unknown;
    playing?: unknown;
    theme?: unknown;
    duration?: unknown;
    elevation?: unknown;
    volume?: unknown;
    density?: unknown;
    floating?: unknown;
    trackColor?: unknown;
    hidePlay?: unknown;
    hideVolume?: unknown;
    hideFullscreen?: unknown;
    splitTime?: unknown;
    pills?: unknown;
    volumeProps?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    autoplay?: unknown;
    muted?: unknown;
    eager?: unknown;
    src?: unknown;
    type?: unknown;
    image?: unknown;
    hideOverlay?: unknown;
    noFullscreen?: unknown;
    startAt?: unknown;
    variant?: unknown;
    controlsTransition?: unknown;
    controlsVariant?: unknown;
    controlsProps?: unknown;
    rounded?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    backgroundColor: unknown extends Defaults["backgroundColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["backgroundColor"] ? string : string | Defaults["backgroundColor"]>;
        default: unknown extends Defaults["backgroundColor"] ? string : string | Defaults["backgroundColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    playing: unknown extends Defaults["playing"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["playing"] ? boolean : boolean | Defaults["playing"]>;
        default: unknown extends Defaults["playing"] ? boolean : boolean | Defaults["playing"];
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
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
    volume: unknown extends Defaults["volume"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["volume"] ? string | number : string | number | Defaults["volume"]>;
        default: unknown extends Defaults["volume"] ? string | number : NonNullable<string | number> | Defaults["volume"];
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
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    trackColor: unknown extends Defaults["trackColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"]>;
        default: unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"];
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
    splitTime: unknown extends Defaults["splitTime"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["splitTime"] ? boolean : boolean | Defaults["splitTime"]>;
        default: unknown extends Defaults["splitTime"] ? boolean : boolean | Defaults["splitTime"];
    };
    pills: unknown extends Defaults["pills"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["pills"] ? boolean : boolean | Defaults["pills"]>;
        default: unknown extends Defaults["pills"] ? boolean : boolean | Defaults["pills"];
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
            transition: string | boolean | (TransitionProps & {
                component?: Component;
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
            transition: string | boolean | (TransitionProps & {
                component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minHeight: unknown extends Defaults["minHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : NonNullable<string | number> | Defaults["minHeight"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
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
    autoplay: unknown extends Defaults["autoplay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autoplay"] ? boolean : boolean | Defaults["autoplay"]>;
        default: unknown extends Defaults["autoplay"] ? boolean : boolean | Defaults["autoplay"];
    };
    muted: unknown extends Defaults["muted"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["muted"] ? boolean : boolean | Defaults["muted"]>;
        default: unknown extends Defaults["muted"] ? boolean : boolean | Defaults["muted"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    src: unknown extends Defaults["src"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["src"] ? string : string | Defaults["src"]>;
        default: unknown extends Defaults["src"] ? string : string | Defaults["src"];
    };
    type: unknown extends Defaults["type"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    hideOverlay: unknown extends Defaults["hideOverlay"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideOverlay"] ? boolean : boolean | Defaults["hideOverlay"]>;
        default: unknown extends Defaults["hideOverlay"] ? boolean : boolean | Defaults["hideOverlay"];
    };
    noFullscreen: unknown extends Defaults["noFullscreen"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noFullscreen"] ? boolean : boolean | Defaults["noFullscreen"]>;
        default: unknown extends Defaults["noFullscreen"] ? boolean : boolean | Defaults["noFullscreen"];
    };
    startAt: unknown extends Defaults["startAt"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["startAt"] ? string | number : string | number | Defaults["startAt"]>;
        default: unknown extends Defaults["startAt"] ? string | number : NonNullable<string | number> | Defaults["startAt"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "background" | "player" : "background" | "player" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "background" | "player" : Defaults["variant"] | NonNullable<"background" | "player">;
    };
    controlsTransition: unknown extends Defaults["controlsTransition"] ? {
        type: PropType<null | string | boolean | (TransitionProps & {
            component?: any;
        })>;
        component: Component;
    } : Omit<{
        type: PropType<null | string | boolean | (TransitionProps & {
            component?: any;
        })>;
        component: Component;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["controlsTransition"] ? string | boolean | (TransitionProps & {
            component?: any;
        }) | null : string | boolean | (TransitionProps & {
            component?: any;
        }) | Defaults["controlsTransition"] | null>;
        default: unknown extends Defaults["controlsTransition"] ? string | boolean | (TransitionProps & {
            component?: any;
        }) | null : Defaults["controlsTransition"] | NonNullable<string | boolean | (TransitionProps & {
            component?: any;
        }) | null>;
    };
    controlsVariant: unknown extends Defaults["controlsVariant"] ? {
        type: PropType<VVideoControlsVariant>;
        default: string;
    } : Omit<{
        type: PropType<VVideoControlsVariant>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["controlsVariant"] ? "default" | "hidden" | "tube" | "mini" : "default" | "hidden" | "tube" | "mini" | Defaults["controlsVariant"]>;
        default: unknown extends Defaults["controlsVariant"] ? "default" | "hidden" | "tube" | "mini" : NonNullable<"default" | "hidden" | "tube" | "mini"> | Defaults["controlsVariant"];
    };
    controlsProps: unknown extends Defaults["controlsProps"] ? {
        type: PropType<VVideoControls["$props"]>;
    } : Omit<{
        type: PropType<VVideoControls["$props"]>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["controlsProps"] ? Partial<{
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
        }> & Omit<{
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills"> : (Partial<{
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
        }> & Omit<{
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills">) | Defaults["controlsProps"]>;
        default: unknown extends Defaults["controlsProps"] ? Partial<{
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
        }> & Omit<{
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills"> : Defaults["controlsProps"] | NonNullable<Partial<{
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
        }> & Omit<{
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills">>;
    };
    rounded: unknown extends Defaults["rounded"] ? PropType<string | number | boolean | (string | number | boolean)[]> : {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean | (string | number | boolean)[] : string | number | boolean | (string | number | boolean)[] | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean | (string | number | boolean)[] : Defaults["rounded"] | NonNullable<string | number | boolean | (string | number | boolean)[]>;
    };
};
export declare const VVideo: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        detached: boolean;
        variant: "background" | "player";
        progress: number;
        style: import("vue").StyleValue;
        playing: boolean;
        eager: boolean;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hideOverlay: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
        noFullscreen: boolean;
        controlsVariant: "default" | "hidden" | "tube" | "mini";
    } & {
        type?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        src?: string | undefined;
        elevation?: string | number | undefined;
        volume?: string | number | undefined;
        rounded?: string | number | boolean | (string | number | boolean)[] | undefined;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
        startAt?: string | number | undefined;
        controlsTransition?: string | boolean | (TransitionProps & {
            component?: any;
        }) | null | undefined;
        controlsProps?: (Partial<{
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
        }> & Omit<{
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills">) | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            header?: (() => import("vue").VNodeChild) | undefined;
            controls?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => import("vue").VNodeChild) | undefined;
            controls?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:controls"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onLoaded?: ((element: HTMLVideoElement) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
    }, {
        skipTo: (v: number) => void;
        toggleFullscreen: () => Promise<void>;
        _: import("vue").ComponentInternalInstance;
        toggleMuted: () => void;
        _allExposed: {
            toggleMuted: () => void;
        } | {
            skipTo: (v: number) => void;
            toggleFullscreen: () => Promise<void>;
        };
        video: import("vue").Ref<HTMLVideoElement | undefined, HTMLVideoElement | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        loaded: (element: HTMLVideoElement) => true;
        'update:playing': (val: boolean) => true;
        'update:progress': (val: number) => true;
        'update:volume': (val: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        detached: boolean;
        variant: "background" | "player";
        progress: number;
        style: import("vue").StyleValue;
        playing: boolean;
        eager: boolean;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hideOverlay: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
        noFullscreen: boolean;
        controlsVariant: "default" | "hidden" | "tube" | "mini";
    }, true, {}, import("vue").SlotsType<Partial<{
        header: () => import("vue").VNode[];
        controls: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
        prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
        append: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
        loader: (arg: LoaderSlotProps) => import("vue").VNode[];
        sources: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        detached: boolean;
        variant: "background" | "player";
        progress: number;
        style: import("vue").StyleValue;
        playing: boolean;
        eager: boolean;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hideOverlay: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
        noFullscreen: boolean;
        controlsVariant: "default" | "hidden" | "tube" | "mini";
    } & {
        type?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        backgroundColor?: string | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        src?: string | undefined;
        elevation?: string | number | undefined;
        volume?: string | number | undefined;
        rounded?: string | number | boolean | (string | number | boolean)[] | undefined;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
        startAt?: string | number | undefined;
        controlsTransition?: string | boolean | (TransitionProps & {
            component?: any;
        }) | null | undefined;
        controlsProps?: (Partial<{
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
        }> & Omit<{
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
                    transition: string | boolean | (TransitionProps & {
                        component?: Component;
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
            "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            onSkip?: ((val: number) => any) | undefined;
            "onUpdate:playing"?: ((val: boolean) => any) | undefined;
            "onUpdate:progress"?: ((val: number) => any) | undefined;
            "onUpdate:volume"?: ((val: number) => any) | undefined;
            "onClick:fullscreen"?: (() => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills">) | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            header?: (() => import("vue").VNodeChild) | undefined;
            controls?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => import("vue").VNodeChild) | undefined;
            controls?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:controls"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onLoaded?: ((element: HTMLVideoElement) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
    }, {
        skipTo: (v: number) => void;
        toggleFullscreen: () => Promise<void>;
        _: import("vue").ComponentInternalInstance;
        toggleMuted: () => void;
        _allExposed: {
            toggleMuted: () => void;
        } | {
            skipTo: (v: number) => void;
            toggleFullscreen: () => Promise<void>;
        };
        video: import("vue").Ref<HTMLVideoElement | undefined, HTMLVideoElement | undefined>;
    }, {}, {}, {}, {
        detached: boolean;
        variant: "background" | "player";
        progress: number;
        style: import("vue").StyleValue;
        playing: boolean;
        eager: boolean;
        duration: number;
        autoplay: boolean;
        muted: boolean;
        density: import("../../composables/density.js").Density;
        floating: boolean;
        hideOverlay: boolean;
        hidePlay: boolean;
        hideVolume: boolean;
        hideFullscreen: boolean;
        splitTime: boolean;
        pills: boolean;
        noFullscreen: boolean;
        controlsVariant: "default" | "hidden" | "tube" | "mini";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    detached: boolean;
    variant: "background" | "player";
    progress: number;
    style: import("vue").StyleValue;
    playing: boolean;
    eager: boolean;
    duration: number;
    autoplay: boolean;
    muted: boolean;
    density: import("../../composables/density.js").Density;
    floating: boolean;
    hideOverlay: boolean;
    hidePlay: boolean;
    hideVolume: boolean;
    hideFullscreen: boolean;
    splitTime: boolean;
    pills: boolean;
    noFullscreen: boolean;
    controlsVariant: "default" | "hidden" | "tube" | "mini";
} & {
    type?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    backgroundColor?: string | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    image?: string | undefined;
    class?: any;
    theme?: string | undefined;
    src?: string | undefined;
    elevation?: string | number | undefined;
    volume?: string | number | undefined;
    rounded?: string | number | boolean | (string | number | boolean)[] | undefined;
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
            transition: string | boolean | (TransitionProps & {
                component?: Component;
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
            transition: string | boolean | (TransitionProps & {
                component?: Component;
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
    startAt?: string | number | undefined;
    controlsTransition?: string | boolean | (TransitionProps & {
        component?: any;
    }) | null | undefined;
    controlsProps?: (Partial<{
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
    }> & Omit<{
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
                transition: string | boolean | (TransitionProps & {
                    component?: Component;
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
        "v-slot:default"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        onSkip?: ((val: number) => any) | undefined;
        "onUpdate:playing"?: ((val: boolean) => any) | undefined;
        "onUpdate:progress"?: ((val: number) => any) | undefined;
        "onUpdate:volume"?: ((val: number) => any) | undefined;
        "onClick:fullscreen"?: (() => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "detached" | "variant" | "progress" | "playing" | "duration" | "fullscreen" | "density" | "floating" | "hidePlay" | "hideVolume" | "hideFullscreen" | "splitTime" | "pills">) | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        $stable?: boolean;
    } | {
        header?: (() => import("vue").VNodeChild) | undefined;
        controls?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        sources?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | (() => import("vue").VNodeChild) | undefined;
        controls?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        sources?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:controls"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VVideoControlsActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onLoaded?: ((element: HTMLVideoElement) => any) | undefined;
    "onUpdate:playing"?: ((val: boolean) => any) | undefined;
    "onUpdate:progress"?: ((val: number) => any) | undefined;
    "onUpdate:volume"?: ((val: number) => any) | undefined;
}, {
    skipTo: (v: number) => void;
    toggleFullscreen: () => Promise<void>;
    _: import("vue").ComponentInternalInstance;
    toggleMuted: () => void;
    _allExposed: {
        toggleMuted: () => void;
    } | {
        skipTo: (v: number) => void;
        toggleFullscreen: () => Promise<void>;
    };
    video: import("vue").Ref<HTMLVideoElement | undefined, HTMLVideoElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    loaded: (element: HTMLVideoElement) => true;
    'update:playing': (val: boolean) => true;
    'update:progress': (val: number) => true;
    'update:volume': (val: number) => true;
}, string, {
    detached: boolean;
    variant: "background" | "player";
    progress: number;
    style: import("vue").StyleValue;
    playing: boolean;
    eager: boolean;
    duration: number;
    autoplay: boolean;
    muted: boolean;
    density: import("../../composables/density.js").Density;
    floating: boolean;
    hideOverlay: boolean;
    hidePlay: boolean;
    hideVolume: boolean;
    hideFullscreen: boolean;
    splitTime: boolean;
    pills: boolean;
    noFullscreen: boolean;
    controlsVariant: "default" | "hidden" | "tube" | "mini";
}, {}, string, import("vue").SlotsType<Partial<{
    header: () => import("vue").VNode[];
    controls: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
    prepend: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
    append: (arg: VVideoControlsActionsSlot) => import("vue").VNode[];
    loader: (arg: LoaderSlotProps) => import("vue").VNode[];
    sources: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    detached: BooleanConstructor;
    progress: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: StringConstructor;
    color: StringConstructor;
    playing: BooleanConstructor;
    theme: StringConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    volume: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    floating: BooleanConstructor;
    trackColor: StringConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    splitTime: BooleanConstructor;
    pills: BooleanConstructor;
    volumeProps: PropType<Pick<import("./VVideoVolume.js").VVideoVolume["$props"], "direction" | "inline" | "sliderProps" | "menuProps">>;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    autoplay: BooleanConstructor;
    muted: BooleanConstructor;
    eager: BooleanConstructor;
    src: StringConstructor;
    type: StringConstructor;
    image: StringConstructor;
    hideOverlay: BooleanConstructor;
    noFullscreen: BooleanConstructor;
    startAt: (StringConstructor | NumberConstructor)[];
    variant: {
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    controlsTransition: {
        type: PropType<null | string | boolean | (TransitionProps & {
            component?: any;
        })>;
        component: Component;
    };
    controlsVariant: {
        type: PropType<VVideoControlsVariant>;
        default: string;
    };
    controlsProps: {
        type: PropType<VVideoControls["$props"]>;
    };
    rounded: PropType<boolean | number | string | (boolean | number | string)[]>;
}, import("vue").ExtractPropTypes<{
    detached: BooleanConstructor;
    progress: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: StringConstructor;
    color: StringConstructor;
    playing: BooleanConstructor;
    theme: StringConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    volume: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    floating: BooleanConstructor;
    trackColor: StringConstructor;
    hidePlay: BooleanConstructor;
    hideVolume: BooleanConstructor;
    hideFullscreen: BooleanConstructor;
    splitTime: BooleanConstructor;
    pills: BooleanConstructor;
    volumeProps: PropType<Pick<import("./VVideoVolume.js").VVideoVolume["$props"], "direction" | "inline" | "sliderProps" | "menuProps">>;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    autoplay: BooleanConstructor;
    muted: BooleanConstructor;
    eager: BooleanConstructor;
    src: StringConstructor;
    type: StringConstructor;
    image: StringConstructor;
    hideOverlay: BooleanConstructor;
    noFullscreen: BooleanConstructor;
    startAt: (StringConstructor | NumberConstructor)[];
    variant: {
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    controlsTransition: {
        type: PropType<null | string | boolean | (TransitionProps & {
            component?: any;
        })>;
        component: Component;
    };
    controlsVariant: {
        type: PropType<VVideoControlsVariant>;
        default: string;
    };
    controlsProps: {
        type: PropType<VVideoControls["$props"]>;
    };
    rounded: PropType<boolean | number | string | (boolean | number | string)[]>;
}>>;
export type VVideo = InstanceType<typeof VVideo>;

