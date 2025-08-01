export interface SizeProps {
    size?: string | number;
}
export declare const makeSizeProps: <Defaults extends {
    size?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
    };
};
export declare function useSize(props: SizeProps, name?: string): {
    sizeClasses: Readonly<import("vue").Ref<string | undefined, string | undefined>>;
    sizeStyles: Readonly<import("vue").Ref<{
        width: string | undefined;
        height: string | undefined;
    } | undefined, {
        width: string | undefined;
        height: string | undefined;
    } | undefined>>;
};
