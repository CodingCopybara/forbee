import type { PropType } from 'vue';
import type { CalendarDay } from "../../composables/calendar.js";
export type VCalendarMonthDaySlots = {
    'day-body': {
        day?: CalendarDay;
        events?: Array<any>;
    };
    'day-event': {
        day?: CalendarDay;
        allDay: boolean;
        event: Record<string, unknown>;
    };
    'day-title': {
        title?: number | string;
    };
};
export declare const makeVCalendarMonthDayProps: <Defaults extends {
    active?: unknown;
    color?: unknown;
    day?: unknown;
    disabled?: unknown;
    events?: unknown;
    title?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    day: unknown extends Defaults["day"] ? {
        type: PropType<CalendarDay>;
    } : Omit<{
        type: PropType<CalendarDay>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["day"] ? CalendarDay : CalendarDay | Defaults["day"]>;
        default: unknown extends Defaults["day"] ? CalendarDay : CalendarDay | Defaults["day"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    events: unknown extends Defaults["events"] ? {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        from<T, U_1>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U_1, thisArg?: any): U_1[];
        of<T>(...items: T[]): T[];
        fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
        fromAsync<T, U_2>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>, index: number) => U_2, thisArg?: any): Promise<Awaited<U_2>[]>;
        readonly [Symbol.species]: ArrayConstructor;
    } : {
        type: PropType<unknown extends Defaults["events"] ? any[] : any[] | Defaults["events"]>;
        default: unknown extends Defaults["events"] ? any[] : any[] | Defaults["events"];
    };
    title: unknown extends Defaults["title"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["title"] ? string | number : string | number | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string | number : NonNullable<string | number> | Defaults["title"];
    };
};
export declare const VCalendarMonthDay: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        active: boolean;
        disabled: boolean;
    } & {
        color?: string | undefined;
        title?: string | number | undefined;
        day?: CalendarDay | undefined;
        events?: any[] | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            'day-body'?: ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'day-body'?: false | ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: false | ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: false | ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:day-body"?: false | ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-event"?: false | ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-title"?: false | ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        active: boolean;
        disabled: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        'day-body': (arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNode[];
        'day-event': (arg: {
            day?: CalendarDay;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => import("vue").VNode[];
        'day-title': (arg: {
            title?: number | string;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        active: boolean;
        disabled: boolean;
    } & {
        color?: string | undefined;
        title?: string | number | undefined;
        day?: CalendarDay | undefined;
        events?: any[] | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            'day-body'?: ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'day-body'?: false | ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: false | ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: false | ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:day-body"?: false | ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-event"?: false | ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-title"?: false | ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        active: boolean;
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    active: boolean;
    disabled: boolean;
} & {
    color?: string | undefined;
    title?: string | number | undefined;
    day?: CalendarDay | undefined;
    events?: any[] | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        $stable?: boolean;
    } | {
        'day-body'?: ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        'day-event'?: ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        'day-title'?: ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        'day-body'?: false | ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        'day-event'?: false | ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        'day-title'?: false | ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:day-body"?: false | ((arg: {
        day?: CalendarDay;
        events?: Array<any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:day-event"?: false | ((arg: {
        day?: CalendarDay;
        allDay: boolean;
        event: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:day-title"?: false | ((arg: {
        title?: number | string;
    }) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    disabled: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    'day-body': (arg: {
        day?: CalendarDay;
        events?: Array<any>;
    }) => import("vue").VNode[];
    'day-event': (arg: {
        day?: CalendarDay;
        allDay: boolean;
        event: Record<string, unknown>;
    }) => import("vue").VNode[];
    'day-title': (arg: {
        title?: number | string;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    active: BooleanConstructor;
    color: StringConstructor;
    day: {
        type: PropType<CalendarDay>;
    };
    disabled: BooleanConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        of<T>(...items: T[]): T[];
        fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
        fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>, index: number) => U, thisArg?: any): Promise<Awaited<U>[]>;
        readonly [Symbol.species]: ArrayConstructor;
    };
    title: (StringConstructor | NumberConstructor)[];
}, import("vue").ExtractPropTypes<{
    active: BooleanConstructor;
    color: StringConstructor;
    day: {
        type: PropType<CalendarDay>;
    };
    disabled: BooleanConstructor;
    events: {
        (arrayLength: number): any[];
        (...items: any[]): any[];
        new (arrayLength: number): any[];
        new (...items: any[]): any[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
        from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
        of<T>(...items: T[]): T[];
        fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
        fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>, index: number) => U, thisArg?: any): Promise<Awaited<U>[]>;
        readonly [Symbol.species]: ArrayConstructor;
    };
    title: (StringConstructor | NumberConstructor)[];
}>>;
export type VCalendarMonthDay = InstanceType<typeof VCalendarMonthDay>;
