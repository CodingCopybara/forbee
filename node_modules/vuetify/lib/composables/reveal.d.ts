import type { PropType } from 'vue';
export interface RevealProps {
    reveal: boolean | {
        duration?: number;
    };
}
export declare const makeRevealProps: <Defaults extends {
    reveal?: unknown;
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
        } : Defaults["reveal"] | NonNullable<boolean | {
            duration?: number;
        }>;
    };
};
export declare function useReveal(props: RevealProps): {
    duration: Readonly<import("vue").Ref<number, number>>;
    state: import("vue").ShallowRef<string, string>;
};
