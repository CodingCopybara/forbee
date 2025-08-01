import type { PropType } from 'vue';
export declare const VDataTableColumn: import("vue").FunctionalComponent<Partial<{
    fixed: boolean | "end" | "start";
    nowrap: boolean;
    align: "center" | "end" | "start";
    lastFixed: boolean;
    firstFixedEnd: boolean;
    noPadding: boolean;
}> & Omit<Readonly<import("vue").ExtractPropTypes<{
    align: {
        type: PropType<"start" | "center" | "end">;
        default: string;
    };
    fixed: {
        type: PropType<boolean | "start" | "end">;
        default: boolean;
    };
    fixedOffset: (StringConstructor | NumberConstructor)[];
    fixedEndOffset: (StringConstructor | NumberConstructor)[];
    height: (StringConstructor | NumberConstructor)[];
    lastFixed: BooleanConstructor;
    firstFixedEnd: BooleanConstructor;
    noPadding: BooleanConstructor;
    tag: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    nowrap: BooleanConstructor;
}>>, "fixed" | "nowrap" | "align" | "lastFixed" | "firstFixedEnd" | "noPadding">, {}, any, {}>;
