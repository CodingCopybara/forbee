import * as vue from 'vue';
import { ShallowRef, Ref, DeepReadonly, ComponentPublicInstance, FunctionalComponent, ComponentPropsOptions, ExtractPropTypes, PropType, CSSProperties, EffectScope, nextTick, VNodeProps, App } from 'vue';
import * as _vue_reactivity from '@vue/reactivity';

interface LocaleMessages {
    [key: string]: LocaleMessages | string;
}
interface LocaleOptions {
    decimalSeparator?: string;
    messages?: LocaleMessages;
    locale?: string;
    fallback?: string;
    adapter?: LocaleInstance;
}
interface LocaleInstance {
    name: string;
    decimalSeparator: ShallowRef<string>;
    messages: Ref<LocaleMessages>;
    current: Ref<string>;
    fallback: Ref<string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
}
declare function useLocale(): LocaleInstance & RtlInstance;
interface RtlOptions {
    rtl?: Record<string, boolean>;
}
interface RtlInstance {
    isRtl: Ref<boolean>;
    rtl: Ref<Record<string, boolean>>;
    rtlClasses: Ref<string>;
}
declare function useRtl(): {
    isRtl: Ref<boolean, boolean>;
    rtlClasses: Ref<string, string>;
};

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
type ThemeOptions = false | {
    cspNonce?: string;
    defaultTheme?: 'light' | 'dark' | 'system' | string & {};
    variations?: false | VariationsOptions;
    themes?: Record<string, ThemeDefinition>;
    stylesheetId?: string;
    scope?: string;
    unimportant?: boolean;
};
type ThemeDefinition = DeepPartial<InternalThemeDefinition>;
interface VariationsOptions {
    colors: string[];
    lighten: number;
    darken: number;
}
interface InternalThemeDefinition {
    dark: boolean;
    colors: Colors;
    variables: Record<string, string | number>;
}
interface Colors extends BaseColors, OnColors {
    [key: string]: string;
}
interface BaseColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface OnColors {
    'on-background': string;
    'on-surface': string;
    'on-primary': string;
    'on-secondary': string;
    'on-success': string;
    'on-warning': string;
    'on-error': string;
    'on-info': string;
}
interface ThemeInstance {
    change: (themeName: string) => void;
    cycle: (themeArray?: string[]) => void;
    toggle: (themeArray?: [string, string]) => void;
    readonly isDisabled: boolean;
    readonly isSystem: Readonly<Ref<boolean>>;
    readonly themes: Ref<Record<string, InternalThemeDefinition>>;
    readonly name: Readonly<Ref<string>>;
    readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    readonly computedThemes: DeepReadonly<Ref<Record<string, InternalThemeDefinition>>>;
    readonly prefix: string;
    readonly themeClasses: Readonly<Ref<string | undefined>>;
    readonly styles: Readonly<Ref<string>>;
    readonly global: {
        readonly name: Ref<string>;
        readonly current: DeepReadonly<Ref<InternalThemeDefinition>>;
    };
}
declare function useTheme(): ThemeInstance;

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): Partial<Pick<T, U>>;
}
type JSXComponent<Props = any> = {
    new (): ComponentPublicInstance<Props>;
} | FunctionalComponent<Props>;

type ClassValue = any;

type EasingFunction = (n: number) => number;

declare function deepEqual(a: any, b: any): boolean;
type SelectItemKey<T = Record<string, any>> = boolean | null | undefined | string | readonly (string | number)[] | ((item: T, fallback?: any) => any);
type MaybeRef<T> = T | Ref<T>;
type EventProp<T extends any[] = any[], F = (...args: T) => void> = F;
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T>>;
type TemplateRef = {
    (target: Element | ComponentPublicInstance | null): void;
    value: HTMLElement | ComponentPublicInstance | null | undefined;
    readonly el: HTMLElement | undefined;
};

interface GoToInstance {
    rtl: Ref<boolean>;
    options: InternalGoToOptions;
}
interface InternalGoToOptions {
    container: ComponentPublicInstance | HTMLElement | string;
    duration: number;
    layout: boolean;
    offset: number;
    easing: string | EasingFunction;
    patterns: Record<string, EasingFunction>;
}
type GoToOptions = Partial<InternalGoToOptions>;
declare function useGoTo(_options?: GoToOptions): {
    (target: ComponentPublicInstance | HTMLElement | string | number, options?: Partial<GoToOptions>): Promise<unknown>;
    horizontal(target: ComponentPublicInstance | HTMLElement | string | number, options?: Partial<GoToOptions>): Promise<unknown>;
};

interface DateAdapter<T = unknown> {
    date(value?: any): T | null;
    format(date: T, formatString: string): string;
    toJsDate(value: T): Date;
    parseISO(date: string): T;
    toISO(date: T): string;
    startOfDay(date: T): T;
    endOfDay(date: T): T;
    startOfWeek(date: T, firstDayOfWeek?: number | string): T;
    endOfWeek(date: T): T;
    startOfMonth(date: T): T;
    endOfMonth(date: T): T;
    startOfYear(date: T): T;
    endOfYear(date: T): T;
    isAfter(date: T, comparing: T): boolean;
    isAfterDay(date: T, comparing: T): boolean;
    isSameDay(date: T, comparing: T): boolean;
    isSameMonth(date: T, comparing: T): boolean;
    isSameYear(date: T, comparing: T): boolean;
    isBefore(date: T, comparing: T): boolean;
    isEqual(date: T, comparing: T): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: T, range: [T, T]): boolean;
    addMinutes(date: T, amount: number): T;
    addHours(date: T, amount: number): T;
    addDays(date: T, amount: number): T;
    addWeeks(date: T, amount: number): T;
    addMonths(date: T, amount: number): T;
    getYear(date: T): number;
    setYear(date: T, year: number): T;
    getDiff(date: T, comparing: T | string, unit?: string): number;
    getWeekArray(date: T, firstDayOfWeek?: number | string): T[][];
    getWeekdays(firstDayOfWeek?: number | string, weekdayFormat?: 'long' | 'short' | 'narrow'): string[];
    getWeek(date: T, firstDayOfWeek?: number | string, firstWeekMinSize?: number): number;
    getMonth(date: T): number;
    setMonth(date: T, month: number): T;
    getDate(date: T): number;
    setDate(date: T, day: number): T;
    getNextMonth(date: T): T;
    getPreviousMonth(date: T): T;
    getHours(date: T): number;
    setHours(date: T, hours: number): T;
    getMinutes(date: T): number;
    setMinutes(date: T, minutes: number): T;
}

