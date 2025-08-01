import { deepEqual } from "../util/index.js";
import type { PropType } from 'vue';
import type { InternalItem } from "./filter.js";
import type { SelectItemKey } from "../util/index.js";
export interface ListItem<T = any> extends InternalItem<T> {
    title: string;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children: ListItem<T>[] | undefined;
    type: string;
}
export interface ItemProps {
    items: any[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    itemType: SelectItemKey;
    returnObject: boolean;
    valueComparator: typeof deepEqual | undefined;
}
export declare const makeItemsProps: <Defaults extends {
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    itemType?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    items: unknown extends Defaults["items"] ? {
        type: PropType<ItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: PropType<ItemProps["items"]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? SelectItemKey : SelectItemKey | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemTitle"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : SelectItemKey | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemValue"];
    };
    itemChildren: unknown extends Defaults["itemChildren"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemChildren"] ? SelectItemKey : SelectItemKey | Defaults["itemChildren"]>;
        default: unknown extends Defaults["itemChildren"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemChildren"];
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : SelectItemKey | Defaults["itemProps"]>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemProps"];
    };
    itemType: unknown extends Defaults["itemType"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemType"] ? SelectItemKey : SelectItemKey | Defaults["itemType"]>;
        default: unknown extends Defaults["itemType"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemType"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<typeof deepEqual> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"];
    };
};
export declare function transformItem(props: Pick<ItemProps, typeof transformItem.neededProps[number]>, item: any): ListItem;
export declare namespace transformItem {
    var neededProps: readonly ["itemTitle", "itemValue", "itemChildren", "itemProps", "itemType"];
}
export declare function transformItems(props: Pick<ItemProps, typeof transformItem.neededProps[number]>, items: ItemProps['items']): ListItem<any>[];
export declare function useItems(props: ItemProps): {
    items: import("vue").ComputedRef<ListItem<any>[]>;
    transformIn: (value: any[]) => ListItem[];
    transformOut: (value: ListItem[]) => any[];
};
