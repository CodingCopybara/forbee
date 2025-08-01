import type { PropType, Ref } from 'vue';
export interface MaskProps {
    mask: string | MaskOptions | undefined;
    returnMaskedValue?: boolean;
}
export interface MaskOptions {
    mask: string;
    tokens: Record<string, MaskItem>;
}
export declare const makeMaskProps: <Defaults extends {
    mask?: unknown;
    returnMaskedValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mask: unknown extends Defaults["mask"] ? PropType<string | MaskOptions> : {
        type: PropType<unknown extends Defaults["mask"] ? string | MaskOptions : string | MaskOptions | Defaults["mask"]>;
        default: unknown extends Defaults["mask"] ? string | MaskOptions : Defaults["mask"] | NonNullable<string | MaskOptions>;
    };
    returnMaskedValue: unknown extends Defaults["returnMaskedValue"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnMaskedValue"] ? boolean : boolean | Defaults["returnMaskedValue"]>;
        default: unknown extends Defaults["returnMaskedValue"] ? boolean : boolean | Defaults["returnMaskedValue"];
    };
};
export type MaskItem = {
    convert?: (char: string) => string;
} & ({
    pattern?: never;
    test: (char: string) => boolean;
} | {
    pattern: RegExp;
    test?: never;
});
export declare const defaultDelimiters: RegExp;
export declare function isMaskDelimiter(char: string): boolean;
export declare function useMask(props: MaskProps, inputRef: Ref<HTMLInputElement | undefined>): {
    updateRange: () => void;
    maskText: (text: string | null | undefined) => string;
    unmaskText: (text: string | null) => string | null;
};
