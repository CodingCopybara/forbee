import type { MaybeRefOrGetter, PropType } from 'vue';
export declare const allowedVariants: readonly ["elevated", "flat", "tonal", "outlined", "text", "plain"];
export type Variant = typeof allowedVariants[number];
export interface VariantProps {
    color?: string;
    variant: Variant;
}
export declare function genOverlays(isClickable: boolean, name: string): JSX.Element;
export declare const makeVariantProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
        type: PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
};
export declare function useVariant(props: MaybeRefOrGetter<VariantProps>, name?: string): {
    colorClasses: Readonly<import("vue").Ref<string[], string[]>>;
    colorStyles: Readonly<import("vue").Ref<import("vue").CSSProperties, import("vue").CSSProperties>>;
    variantClasses: Readonly<import("vue").Ref<string, string>>;
};