interface DateInstance extends DateModule.InternalAdapter {
    locale?: any;
}
/** Supports module augmentation to specify date adapter types */
declare namespace DateModule {
    interface Adapter {
    }
    export type InternalAdapter = {} extends Adapter ? DateAdapter : Adapter;

}
type InternalDateOptions = {
    adapter: (new (options: {
        locale: any;
        formats?: any;
    }) => DateInstance) | DateInstance;
    formats?: Record<string, any>;
    locale: Record<string, any>;
};
type DateOptions = Partial<InternalDateOptions>;
declare function useDate(): DateInstance;

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;
interface IconAliases {
    [name: string]: IconValue;
    collapse: IconValue;
    complete: IconValue;
    cancel: IconValue;
    close: IconValue;
    delete: IconValue;
    clear: IconValue;
    success: IconValue;
    info: IconValue;
    warning: IconValue;
    error: IconValue;
    prev: IconValue;
    next: IconValue;
    checkboxOn: IconValue;
    checkboxOff: IconValue;
    checkboxIndeterminate: IconValue;
    delimiter: IconValue;
    sortAsc: IconValue;
    sortDesc: IconValue;
    expand: IconValue;
    menu: IconValue;
    subgroup: IconValue;
    dropdown: IconValue;
    radioOn: IconValue;
    radioOff: IconValue;
    edit: IconValue;
    ratingEmpty: IconValue;
    ratingFull: IconValue;
    ratingHalf: IconValue;
    loading: IconValue;
    first: IconValue;
    last: IconValue;
    unfold: IconValue;
    file: IconValue;
    plus: IconValue;
    minus: IconValue;
    calendar: IconValue;
    treeviewCollapse: IconValue;
    treeviewExpand: IconValue;
    eyeDropper: IconValue;
    upload: IconValue;
    color: IconValue;
    command: IconValue;
    ctrl: IconValue;
    space: IconValue;
    shift: IconValue;
    alt: IconValue;
    enter: IconValue;
    arrowup: IconValue;
    arrowdown: IconValue;
    arrowleft: IconValue;
    arrowright: IconValue;
    backspace: IconValue;
}
interface IconProps {
    tag: string | JSXComponent;
    icon?: IconValue;
    disabled?: boolean;
}
type IconComponent = JSXComponent<IconProps>;
interface IconSet {
    component: IconComponent;
}
type InternalIconOptions = {
    defaultSet: string;
    aliases: Partial<IconAliases>;
    sets: Record<string, IconSet>;
};
type IconOptions = Partial<InternalIconOptions>;

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;
type DisplayThresholds = {
    [key in DisplayBreakpoint]: number;
};
interface DisplayProps {
    mobile?: boolean | null;
    mobileBreakpoint?: number | DisplayBreakpoint;
}
interface DisplayOptions {
    mobileBreakpoint?: number | DisplayBreakpoint;
    thresholds?: Partial<DisplayThresholds>;
}
type SSROptions = boolean | {
    clientWidth: number;
    clientHeight?: number;
};
interface DisplayPlatform {
    android: boolean;
    ios: boolean;
    cordova: boolean;
    electron: boolean;
    chrome: boolean;
    edge: boolean;
    firefox: boolean;
    opera: boolean;
    win: boolean;
    mac: boolean;
    linux: boolean;
    touch: boolean;
    ssr: boolean;
}
interface DisplayInstance {
    xs: Ref<boolean>;
    sm: Ref<boolean>;
    md: Ref<boolean>;
    lg: Ref<boolean>;
    xl: Ref<boolean>;
    xxl: Ref<boolean>;
    smAndUp: Ref<boolean>;
    mdAndUp: Ref<boolean>;
    lgAndUp: Ref<boolean>;
    xlAndUp: Ref<boolean>;
    smAndDown: Ref<boolean>;
    mdAndDown: Ref<boolean>;
    lgAndDown: Ref<boolean>;
    xlAndDown: Ref<boolean>;
    name: Ref<DisplayBreakpoint>;
    height: Ref<number>;
    width: Ref<number>;
    mobile: Ref<boolean>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform>;
    thresholds: Ref<DisplayThresholds>;
    update(): void;
}
declare function useDisplay(props?: DisplayProps, name?: string): {
    displayClasses: Readonly<Ref<{
        [x: string]: boolean;
    }, {
        [x: string]: boolean;
    }>>;
    mobile: vue.ComputedRef<boolean>;
    xs: Ref<boolean>;
    sm: Ref<boolean>;
    md: Ref<boolean>;
    lg: Ref<boolean>;
    xl: Ref<boolean>;
    xxl: Ref<boolean>;
    smAndUp: Ref<boolean>;
    mdAndUp: Ref<boolean>;
    lgAndUp: Ref<boolean>;
    xlAndUp: Ref<boolean>;
    smAndDown: Ref<boolean>;
    mdAndDown: Ref<boolean>;
    lgAndDown: Ref<boolean>;
    xlAndDown: Ref<boolean>;
    name: Ref<DisplayBreakpoint>;
    height: Ref<number>;
    width: Ref<number>;
    mobileBreakpoint: Ref<number | DisplayBreakpoint>;
    platform: Ref<DisplayPlatform>;
    thresholds: Ref<DisplayThresholds>;
    /** @internal */
    ssr: boolean;
    update(): void;
};

type DefaultsInstance = undefined | {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
};
type DefaultsOptions = Partial<DefaultsInstance>;
declare function useDefaults<T extends Record<string, any>>(props: T, name?: string): T;
declare function useDefaults(props?: undefined, name?: string): Record<string, any>;

