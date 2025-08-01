import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { IndentLineType } from "../../util/index.js";
export declare const makeVTreeviewItemProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    rounded?: unknown;
    tile?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    active?: unknown;
    activeClass?: unknown;
    activeColor?: unknown;
    appendAvatar?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    disabled?: unknown;
    lines?: unknown;
    link?: unknown;
    nav?: unknown;
    prependAvatar?: unknown;
    prependIcon?: unknown;
    ripple?: unknown;
    slim?: unknown;
    subtitle?: unknown;
    title?: unknown;
    value?: unknown;
    onClick?: unknown;
    onClickOnce?: unknown;
    loading?: unknown;
    hideActions?: unknown;
    indentLines?: unknown;
    toggleIcon?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    } : Omit<Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
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
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    to: unknown extends Defaults["to"] ? PropType<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> : {
        type: PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : NonNullable<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> | Defaults["to"];
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
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
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    appendAvatar: unknown extends Defaults["appendAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"]>;
        default: unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    lines: unknown extends Defaults["lines"] ? PropType<false | "one" | "two" | "three"> : {
        type: PropType<unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : false | "one" | "two" | "three" | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : NonNullable<false | "one" | "two" | "three"> | Defaults["lines"];
    };
    link: unknown extends Defaults["link"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["link"] ? boolean : boolean | Defaults["link"]>;
        default: unknown extends Defaults["link"] ? boolean : boolean | Defaults["link"];
    };
    nav: unknown extends Defaults["nav"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"]>;
        default: unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"];
    };
    prependAvatar: unknown extends Defaults["prependAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"]>;
        default: unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? IconValue : IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prependIcon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class?: string;
            keys?: string[];
        } | undefined : boolean | {
            class?: string;
            keys?: string[];
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class?: string;
            keys?: string[];
        } | undefined : NonNullable<boolean | {
            class?: string;
            keys?: string[];
        } | undefined> | Defaults["ripple"];
    };
    slim: unknown extends Defaults["slim"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["subtitle"] ? string | number | boolean : string | number | boolean | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["subtitle"];
    };
    title: unknown extends Defaults["title"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["title"] ? string | number | boolean : string | number | boolean | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["title"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent | KeyboardEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent | KeyboardEvent) => void : ((args_0: MouseEvent | KeyboardEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent | KeyboardEvent) => void : ((args_0: MouseEvent | KeyboardEvent) => void) | Defaults["onClick"];
    };
    onClickOnce: unknown extends Defaults["onClickOnce"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"]>;
        default: unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    indentLines: unknown extends Defaults["indentLines"] ? PropType<IndentLineType[]> : {
        type: PropType<unknown extends Defaults["indentLines"] ? IndentLineType[] : IndentLineType[] | Defaults["indentLines"]>;
        default: unknown extends Defaults["indentLines"] ? IndentLineType[] : IndentLineType[] | Defaults["indentLines"];
    };
    toggleIcon: unknown extends Defaults["toggleIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["toggleIcon"] ? IconValue : IconValue | Defaults["toggleIcon"]>;
        default: unknown extends Defaults["toggleIcon"] ? IconValue : NonNullable<IconValue> | Defaults["toggleIcon"];
    };
};
export declare const VTreeviewItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        loading: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        hideActions: boolean;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
        toggleIcon?: IconValue | undefined;
        indentLines?: IndentLineType[] | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onToggleExpand?: ((value: PointerEvent) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            replace: boolean;
            link: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            title: string | number | boolean;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            subtitle: string | number | boolean;
        }> & Omit<{
            replace: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            lines?: false | "one" | "two" | "three" | undefined;
            onClick?: (((args_0: MouseEvent | KeyboardEvent) => void) & ((e: MouseEvent | KeyboardEvent) => any)) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | number | boolean | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[]) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "click", e: MouseEvent | KeyboardEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            replace: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
        } & {
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            lines?: false | "one" | "two" | "three" | undefined;
            onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | number | boolean | undefined;
        } & {
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>>;
                activatable: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<boolean>;
                opened: import("vue").Ref<Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
                selectedValues: import("vue").Ref<unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event) => void;
                activate: (id: unknown, value: boolean, event?: Event) => void;
                select: (id: unknown, value: boolean, event?: Event) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{}>;
            link: import("../../composables/router.js").UseLink;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (e: MouseEvent | KeyboardEvent) => true;
        }, string, {
            replace: boolean;
            link: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            title: string | number | boolean;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            subtitle: string | number | boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
            append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
            default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
            title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
            subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
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
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
    }> & Omit<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    }, "id" | "select" | "list" | "root" | "isSelected" | ("replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle") | "activate" | "isActivated" | "isGroupActivator"> & import("vue").ShallowUnwrapRef<{
        activate: (activated: boolean, e?: Event) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>>;
            activatable: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<boolean>;
            opened: import("vue").Ref<Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
            selectedValues: import("vue").Ref<unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event) => void;
            activate: (id: unknown, value: boolean, event?: Event) => void;
            select: (id: unknown, value: boolean, event?: Event) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{}>;
        link: import("../../composables/router.js").UseLink;
    }> & {} & import("vue").ComponentCustomProperties & {}, "height" | "width" | "border" | "color" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "value" | "class" | "theme" | "to" | "lines" | "onClick" | "onClickOnce" | "$children" | "href" | "elevation" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "baseColor" | "activeColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "activeClass" | "appendAvatar" | "prependAvatar" | ("replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle") | "v-slot:subtitle">, `$${any}`> & {
        _allExposed: {
            activate: (activated: boolean, e?: Event) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>>;
                activatable: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<boolean>;
                opened: import("vue").Ref<Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
                selectedValues: import("vue").Ref<unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event) => void;
                activate: (id: unknown, value: boolean, event?: Event) => void;
                select: (id: unknown, value: boolean, event?: Event) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{}>;
            link: import("../../composables/router.js").UseLink;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        toggleExpand: (value: PointerEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        loading: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
        hideActions: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
        subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        loading: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        hideActions: boolean;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
        toggleIcon?: IconValue | undefined;
        indentLines?: IndentLineType[] | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onToggleExpand?: ((value: PointerEvent) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            replace: boolean;
            link: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            title: string | number | boolean;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            subtitle: string | number | boolean;
        }> & Omit<{
            replace: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            lines?: false | "one" | "two" | "three" | undefined;
            onClick?: (((args_0: MouseEvent | KeyboardEvent) => void) & ((e: MouseEvent | KeyboardEvent) => any)) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | number | boolean | undefined;
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[]) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "click", e: MouseEvent | KeyboardEvent) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            replace: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
        } & {
            link?: boolean | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            active?: boolean | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            value?: any;
            title?: string | number | boolean | undefined;
            class?: any;
            theme?: string | undefined;
            to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
            lines?: false | "one" | "two" | "three" | undefined;
            onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
            onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
            href?: string | undefined;
            elevation?: string | number | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            activeColor?: string | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            activeClass?: string | undefined;
            appendAvatar?: string | undefined;
            prependAvatar?: string | undefined;
            subtitle?: string | number | boolean | undefined;
        } & {
            $children?: import("vue").VNodeChild | {
                $stable?: boolean;
            } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, {
            activate: (activated: boolean, e?: Event) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>>;
                activatable: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<boolean>;
                opened: import("vue").Ref<Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
                selectedValues: import("vue").Ref<unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event) => void;
                activate: (id: unknown, value: boolean, event?: Event) => void;
                select: (id: unknown, value: boolean, event?: Event) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{}>;
            link: import("../../composables/router.js").UseLink;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (e: MouseEvent | KeyboardEvent) => true;
        }, string, {
            replace: boolean;
            link: boolean;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            exact: boolean;
            active: boolean;
            nav: boolean;
            style: import("vue").StyleValue;
            title: string | number | boolean;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            ripple: boolean | {
                class?: string;
                keys?: string[];
            } | undefined;
            subtitle: string | number | boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
            append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
            default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
            title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
            subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
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
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
    }> & Omit<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    }, "id" | "select" | "list" | "root" | "isSelected" | ("replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle") | "activate" | "isActivated" | "isGroupActivator"> & import("vue").ShallowUnwrapRef<{
        activate: (activated: boolean, e?: Event) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>>;
            activatable: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<boolean>;
            opened: import("vue").Ref<Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
            selectedValues: import("vue").Ref<unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event) => void;
            activate: (id: unknown, value: boolean, event?: Event) => void;
            select: (id: unknown, value: boolean, event?: Event) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{}>;
        link: import("../../composables/router.js").UseLink;
    }> & {} & import("vue").ComponentCustomProperties & {}, "height" | "width" | "border" | "color" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "value" | "class" | "theme" | "to" | "lines" | "onClick" | "onClickOnce" | "$children" | "href" | "elevation" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "baseColor" | "activeColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "activeClass" | "appendAvatar" | "prependAvatar" | ("replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle") | "v-slot:subtitle">, `$${any}`> & {
        _allExposed: {
            activate: (activated: boolean, e?: Event) => void;
            isActivated: import("vue").ComputedRef<boolean>;
            isGroupActivator: boolean | undefined;
            isSelected: import("vue").ComputedRef<boolean>;
            list: {
                filterable: import("vue").MaybeRefOrGetter<boolean>;
                hasPrepend: import("vue").Ref<boolean>;
                updateHasPrepend: (value: boolean) => void;
            } | null;
            select: (selected: boolean, e?: Event) => void;
            root: {
                children: import("vue").Ref<Map<unknown, unknown[]>>;
                parents: import("vue").Ref<Map<unknown, unknown>>;
                disabled: import("vue").Ref<Set<unknown>>;
                activatable: import("vue").Ref<boolean>;
                selectable: import("vue").Ref<boolean>;
                opened: import("vue").Ref<Set<unknown>>;
                activated: import("vue").Ref<Set<unknown>>;
                selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
                selectedValues: import("vue").Ref<unknown[]>;
                register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
                unregister: (id: unknown) => void;
                open: (id: unknown, value: boolean, event?: Event) => void;
                activate: (id: unknown, value: boolean, event?: Event) => void;
                select: (id: unknown, value: boolean, event?: Event) => void;
                openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
                getPath: (id: unknown) => unknown[];
            };
            id: import("vue").ComputedRef<{}>;
            link: import("../../composables/router.js").UseLink;
        } | {};
    }, {}, {}, {}, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        loading: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
        hideActions: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    replace: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    loading: boolean;
    nav: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    slim: boolean;
    ripple: boolean | {
        class?: string;
        keys?: string[];
    } | undefined;
    hideActions: boolean;
} & {
    link?: boolean | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    active?: boolean | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    value?: any;
    title?: string | number | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    lines?: false | "one" | "two" | "three" | undefined;
    onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    subtitle?: string | number | boolean | undefined;
    toggleIcon?: IconValue | undefined;
    indentLines?: IndentLineType[] | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
        prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
} & {
    onToggleExpand?: ((value: PointerEvent) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
    }> & Omit<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: (((args_0: MouseEvent | KeyboardEvent) => void) & ((e: MouseEvent | KeyboardEvent) => any)) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
        default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[]) | undefined;
        title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[]) | undefined;
        subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: (event: "click", e: MouseEvent | KeyboardEvent) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        lines?: false | "one" | "two" | "three" | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            $stable?: boolean;
        } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    }, {
        activate: (activated: boolean, e?: Event) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>>;
            activatable: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<boolean>;
            opened: import("vue").Ref<Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
            selectedValues: import("vue").Ref<unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event) => void;
            activate: (id: unknown, value: boolean, event?: Event) => void;
            select: (id: unknown, value: boolean, event?: Event) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{}>;
        link: import("../../composables/router.js").UseLink;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (e: MouseEvent | KeyboardEvent) => true;
    }, string, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        active: boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class?: string;
            keys?: string[];
        } | undefined;
        subtitle: string | number | boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
        subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
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
    replace: boolean;
    link: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    active: boolean;
    nav: boolean;
    style: import("vue").StyleValue;
    title: string | number | boolean;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    ripple: boolean | {
        class?: string;
        keys?: string[];
    } | undefined;
    subtitle: string | number | boolean;
}> & Omit<{
    replace: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    nav: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    slim: boolean;
    ripple: boolean | {
        class?: string;
        keys?: string[];
    } | undefined;
} & {
    link?: boolean | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    active?: boolean | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    value?: any;
    title?: string | number | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    lines?: false | "one" | "two" | "three" | undefined;
    onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    subtitle?: string | number | boolean | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        $stable?: boolean;
    } | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
        prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
} & {
    onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
}, "id" | "select" | "list" | "root" | "isSelected" | ("replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle") | "activate" | "isActivated" | "isGroupActivator"> & import("vue").ShallowUnwrapRef<{
    activate: (activated: boolean, e?: Event) => void;
    isActivated: import("vue").ComputedRef<boolean>;
    isGroupActivator: boolean | undefined;
    isSelected: import("vue").ComputedRef<boolean>;
    list: {
        filterable: import("vue").MaybeRefOrGetter<boolean>;
        hasPrepend: import("vue").Ref<boolean>;
        updateHasPrepend: (value: boolean) => void;
    } | null;
    select: (selected: boolean, e?: Event) => void;
    root: {
        children: import("vue").Ref<Map<unknown, unknown[]>>;
        parents: import("vue").Ref<Map<unknown, unknown>>;
        disabled: import("vue").Ref<Set<unknown>>;
        activatable: import("vue").Ref<boolean>;
        selectable: import("vue").Ref<boolean>;
        opened: import("vue").Ref<Set<unknown>>;
        activated: import("vue").Ref<Set<unknown>>;
        selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
        selectedValues: import("vue").Ref<unknown[]>;
        register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
        unregister: (id: unknown) => void;
        open: (id: unknown, value: boolean, event?: Event) => void;
        activate: (id: unknown, value: boolean, event?: Event) => void;
        select: (id: unknown, value: boolean, event?: Event) => void;
        openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
        getPath: (id: unknown) => unknown[];
    };
    id: import("vue").ComputedRef<{}>;
    link: import("../../composables/router.js").UseLink;
}> & {} & import("vue").ComponentCustomProperties & {}, "height" | "width" | "border" | "color" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "value" | "class" | "theme" | "to" | "lines" | "onClick" | "onClickOnce" | "$children" | "href" | "elevation" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "baseColor" | "activeColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "activeClass" | "appendAvatar" | "prependAvatar" | ("replace" | "link" | "variant" | "exact" | "active" | "nav" | "style" | "title" | "disabled" | "tag" | "density" | "rounded" | "tile" | "slim" | "ripple" | "subtitle") | "v-slot:subtitle">, `$${any}`> & {
    _allExposed: {
        activate: (activated: boolean, e?: Event) => void;
        isActivated: import("vue").ComputedRef<boolean>;
        isGroupActivator: boolean | undefined;
        isSelected: import("vue").ComputedRef<boolean>;
        list: {
            filterable: import("vue").MaybeRefOrGetter<boolean>;
            hasPrepend: import("vue").Ref<boolean>;
            updateHasPrepend: (value: boolean) => void;
        } | null;
        select: (selected: boolean, e?: Event) => void;
        root: {
            children: import("vue").Ref<Map<unknown, unknown[]>>;
            parents: import("vue").Ref<Map<unknown, unknown>>;
            disabled: import("vue").Ref<Set<unknown>>;
            activatable: import("vue").Ref<boolean>;
            selectable: import("vue").Ref<boolean>;
            opened: import("vue").Ref<Set<unknown>>;
            activated: import("vue").Ref<Set<unknown>>;
            selected: import("vue").Ref<Map<unknown, "on" | "off" | "indeterminate">>;
            selectedValues: import("vue").Ref<unknown[]>;
            register: (id: unknown, parentId: unknown, isDisabled: boolean, isGroup?: boolean) => void;
            unregister: (id: unknown) => void;
            open: (id: unknown, value: boolean, event?: Event) => void;
            activate: (id: unknown, value: boolean, event?: Event) => void;
            select: (id: unknown, value: boolean, event?: Event) => void;
            openOnSelect: (id: unknown, value: boolean, event?: Event) => void;
            getPath: (id: unknown) => unknown[];
        };
        id: import("vue").ComputedRef<{}>;
        link: import("../../composables/router.js").UseLink;
    } | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    toggleExpand: (value: PointerEvent) => true;
}, string, {
    replace: boolean;
    link: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    active: boolean;
    loading: boolean;
    nav: boolean;
    style: import("vue").StyleValue;
    title: string | number | boolean;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    ripple: boolean | {
        class?: string;
        keys?: string[];
    } | undefined;
    subtitle: string | number | boolean;
    hideActions: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
    append: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
    default: (arg: import("../VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
    title: (arg: import("../VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
    subtitle: (arg: import("../VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "two" | "three" | false>;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    slim: {
        type: PropType<boolean>;
        default: boolean;
    };
    subtitle: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    title: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    onClick: PropType<(args_0: MouseEvent | KeyboardEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
    loading: BooleanConstructor;
    hideActions: BooleanConstructor;
    indentLines: PropType<IndentLineType[]>;
    toggleIcon: PropType<IconValue>;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "two" | "three" | false>;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    slim: {
        type: PropType<boolean>;
        default: boolean;
    };
    subtitle: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    title: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    onClick: PropType<(args_0: MouseEvent | KeyboardEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
    loading: BooleanConstructor;
    hideActions: BooleanConstructor;
    indentLines: PropType<IndentLineType[]>;
    toggleIcon: PropType<IconValue>;
}>>;
export type VTreeviewItem = InstanceType<typeof VTreeviewItem>;