type Position = 'top' | 'left' | 'right' | 'bottom';
interface Layer {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface LayoutItem extends Layer {
    id: string;
    size: number;
    position: Position;
}
declare function useLayout(): {
    getLayoutItem: (id: string) => LayoutItem | undefined;
    mainRect: Ref<Layer, Layer>;
    mainStyles: Ref<CSSProperties, CSSProperties>;
};

interface HotkeyOptions {
    event?: MaybeRef<'keydown' | 'keyup'>;
    inputs?: MaybeRef<boolean>;
    preventDefault?: MaybeRef<boolean>;
    sequenceTimeout?: MaybeRef<number>;
}
declare function useHotkey(keys: MaybeRef<string | undefined>, callback: (e: KeyboardEvent) => void, options?: HotkeyOptions): () => void;

/**
 * - boolean: match without highlight
 * - number: single match (index), length already known
 * - []: single match (start, end)
 * - [][]: multiple matches (start, end), shouldn't overlap
 */
type FilterMatchArraySingle = readonly [number, number];
type FilterMatchArrayMultiple = readonly FilterMatchArraySingle[];
type FilterMatchArray = FilterMatchArraySingle | FilterMatchArrayMultiple;
type FilterMatch = boolean | number | FilterMatchArray;
type FilterFunction = (value: string, query: string, item?: InternalItem) => FilterMatch;
interface InternalItem<T = any> {
    value: any;
    raw: T;
    type?: string;
}

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

interface FieldValidationResult {
    id: number | string;
    errorMessages: string[];
}
interface FormValidationResult {
    valid: boolean;
    errors: FieldValidationResult[];
}
interface SubmitEventPromise extends SubmitEvent, Promise<FormValidationResult> {
}

type ActiveStrategyFunction = (data: {
    id: unknown;
    value: boolean;
    activated: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
type ActiveStrategyTransformInFunction = (v: unknown | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Set<unknown>;
type ActiveStrategyTransformOutFunction = (v: Set<unknown>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown;
type ActiveStrategy = {
    activate: ActiveStrategyFunction;
    in: ActiveStrategyTransformInFunction;
    out: ActiveStrategyTransformOutFunction;
};

type OpenStrategyFunction = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
type OpenSelectStrategyFunction = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown> | null;
type OpenStrategy = {
    open: OpenStrategyFunction;
    select: OpenSelectStrategyFunction;
};

type SelectStrategyFunction = (data: {
    id: unknown;
    value: boolean;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    disabled: Set<unknown>;
    event?: Event;
}) => Map<unknown, 'on' | 'off' | 'indeterminate'>;
type SelectStrategyTransformInFunction = (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>, disabled: Set<unknown>) => Map<unknown, 'on' | 'off' | 'indeterminate'>;
type SelectStrategyTransformOutFunction = (v: Map<unknown, 'on' | 'off' | 'indeterminate'>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
type SelectStrategy = {
    select: SelectStrategyFunction;
    in: SelectStrategyTransformInFunction;
    out: SelectStrategyTransformOutFunction;
};

type ExpandProps = {
    expandOnClick: boolean;
    expanded: readonly string[];
    'onUpdate:expanded': ((value: any[]) => void) | undefined;
};
declare function provideExpanded(props: ExpandProps): {
    expand: (item: DataTableItem, value: boolean) => void;
    expanded: Ref<Set<string>, Set<string>> & {
        readonly externalValue: readonly string[];
    };
    expandOnClick: Readonly<Ref<boolean, boolean>>;
    isExpanded: (item: DataTableItem) => boolean;
    toggleExpand: (item: DataTableItem) => void;
};

type SortItem = {
    key: string;
    order?: boolean | 'asc' | 'desc';
};

interface GroupableItem<T = any> {
    type: 'item';
    raw: T;
}

interface DataTableItemProps {
    items: any[];
    itemValue: SelectItemKey;
    itemSelectable: SelectItemKey;
    returnObject: boolean;
}

interface SelectableItem {
    value: any;
    selectable: boolean;
}
interface DataTableSelectStrategy {
    showSelectAll: boolean;
    allSelected: (data: {
        allItems: SelectableItem[];
        currentPage: SelectableItem[];
    }) => SelectableItem[];
    select: (data: {
        items: SelectableItem[];
        value: boolean;
        selected: Set<unknown>;
    }) => Set<unknown>;
    selectAll: (data: {
        value: boolean;
        allItems: SelectableItem[];
        currentPage: SelectableItem[];
        selected: Set<unknown>;
    }) => Set<unknown>;
}
type SelectionProps = Pick<DataTableItemProps, 'itemValue'> & {
    modelValue: readonly any[];
    selectStrategy: 'single' | 'page' | 'all';
    valueComparator: typeof deepEqual;
    'onUpdate:modelValue': EventProp<[any[]]> | undefined;
};
declare function provideSelection(props: SelectionProps, { allItems, currentPage }: {
    allItems: Ref<SelectableItem[]>;
    currentPage: Ref<SelectableItem[]>;
}): {
    toggleSelect: (item: SelectableItem, index?: number, event?: MouseEvent) => void;
    select: (items: SelectableItem[], value: boolean) => void;
    selectAll: (value: boolean) => void;
    isSelected: (items: SelectableItem | SelectableItem[]) => boolean;
    isSomeSelected: (items: SelectableItem | SelectableItem[]) => boolean;
    someSelected: vue.ComputedRef<boolean>;
    allSelected: vue.ComputedRef<boolean>;
    showSelectAll: Readonly<Ref<boolean, boolean>>;
    lastSelectedIndex: vue.ShallowRef<number | null, number | null>;
    selectStrategy: vue.ComputedRef<DataTableSelectStrategy>;
};

type DataTableCompareFunction<T = any> = (a: T, b: T) => number | null;
type DataTableHeader<T = Record<string, any>> = {
    key?: 'data-table-group' | 'data-table-select' | 'data-table-expand' | (string & {});
    value?: SelectItemKey<T>;
    title?: string;
    fixed?: boolean | 'start' | 'end';
    align?: 'start' | 'end' | 'center';
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    nowrap?: boolean;
    headerProps?: Record<string, any>;
    cellProps?: HeaderCellProps;
    sortable?: boolean;
    sort?: DataTableCompareFunction;
    sortRaw?: DataTableCompareFunction;
    filter?: FilterFunction;
    children?: DataTableHeader<T>[];
};
type InternalDataTableHeader = Omit<DataTableHeader, 'key' | 'value' | 'children'> & {
    key: string | null;
    value: SelectItemKey | null;
    sortable: boolean;
    fixedOffset?: number;
    fixedEndOffset?: number;
    lastFixed?: boolean;
    firstFixedEnd?: boolean;
    nowrap?: boolean;
    colspan?: number;
    rowspan?: number;
    children?: InternalDataTableHeader[];
};
interface DataTableItem<T = any> extends Omit<InternalItem<T>, 'type'>, GroupableItem<T>, SelectableItem {
    key: any;
    index: number;
    columns: {
        [key: string]: any;
    };
}
type ItemSlotBase<T> = {
    index: number;
    item: T;
    internalItem: DataTableItem<T>;
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
};
type ItemKeySlot<T> = ItemSlotBase<T> & {
    value: any;
    column: InternalDataTableHeader;
};
type RowPropsFunction<T> = (data: Pick<ItemKeySlot<T>, 'index' | 'item' | 'internalItem'>) => Record<string, any>;
type CellPropsFunction<T> = (data: Pick<ItemKeySlot<T>, 'index' | 'item' | 'internalItem' | 'value' | 'column'>) => Record<string, any>;
type HeaderCellProps = Record<string, any> | HeaderCellPropsFunction;
type HeaderCellPropsFunction = (data: Pick<ItemKeySlot<any>, 'index' | 'item' | 'internalItem' | 'value'>) => Record<string, any>;

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    target: Ref<HTMLElement | [x: number, y: number] | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFunction = (data: LocationStrategyData, props: StrategyProps$1, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e?: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps$1 {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFunction;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps$1, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
        flipped: {
            x: boolean;
            y: boolean;
        };
    } | undefined;
};

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    targetEl: Ref<HTMLElement | undefined>;
    target: Ref<HTMLElement | [x: number, y: number] | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFunction = (data: ScrollStrategyData, props: StrategyProps, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFunction;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps, scope: EffectScope): void;

declare const allowedVariants: readonly ["elevated", "flat", "tonal", "outlined", "text", "plain"];
type Variant = typeof allowedVariants[number];

declare const VSnackbar: {
    new (...args: any[]): vue.CreateComponentPublicInstanceWithMixins<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        timer?: string | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            $stable?: boolean;
        } | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            transition?: string | boolean | (vue.TransitionProps & {
                component?: vue.Component;
            }) | null | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance | null;
        $parent: vue.ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterEnter") => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            transition?: string | boolean | (vue.TransitionProps & {
                component?: vue.Component;
            }) | null | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean, boolean>>;
            localTop: Readonly<Ref<boolean, boolean>>;
            updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            keydown: (e: KeyboardEvent) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode[];
        }>>, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & {
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
            renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, _vue_reactivity.OnCleanup]) => any : (...args: [any, any, _vue_reactivity.OnCleanup]) => any, options?: vue.WatchOptions): vue.WatchStopHandle;
    } & Readonly<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }> & Omit<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        transition?: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "target" | "contentEl" | "activatorEl" | ("absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack") | "scrimEl" | "animateClick" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "offset" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "opacity" | "transition" | "target" | "class" | "theme" | "onAfterEnter" | "onAfterLeave" | "onKeydown" | "$children" | "v-slots" | "v-slot:default" | keyof vue.VNodeProps | "onUpdate:modelValue" | "closeDelay" | "openDelay" | "activator" | "contentClass" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack") | "v-slot:activator">, `$${any}`> & {
        _allExposed: {
            activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean, boolean>>;
            localTop: Readonly<Ref<boolean, boolean>>;
            updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {};
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'update:modelValue': (v: boolean) => true;
    }, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        rounded: string | number | boolean;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    }, true, {}, vue.SlotsType<Partial<{
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNode[];
        default: () => vue.VNode[];
        actions: (arg: {
            isActive: Ref<boolean>;
        }) => vue.VNode[];
        text: () => vue.VNode[];
    }>>, vue.GlobalComponents, vue.GlobalDirectives, string, {}, any, vue.ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        timer?: string | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            $stable?: boolean;
        } | (() => vue.VNodeChild) | {
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
            actions?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
            actions?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            text?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
    }, Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            transition?: string | boolean | (vue.TransitionProps & {
                component?: vue.Component;
            }) | null | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: vue.VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode[]) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance | null;
        $parent: vue.ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterEnter") => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            transition?: string | boolean | (vue.TransitionProps & {
                component?: vue.Component;
            }) | null | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                $stable?: boolean;
            } | {
                default?: ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: TemplateRef;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } & {
            onAfterEnter?: (() => any) | undefined;
            onAfterLeave?: (() => any) | undefined;
            onKeydown?: ((e: KeyboardEvent) => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean, boolean>>;
            localTop: Readonly<Ref<boolean, boolean>>;
            updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'click:outside': (e: MouseEvent) => true;
            'update:modelValue': (value: boolean) => true;
            keydown: (e: KeyboardEvent) => true;
            afterEnter: () => true;
            afterLeave: () => true;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            zIndex: string | number;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (arg: {
                isActive: Ref<boolean>;
            }) => vue.VNode[];
            activator: (arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNode[];
        }>>, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & {
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
            renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, _vue_reactivity.OnCleanup]) => any : (...args: [any, any, _vue_reactivity.OnCleanup]) => any, options?: vue.WatchOptions): vue.WatchStopHandle;
    } & Readonly<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }> & Omit<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        transition?: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, "target" | "contentEl" | "activatorEl" | ("absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack") | "scrimEl" | "animateClick" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {}, "offset" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "opacity" | "transition" | "target" | "class" | "theme" | "onAfterEnter" | "onAfterLeave" | "onKeydown" | "$children" | "v-slots" | "v-slot:default" | keyof vue.VNodeProps | "onUpdate:modelValue" | "closeDelay" | "openDelay" | "activator" | "contentClass" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack") | "v-slot:activator">, `$${any}`> & {
        _allExposed: {
            activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
            animateClick: () => void;
            contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            globalTop: Readonly<Ref<boolean, boolean>>;
            localTop: Readonly<Ref<boolean, boolean>>;
            updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
        } | {};
    }, {}, {}, {}, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null;
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        rounded: string | number | boolean;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & vue.ComponentOptionsBase<{
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component;
    }) | null;
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    timeout: string | number;
    vertical: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | LocationStrategyFunction;
    tile: boolean;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    opacity?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    text?: string | undefined;
    target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
    class?: any;
    theme?: string | undefined;
    timer?: string | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentClass?: any;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | {
        $stable?: boolean;
    } | (() => vue.VNodeChild) | {
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        default?: (() => vue.VNodeChild) | undefined;
        actions?: ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        text?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
        default?: false | (() => vue.VNodeChild) | undefined;
        actions?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        text?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: {
        isActive: Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:text"?: false | (() => vue.VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: boolean) => any) | undefined;
}, Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }> & Omit<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        transition?: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: vue.VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNode[]) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNode[]) | undefined;
    }>;
    $root: vue.ComponentPublicInstance | null;
    $parent: vue.ComponentPublicInstance | null;
    $host: Element | null;
    $emit: ((event: "keydown", e: KeyboardEvent) => void) & ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterEnter") => void) & ((event: "afterLeave") => void);
    $el: any;
    $options: vue.ComponentOptionsBase<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        transition?: string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            $stable?: boolean;
        } | {
            default?: ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: TemplateRef;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } & {
        onAfterEnter?: (() => any) | undefined;
        onAfterLeave?: (() => any) | undefined;
        onKeydown?: ((e: KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, {
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
        'click:outside': (e: MouseEvent) => true;
        'update:modelValue': (value: boolean) => true;
        keydown: (e: KeyboardEvent) => true;
        afterEnter: () => true;
        afterLeave: () => true;
    }, string, {
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        zIndex: string | number;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }, {}, string, vue.SlotsType<Partial<{
        default: (arg: {
            isActive: Ref<boolean>;
        }) => vue.VNode[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNode[];
    }>>, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & {
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
        renderTracked?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
        renderTriggered?: ((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: vue.ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, _vue_reactivity.OnCleanup]) => any : (...args: [any, any, _vue_reactivity.OnCleanup]) => any, options?: vue.WatchOptions): vue.WatchStopHandle;
} & Readonly<{
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    persistent: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | LocationStrategyFunction;
    scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    scrim: string | boolean;
    _disableGlobalStack: boolean;
}> & Omit<{
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    persistent: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | LocationStrategyFunction;
    scrollStrategy: "none" | "block" | "close" | ScrollStrategyFunction | "reposition";
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    scrim: string | boolean;
    _disableGlobalStack: boolean;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    opacity?: string | number | undefined;
    transition?: string | boolean | (vue.TransitionProps & {
        component?: vue.Component;
    }) | null | undefined;
    target?: Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined;
    class?: any;
    theme?: string | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    activator?: Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentClass?: any;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | {
        $stable?: boolean;
    } | {
        default?: ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } | ((arg: {
        isActive: Ref<boolean>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isActive: Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: TemplateRef;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isActive: Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: TemplateRef;
    }) => vue.VNodeChild) | undefined;
} & {
    onAfterEnter?: (() => any) | undefined;
    onAfterLeave?: (() => any) | undefined;
    onKeydown?: ((e: KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
}, "target" | "contentEl" | "activatorEl" | ("absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack") | "scrimEl" | "animateClick" | "globalTop" | "localTop" | "updateLocation"> & vue.ShallowUnwrapRef<{
    activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    animateClick: () => void;
    contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    globalTop: Readonly<Ref<boolean, boolean>>;
    localTop: Readonly<Ref<boolean, boolean>>;
    updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
}> & {} & vue.ComponentCustomProperties & {}, "offset" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "opacity" | "transition" | "target" | "class" | "theme" | "onAfterEnter" | "onAfterLeave" | "onKeydown" | "$children" | "v-slots" | "v-slot:default" | keyof vue.VNodeProps | "onUpdate:modelValue" | "closeDelay" | "openDelay" | "activator" | "contentClass" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "_disableGlobalStack") | "v-slot:activator">, `$${any}`> & {
    _allExposed: {
        activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        scrimEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        target: vue.ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
        animateClick: () => void;
        contentEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        globalTop: Readonly<Ref<boolean, boolean>>;
        localTop: Readonly<Ref<boolean, boolean>>;
        updateLocation: Ref<((e: Event) => void) | undefined, ((e: Event) => void) | undefined>;
    } | {};
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: boolean) => true;
}, string, {
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component;
    }) | null;
    zIndex: string | number;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    timeout: string | number;
    vertical: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | LocationStrategyFunction;
    rounded: string | number | boolean;
    tile: boolean;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
}, {}, string, vue.SlotsType<Partial<{
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNode[];
    default: () => vue.VNode[];
    actions: (arg: {
        isActive: Ref<boolean>;
    }) => vue.VNode[];
    text: () => vue.VNode[];
}>>, vue.GlobalComponents, vue.GlobalDirectives, string, vue.ComponentProvideOptions> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    offset: vue.PropType<StrategyProps$1["offset"]>;
    absolute: BooleanConstructor;
    location: {
        type: vue.PropType<StrategyProps$1["location"]>;
        default: string;
    };
    origin: {
        type: vue.PropType<StrategyProps$1["origin"]>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    opacity: (StringConstructor | NumberConstructor)[];
    transition: {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    target: vue.PropType<Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: vue.PropType<ClassValue>;
    theme: StringConstructor;
    modelValue: BooleanConstructor;
    locationStrategy: {
        type: vue.PropType<StrategyProps$1["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    attach: vue.PropType<boolean | string | Element>;
    color: StringConstructor;
    variant: {
        type: vue.PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}, vue.ExtractPropTypes<{
    offset: vue.PropType<StrategyProps$1["offset"]>;
    absolute: BooleanConstructor;
    location: {
        type: vue.PropType<StrategyProps$1["location"]>;
        default: string;
    };
    origin: {
        type: vue.PropType<StrategyProps$1["origin"]>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    opacity: (StringConstructor | NumberConstructor)[];
    transition: {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component;
        }) | null>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    target: vue.PropType<Element | "cursor" | "parent" | (string & {}) | vue.ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: vue.PropType<ClassValue>;
    theme: StringConstructor;
    modelValue: BooleanConstructor;
    locationStrategy: {
        type: vue.PropType<StrategyProps$1["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<Element | "parent" | (string & {}) | vue.ComponentPublicInstance | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    attach: vue.PropType<boolean | string | Element>;
    color: StringConstructor;
    variant: {
        type: vue.PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: vue.PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    multiLine: BooleanConstructor;
    text: StringConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    vertical: BooleanConstructor;
}>>;
type VSnackbar = InstanceType<typeof VSnackbar>;

type SnackbarMessage = string | (Omit<VSnackbar['$props'], 'modelValue' | 'onUpdate:modelValue' | 'activator' | 'activatorProps' | 'closeDelay' | 'openDelay' | 'openOnClick' | 'openOnFocus' | 'openOnHover' | 'style' | '$children' | 'v-slots' | `v-slot:${string}` | keyof VNodeProps> & {
    style?: any;
});

interface VuetifyOptions {
    aliases?: Record<string, any>;
    blueprint?: Blueprint;
    components?: Record<string, any>;
    date?: DateOptions;
    directives?: Record<string, any>;
    defaults?: DefaultsOptions;
    display?: DisplayOptions;
    goTo?: GoToOptions;
    theme?: ThemeOptions;
    icons?: IconOptions;
    locale?: LocaleOptions & RtlOptions;
    ssr?: SSROptions;
}
interface Blueprint extends Omit<VuetifyOptions, 'blueprint'> {
}
declare function createVuetify(vuetify?: VuetifyOptions): {
    install: (app: App) => void;
    unmount: () => void;
    defaults: vue.Ref<DefaultsInstance, DefaultsInstance>;
    display: DisplayInstance;
    theme: ThemeInstance & {
        install: (app: App) => void;
    };
    icons: InternalIconOptions;
    locale: {
        isRtl: vue.Ref<boolean>;
        rtl: vue.Ref<Record<string, boolean>>;
        rtlClasses: vue.Ref<string>;
        name: string;
        decimalSeparator: vue.ShallowRef<string>;
        messages: vue.Ref<LocaleMessages>;
        current: vue.Ref<string>;
        fallback: vue.Ref<string>;
        t: (key: string, ...params: unknown[]) => string;
        n: (value: number) => string;
        provide: (props: LocaleOptions) => LocaleInstance;
    };
    date: {
        options: InternalDateOptions;
        instance: {
            locale?: any;
            date: (value?: any) => unknown;
            format: (date: unknown, formatString: string) => string;
            toJsDate: (value: unknown) => Date;
            parseISO: (date: string) => unknown;
            toISO: (date: unknown) => string;
            startOfDay: (date: unknown) => unknown;
            endOfDay: (date: unknown) => unknown;
            startOfWeek: (date: unknown, firstDayOfWeek?: number | string) => unknown;
            endOfWeek: (date: unknown) => unknown;
            startOfMonth: (date: unknown) => unknown;
            endOfMonth: (date: unknown) => unknown;
            startOfYear: (date: unknown) => unknown;
            endOfYear: (date: unknown) => unknown;
            isAfter: (date: unknown, comparing: unknown) => boolean;
            isAfterDay: (date: unknown, comparing: unknown) => boolean;
            isSameDay: (date: unknown, comparing: unknown) => boolean;
            isSameMonth: (date: unknown, comparing: unknown) => boolean;
            isSameYear: (date: unknown, comparing: unknown) => boolean;
            isBefore: (date: unknown, comparing: unknown) => boolean;
            isEqual: (date: unknown, comparing: unknown) => boolean;
            isValid: (date: any) => boolean;
            isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
            addMinutes: (date: unknown, amount: number) => unknown;
            addHours: (date: unknown, amount: number) => unknown;
            addDays: (date: unknown, amount: number) => unknown;
            addWeeks: (date: unknown, amount: number) => unknown;
            addMonths: (date: unknown, amount: number) => unknown;
            getYear: (date: unknown) => number;
            setYear: (date: unknown, year: number) => unknown;
            getDiff: (date: unknown, comparing: unknown, unit?: string) => number;
            getWeekArray: (date: unknown, firstDayOfWeek?: number | string) => unknown[][];
            getWeekdays: (firstDayOfWeek?: number | string, weekdayFormat?: "long" | "short" | "narrow") => string[];
            getWeek: (date: unknown, firstDayOfWeek?: number | string, firstWeekMinSize?: number) => number;
            getMonth: (date: unknown) => number;
            setMonth: (date: unknown, month: number) => unknown;
            getDate: (date: unknown) => number;
            setDate: (date: unknown, day: number) => unknown;
            getNextMonth: (date: unknown) => unknown;
            getPreviousMonth: (date: unknown) => unknown;
            getHours: (date: unknown) => number;
            setHours: (date: unknown, hours: number) => unknown;
            getMinutes: (date: unknown) => number;
            setMinutes: (date: unknown, minutes: number) => unknown;
        };
    };
    goTo: GoToInstance;
};
declare namespace createVuetify {
    var version: string;
}
declare const version: string;

export { DateModule, createVuetify, useDate, useDefaults, useDisplay, useGoTo, useHotkey, useLayout, useLocale, useRtl, useTheme, version };
export type { ActiveStrategy, Anchor, Blueprint, CellPropsFunction as DataTableCellPropsFunction, DataTableCompareFunction, DataTableHeader, HeaderCellPropsFunction as DataTableHeaderCellPropsFunction, RowPropsFunction as DataTableRowPropsFunction, SortItem as DataTableSortItem, DateInstance, DateOptions, DefaultsInstance, DisplayBreakpoint, DisplayInstance, DisplayThresholds, FilterFunction, FilterMatch, GoToInstance, IconAliases, IconOptions, IconProps, IconSet, InternalItem, JSXComponent, LocaleInstance, LocaleMessages, LocaleOptions, LocationStrategyFunction, OpenStrategy, RtlInstance, RtlOptions, ScrollStrategyFunction, SelectStrategy, SnackbarMessage as SnackbarQueueMessage, SubmitEventPromise, ThemeDefinition, ThemeInstance, ValidationRule, VuetifyOptions };

/* eslint-disable local-rules/sort-imports */

import 'vue/jsx'
import type { UnwrapNestedRefs, VNodeChild } from 'vue'

// These already exist in scope in the final bundle

declare global {
  namespace JSX {
    interface ElementChildrenAttribute {
      $children: {}
    }
  }
}

declare module 'vue' {
  interface Vuetify {
    defaults: DefaultsInstance
    display: UnwrapNestedRefs<DisplayInstance>
    theme: UnwrapNestedRefs<ThemeInstance>
    icons: IconOptions
    locale: UnwrapNestedRefs<LocaleInstance & RtlInstance>
    date: DateInstance
  }

  export interface ComponentCustomProperties {
    $vuetify: Vuetify
  }
  export interface HTMLAttributes {
    $children?: VNodeChild
  }
  export interface SVGAttributes {
    $children?: VNodeChild
  }
  export interface GlobalComponents {
    VAlert: typeof import('vuetify/components')['VAlert']
    VAlertTitle: typeof import('vuetify/components')['VAlertTitle']
    VAppBar: typeof import('vuetify/components')['VAppBar']
    VAppBarNavIcon: typeof import('vuetify/components')['VAppBarNavIcon']
    VAppBarTitle: typeof import('vuetify/components')['VAppBarTitle']
    VAvatar: typeof import('vuetify/components')['VAvatar']
    VAutocomplete: typeof import('vuetify/components')['VAutocomplete']
    VBadge: typeof import('vuetify/components')['VBadge']
    VBanner: typeof import('vuetify/components')['VBanner']
    VBannerActions: typeof import('vuetify/components')['VBannerActions']
    VBannerText: typeof import('vuetify/components')['VBannerText']
    VBottomNavigation: typeof import('vuetify/components')['VBottomNavigation']
    VBtn: typeof import('vuetify/components')['VBtn']
    VBottomSheet: typeof import('vuetify/components')['VBottomSheet']
    VBreadcrumbs: typeof import('vuetify/components')['VBreadcrumbs']
    VBreadcrumbsItem: typeof import('vuetify/components')['VBreadcrumbsItem']
    VBreadcrumbsDivider: typeof import('vuetify/components')['VBreadcrumbsDivider']
    VCheckbox: typeof import('vuetify/components')['VCheckbox']
    VCheckboxBtn: typeof import('vuetify/components')['VCheckboxBtn']
    VCarousel: typeof import('vuetify/components')['VCarousel']
    VCarouselItem: typeof import('vuetify/components')['VCarouselItem']
    VChipGroup: typeof import('vuetify/components')['VChipGroup']
    VCard: typeof import('vuetify/components')['VCard']
    VCardActions: typeof import('vuetify/components')['VCardActions']
    VCardItem: typeof import('vuetify/components')['VCardItem']
    VCardSubtitle: typeof import('vuetify/components')['VCardSubtitle']
    VCardText: typeof import('vuetify/components')['VCardText']
    VCardTitle: typeof import('vuetify/components')['VCardTitle']
    VBtnGroup: typeof import('vuetify/components')['VBtnGroup']
    VBtnToggle: typeof import('vuetify/components')['VBtnToggle']
    VChip: typeof import('vuetify/components')['VChip']
    VColorPicker: typeof import('vuetify/components')['VColorPicker']
    VCode: typeof import('vuetify/components')['VCode']
    VDatePicker: typeof import('vuetify/components')['VDatePicker']
    VDatePickerControls: typeof import('vuetify/components')['VDatePickerControls']
    VDatePickerHeader: typeof import('vuetify/components')['VDatePickerHeader']
    VDatePickerMonth: typeof import('vuetify/components')['VDatePickerMonth']
    VDatePickerMonths: typeof import('vuetify/components')['VDatePickerMonths']
    VDatePickerYears: typeof import('vuetify/components')['VDatePickerYears']
    VCounter: typeof import('vuetify/components')['VCounter']
    VApp: typeof import('vuetify/components')['VApp']
    VCombobox: typeof import('vuetify/components')['VCombobox']
    VEmptyState: typeof import('vuetify/components')['VEmptyState']
    VDataTable: typeof import('vuetify/components')['VDataTable']
    VDataTableHeaders: typeof import('vuetify/components')['VDataTableHeaders']
    VDataTableFooter: typeof import('vuetify/components')['VDataTableFooter']
    VDataTableRows: typeof import('vuetify/components')['VDataTableRows']
    VDataTableRow: typeof import('vuetify/components')['VDataTableRow']
    VDataTableVirtual: typeof import('vuetify/components')['VDataTableVirtual']
    VDataTableServer: typeof import('vuetify/components')['VDataTableServer']
    VDialog: typeof import('vuetify/components')['VDialog']
    VDivider: typeof import('vuetify/components')['VDivider']
    VFab: typeof import('vuetify/components')['VFab']
    VFileInput: typeof import('vuetify/components')['VFileInput']
    VField: typeof import('vuetify/components')['VField']
    VFieldLabel: typeof import('vuetify/components')['VFieldLabel']
    VIcon: typeof import('vuetify/components')['VIcon']
    VComponentIcon: typeof import('vuetify/components')['VComponentIcon']
    VSvgIcon: typeof import('vuetify/components')['VSvgIcon']
    VLigatureIcon: typeof import('vuetify/components')['VLigatureIcon']
    VClassIcon: typeof import('vuetify/components')['VClassIcon']
    VImg: typeof import('vuetify/components')['VImg']
    VInput: typeof import('vuetify/components')['VInput']
    VInfiniteScroll: typeof import('vuetify/components')['VInfiniteScroll']
    VKbd: typeof import('vuetify/components')['VKbd']
    VList: typeof import('vuetify/components')['VList']
    VListGroup: typeof import('vuetify/components')['VListGroup']
    VListImg: typeof import('vuetify/components')['VListImg']
    VListItem: typeof import('vuetify/components')['VListItem']
    VListItemAction: typeof import('vuetify/components')['VListItemAction']
    VListItemMedia: typeof import('vuetify/components')['VListItemMedia']
    VListItemSubtitle: typeof import('vuetify/components')['VListItemSubtitle']
    VListItemTitle: typeof import('vuetify/components')['VListItemTitle']
    VListSubheader: typeof import('vuetify/components')['VListSubheader']
    VMain: typeof import('vuetify/components')['VMain']
    VLabel: typeof import('vuetify/components')['VLabel']
    VItemGroup: typeof import('vuetify/components')['VItemGroup']
    VItem: typeof import('vuetify/components')['VItem']
    VMessages: typeof import('vuetify/components')['VMessages']
    VMenu: typeof import('vuetify/components')['VMenu']
    VNavigationDrawer: typeof import('vuetify/components')['VNavigationDrawer']
    VNumberInput: typeof import('vuetify/components')['VNumberInput']
    VOverlay: typeof import('vuetify/components')['VOverlay']
    VPagination: typeof import('vuetify/components')['VPagination']
    VOtpInput: typeof import('vuetify/components')['VOtpInput']
    VProgressCircular: typeof import('vuetify/components')['VProgressCircular']
    VProgressLinear: typeof import('vuetify/components')['VProgressLinear']
    VRadioGroup: typeof import('vuetify/components')['VRadioGroup']
    VRating: typeof import('vuetify/components')['VRating']
    VSelectionControl: typeof import('vuetify/components')['VSelectionControl']
    VSelectionControlGroup: typeof import('vuetify/components')['VSelectionControlGroup']
    VSelect: typeof import('vuetify/components')['VSelect']
    VSkeletonLoader: typeof import('vuetify/components')['VSkeletonLoader']
    VSheet: typeof import('vuetify/components')['VSheet']
    VSnackbar: typeof import('vuetify/components')['VSnackbar']
    VSlider: typeof import('vuetify/components')['VSlider']
    VSwitch: typeof import('vuetify/components')['VSwitch']
    VStepper: typeof import('vuetify/components')['VStepper']
    VStepperActions: typeof import('vuetify/components')['VStepperActions']
    VStepperHeader: typeof import('vuetify/components')['VStepperHeader']
    VStepperItem: typeof import('vuetify/components')['VStepperItem']
    VStepperWindow: typeof import('vuetify/components')['VStepperWindow']
    VStepperWindowItem: typeof import('vuetify/components')['VStepperWindowItem']
    VSlideGroup: typeof import('vuetify/components')['VSlideGroup']
    VSlideGroupItem: typeof import('vuetify/components')['VSlideGroupItem']
    VTable: typeof import('vuetify/components')['VTable']
    VSystemBar: typeof import('vuetify/components')['VSystemBar']
    VTextField: typeof import('vuetify/components')['VTextField']
    VTab: typeof import('vuetify/components')['VTab']
    VTabs: typeof import('vuetify/components')['VTabs']
    VTabsWindow: typeof import('vuetify/components')['VTabsWindow']
    VTabsWindowItem: typeof import('vuetify/components')['VTabsWindowItem']
    VToolbar: typeof import('vuetify/components')['VToolbar']
    VToolbarTitle: typeof import('vuetify/components')['VToolbarTitle']
    VToolbarItems: typeof import('vuetify/components')['VToolbarItems']
    VTooltip: typeof import('vuetify/components')['VTooltip']
    VTextarea: typeof import('vuetify/components')['VTextarea']
    VTimeline: typeof import('vuetify/components')['VTimeline']
    VTimelineItem: typeof import('vuetify/components')['VTimelineItem']
    VWindow: typeof import('vuetify/components')['VWindow']
    VWindowItem: typeof import('vuetify/components')['VWindowItem']
    VTreeview: typeof import('vuetify/components')['VTreeview']
    VTreeviewItem: typeof import('vuetify/components')['VTreeviewItem']
    VTreeviewGroup: typeof import('vuetify/components')['VTreeviewGroup']
    VTimePicker: typeof import('vuetify/components')['VTimePicker']
    VTimePickerClock: typeof import('vuetify/components')['VTimePickerClock']
    VTimePickerControls: typeof import('vuetify/components')['VTimePickerControls']
    VConfirmEdit: typeof import('vuetify/components')['VConfirmEdit']
    VDataIterator: typeof import('vuetify/components')['VDataIterator']
    VDefaultsProvider: typeof import('vuetify/components')['VDefaultsProvider']
    VFooter: typeof import('vuetify/components')['VFooter']
    VForm: typeof import('vuetify/components')['VForm']
    VHover: typeof import('vuetify/components')['VHover']
    VContainer: typeof import('vuetify/components')['VContainer']
    VCol: typeof import('vuetify/components')['VCol']
    VRow: typeof import('vuetify/components')['VRow']
    VSpacer: typeof import('vuetify/components')['VSpacer']
    VLayout: typeof import('vuetify/components')['VLayout']
    VLayoutItem: typeof import('vuetify/components')['VLayoutItem']
    VLazy: typeof import('vuetify/components')['VLazy']
    VLocaleProvider: typeof import('vuetify/components')['VLocaleProvider']
    VNoSsr: typeof import('vuetify/components')['VNoSsr']
    VParallax: typeof import('vuetify/components')['VParallax']
    VRadio: typeof import('vuetify/components')['VRadio']
    VRangeSlider: typeof import('vuetify/components')['VRangeSlider']
    VResponsive: typeof import('vuetify/components')['VResponsive']
    VSparkline: typeof import('vuetify/components')['VSparkline']
    VSpeedDial: typeof import('vuetify/components')['VSpeedDial']
    VSnackbarQueue: typeof import('vuetify/components')['VSnackbarQueue']
    VThemeProvider: typeof import('vuetify/components')['VThemeProvider']
    VExpansionPanels: typeof import('vuetify/components')['VExpansionPanels']
    VExpansionPanel: typeof import('vuetify/components')['VExpansionPanel']
    VExpansionPanelText: typeof import('vuetify/components')['VExpansionPanelText']
    VExpansionPanelTitle: typeof import('vuetify/components')['VExpansionPanelTitle']
    VVirtualScroll: typeof import('vuetify/components')['VVirtualScroll']
    VValidation: typeof import('vuetify/components')['VValidation']
    VFabTransition: typeof import('vuetify/components')['VFabTransition']
    VDialogBottomTransition: typeof import('vuetify/components')['VDialogBottomTransition']
    VDialogTopTransition: typeof import('vuetify/components')['VDialogTopTransition']
    VFadeTransition: typeof import('vuetify/components')['VFadeTransition']
    VScaleTransition: typeof import('vuetify/components')['VScaleTransition']
    VScrollXTransition: typeof import('vuetify/components')['VScrollXTransition']
    VScrollXReverseTransition: typeof import('vuetify/components')['VScrollXReverseTransition']
    VScrollYTransition: typeof import('vuetify/components')['VScrollYTransition']
    VScrollYReverseTransition: typeof import('vuetify/components')['VScrollYReverseTransition']
    VSlideXTransition: typeof import('vuetify/components')['VSlideXTransition']
    VSlideXReverseTransition: typeof import('vuetify/components')['VSlideXReverseTransition']
    VSlideYTransition: typeof import('vuetify/components')['VSlideYTransition']
    VSlideYReverseTransition: typeof import('vuetify/components')['VSlideYReverseTransition']
    VExpandTransition: typeof import('vuetify/components')['VExpandTransition']
    VExpandXTransition: typeof import('vuetify/components')['VExpandXTransition']
    VDialogTransition: typeof import('vuetify/components')['VDialogTransition']
    VCalendar: typeof import('vuetify/labs/components')['VCalendar']
    VCalendarDay: typeof import('vuetify/labs/components')['VCalendarDay']
    VCalendarHeader: typeof import('vuetify/labs/components')['VCalendarHeader']
    VCalendarInterval: typeof import('vuetify/labs/components')['VCalendarInterval']
    VCalendarIntervalEvent: typeof import('vuetify/labs/components')['VCalendarIntervalEvent']
    VCalendarMonthDay: typeof import('vuetify/labs/components')['VCalendarMonthDay']
    VIconBtn: typeof import('vuetify/labs/components')['VIconBtn']
    VFileUpload: typeof import('vuetify/labs/components')['VFileUpload']
    VFileUploadItem: typeof import('vuetify/labs/components')['VFileUploadItem']
    VPie: typeof import('vuetify/labs/components')['VPie']
    VPieSegment: typeof import('vuetify/labs/components')['VPieSegment']
    VPieTooltip: typeof import('vuetify/labs/components')['VPieTooltip']
    VColorInput: typeof import('vuetify/labs/components')['VColorInput']
    VPicker: typeof import('vuetify/labs/components')['VPicker']
    VPickerTitle: typeof import('vuetify/labs/components')['VPickerTitle']
    VVideo: typeof import('vuetify/labs/components')['VVideo']
    VVideoControls: typeof import('vuetify/labs/components')['VVideoControls']
    VVideoVolume: typeof import('vuetify/labs/components')['VVideoVolume']
    VHotkey: typeof import('vuetify/labs/components')['VHotkey']
    VStepperVertical: typeof import('vuetify/labs/components')['VStepperVertical']
    VStepperVerticalItem: typeof import('vuetify/labs/components')['VStepperVerticalItem']
    VStepperVerticalActions: typeof import('vuetify/labs/components')['VStepperVerticalActions']
    VDateInput: typeof import('vuetify/labs/components')['VDateInput']
    VMaskInput: typeof import('vuetify/labs/components')['VMaskInput']
    VPullToRefresh: typeof import('vuetify/labs/components')['VPullToRefresh']
  }
  export interface GlobalDirectives {
    vClickOutside: typeof import('vuetify/directives')['ClickOutside']
    vIntersect: typeof import('vuetify/directives')['Intersect']
    vMutate: typeof import('vuetify/directives')['Mutate']
    vResize: typeof import('vuetify/directives')['Resize']
    vRipple: typeof import('vuetify/directives')['Ripple']
    vScroll: typeof import('vuetify/directives')['Scroll']
    vTouch: typeof import('vuetify/directives')['Touch']
    vTooltip: typeof import('vuetify/directives')['Tooltip']
  }
}
