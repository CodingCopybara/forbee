import type { VCalendarDaySlots } from './VCalendarDay.js';
import type { CalendarDay } from "../../composables/calendar.js";
export declare const makeVCalendarProps: <Defaults extends {
    nextIcon?: unknown;
    prevIcon?: unknown;
    title?: unknown;
    text?: unknown;
    viewMode?: unknown;
    day?: unknown;
    dayIndex?: unknown;
    events?: unknown;
    intervalDivisions?: unknown;
    intervalDuration?: unknown;
    intervalHeight?: unknown;
    intervalFormat?: unknown;
    intervalStart?: unknown;
    hideDayHeader?: unknown;
    intervals?: unknown;
    allowedDates?: unknown;
    disabled?: unknown;
    displayValue?: unknown;
    modelValue?: unknown;
    month?: unknown;
    max?: unknown;
    min?: unknown;
    showAdjacentMonths?: unknown;
    year?: unknown;
    weekdays?: unknown;
    weeksInMonth?: unknown;
    firstDayOfWeek?: unknown;
    weekdayFormat?: unknown;
    hideHeader?: unknown;
    hideWeekNumber?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["nextIcon"] ? string : string | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? string : string | Defaults["nextIcon"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["prevIcon"] ? string : string | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? string : string | Defaults["prevIcon"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    text: unknown extends Defaults["text"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: import("vue").PropType<"month" | "week" | "day">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"month" | "week" | "day">;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["viewMode"] ? "day" | "month" | "week" : "day" | "month" | "week" | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? "day" | "month" | "week" : NonNullable<"day" | "month" | "week"> | Defaults["viewMode"];
    };
    day: unknown extends Defaults["day"] ? {
        type: ObjectConstructor;
        default: () => {};
    } : Omit<{
        type: ObjectConstructor;
        default: () => {};
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["day"] ? Record<string, any> : Record<string, any> | Defaults["day"]>;
        default: unknown extends Defaults["day"] ? Record<string, any> : Record<string, any> | Defaults["day"];
    };
    dayIndex: unknown extends Defaults["dayIndex"] ? NumberConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dayIndex"] ? number : number | Defaults["dayIndex"]>;
        default: unknown extends Defaults["dayIndex"] ? number : number | Defaults["dayIndex"];
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
        type: import("vue").PropType<unknown extends Defaults["events"] ? any[] : any[] | Defaults["events"]>;
        default: unknown extends Defaults["events"] ? any[] : any[] | Defaults["events"];
    };
    intervalDivisions: unknown extends Defaults["intervalDivisions"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["intervalDivisions"] ? number : number | Defaults["intervalDivisions"]>;
        default: unknown extends Defaults["intervalDivisions"] ? number : number | Defaults["intervalDivisions"];
    };
    intervalDuration: unknown extends Defaults["intervalDuration"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["intervalDuration"] ? number : number | Defaults["intervalDuration"]>;
        default: unknown extends Defaults["intervalDuration"] ? number : number | Defaults["intervalDuration"];
    };
    intervalHeight: unknown extends Defaults["intervalHeight"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["intervalHeight"] ? number : number | Defaults["intervalHeight"]>;
        default: unknown extends Defaults["intervalHeight"] ? number : number | Defaults["intervalHeight"];
    };
    intervalFormat: unknown extends Defaults["intervalFormat"] ? {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    } : Omit<{
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["intervalFormat"] ? string | Function : string | Function | Defaults["intervalFormat"]>;
        default: unknown extends Defaults["intervalFormat"] ? string | Function : NonNullable<string | Function> | Defaults["intervalFormat"];
    };
    intervalStart: unknown extends Defaults["intervalStart"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["intervalStart"] ? number : number | Defaults["intervalStart"]>;
        default: unknown extends Defaults["intervalStart"] ? number : number | Defaults["intervalStart"];
    };
    hideDayHeader: unknown extends Defaults["hideDayHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDayHeader"] ? boolean : boolean | Defaults["hideDayHeader"]>;
        default: unknown extends Defaults["hideDayHeader"] ? boolean : boolean | Defaults["hideDayHeader"];
    };
    intervals: unknown extends Defaults["intervals"] ? {
        type: NumberConstructor;
        default: number;
    } : Omit<{
        type: NumberConstructor;
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["intervals"] ? number : number | Defaults["intervals"]>;
        default: unknown extends Defaults["intervals"] ? number : number | Defaults["intervals"];
    };
    allowedDates: unknown extends Defaults["allowedDates"] ? import("vue").PropType<unknown[] | ((date: unknown) => boolean)> : {
        type: import("vue").PropType<unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : unknown[] | ((date: unknown) => boolean) | Defaults["allowedDates"]>;
        default: unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : NonNullable<unknown[] | ((date: unknown) => boolean)> | Defaults["allowedDates"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    displayValue: unknown extends Defaults["displayValue"] ? import("vue").PropType<unknown> : {
        type: import("vue").PropType<unknown extends Defaults["displayValue"] ? unknown : unknown>;
        default: unknown extends Defaults["displayValue"] ? unknown : {} | Defaults["displayValue"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? import("vue").PropType<unknown[]> : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"];
    };
    month: unknown extends Defaults["month"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["month"] ? string | number : string | number | Defaults["month"]>;
        default: unknown extends Defaults["month"] ? string | number : NonNullable<string | number> | Defaults["month"];
    };
    max: unknown extends Defaults["max"] ? import("vue").PropType<unknown> : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? import("vue").PropType<unknown> : {
        type: import("vue").PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    showAdjacentMonths: unknown extends Defaults["showAdjacentMonths"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"]>;
        default: unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"];
    };
    year: unknown extends Defaults["year"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["year"] ? string | number : string | number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? string | number : NonNullable<string | number> | Defaults["year"];
    };
    weekdays: unknown extends Defaults["weekdays"] ? {
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    } : Omit<{
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"]>;
        default: unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"];
    };
    weeksInMonth: unknown extends Defaults["weeksInMonth"] ? {
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["weeksInMonth"] ? "static" | "dynamic" : "static" | "dynamic" | Defaults["weeksInMonth"]>;
        default: unknown extends Defaults["weeksInMonth"] ? "static" | "dynamic" : NonNullable<"static" | "dynamic"> | Defaults["weeksInMonth"];
    };
    firstDayOfWeek: unknown extends Defaults["firstDayOfWeek"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["firstDayOfWeek"] ? string | number : string | number | Defaults["firstDayOfWeek"]>;
        default: unknown extends Defaults["firstDayOfWeek"] ? string | number : NonNullable<string | number> | Defaults["firstDayOfWeek"];
    };
    weekdayFormat: unknown extends Defaults["weekdayFormat"] ? import("vue").PropType<"long" | "short" | "narrow" | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["weekdayFormat"] ? "long" | "short" | "narrow" | undefined : "long" | "short" | "narrow" | Defaults["weekdayFormat"] | undefined>;
        default: unknown extends Defaults["weekdayFormat"] ? "long" | "short" | "narrow" | undefined : NonNullable<"long" | "short" | "narrow" | undefined> | Defaults["weekdayFormat"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    hideWeekNumber: unknown extends Defaults["hideWeekNumber"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideWeekNumber"] ? boolean : boolean | Defaults["hideWeekNumber"]>;
        default: unknown extends Defaults["hideWeekNumber"] ? boolean : boolean | Defaults["hideWeekNumber"];
    };
};
export type VCalendarSlots = VCalendarDaySlots & {
    'day-body': {
        day?: CalendarDay;
        events?: Array<any>;
    };
    'day-title': {
        title?: number | string;
    };
    'day-event': {
        day?: CalendarDay;
        allDay: boolean;
        event?: Record<string, unknown>;
    };
    header: {
        title: string;
        clickNext: Function;
        clickPrev: Function;
        clickToday: Function;
    };
    'day-interval': {
        day?: CalendarDay;
        dayIndex: number;
        events?: Array<any>;
    };
    title: {
        title?: string;
    };
};
export declare const VCalendar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        hideHeader: boolean;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        max?: unknown;
        min?: unknown;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        events?: any[] | undefined;
        modelValue?: unknown[] | undefined;
        firstDayOfWeek?: string | number | undefined;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
        weekdayFormat?: "long" | "short" | "narrow" | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            'interval-body'?: ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-event'?: ((arg: {
                height: string;
                margin: string;
                eventClass: string;
                event: any;
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-title'?: ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            interval?: ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
            'day-body'?: ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event?: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                title: string;
                clickNext: Function;
                clickPrev: Function;
                clickToday: Function;
            }) => import("vue").VNodeChild) | undefined;
            'day-interval'?: ((arg: {
                day?: CalendarDay;
                dayIndex: number;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            title?: ((arg: {
                title?: string;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'interval-body'?: false | ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-event'?: false | ((arg: {
                height: string;
                margin: string;
                eventClass: string;
                event: any;
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-title'?: false | ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            interval?: false | ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
            'day-body'?: false | ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: false | ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: false | ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event?: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                title: string;
                clickNext: Function;
                clickPrev: Function;
                clickToday: Function;
            }) => import("vue").VNodeChild) | undefined;
            'day-interval'?: false | ((arg: {
                day?: CalendarDay;
                dayIndex: number;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:interval-body"?: false | ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:interval-event"?: false | ((arg: {
            height: string;
            margin: string;
            eventClass: string;
            event: any;
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:interval-title"?: false | ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:interval"?: false | ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
        "v-slot:day-body"?: false | ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-title"?: false | ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-event"?: false | ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event?: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            title: string;
            clickNext: Function;
            clickPrev: Function;
            clickToday: Function;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-interval"?: false | ((arg: {
            day?: CalendarDay;
            dayIndex: number;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
        onToday?: ((...args: any[]) => any) | undefined;
    }, {
        daysInMonth: import("vue").ComputedRef<CalendarDay[]>;
        daysInWeek: import("vue").ComputedRef<CalendarDay[]>;
        genDays: (days: Date[], today: Date) => CalendarDay[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        next: null;
        prev: null;
        today: null;
        'update:modelValue': null;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        hideHeader: boolean;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        firstDayOfWeek: string | number;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        'interval-body': (arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNode[];
        'interval-event': (arg: {
            height: string;
            margin: string;
            eventClass: string;
            event: any;
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNode[];
        'interval-title': (arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNode[];
        interval: (arg: Record<string, unknown>) => import("vue").VNode[];
        'day-body': (arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNode[];
        'day-title': (arg: {
            title?: number | string;
        }) => import("vue").VNode[];
        'day-event': (arg: {
            day?: CalendarDay;
            allDay: boolean;
            event?: Record<string, unknown>;
        }) => import("vue").VNode[];
        header: (arg: {
            title: string;
            clickNext: Function;
            clickPrev: Function;
            clickToday: Function;
        }) => import("vue").VNode[];
        'day-interval': (arg: {
            day?: CalendarDay;
            dayIndex: number;
            events?: Array<any>;
        }) => import("vue").VNode[];
        title: (arg: {
            title?: string;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        hideHeader: boolean;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    } & {
        max?: unknown;
        min?: unknown;
        title?: string | undefined;
        month?: string | number | undefined;
        year?: string | number | undefined;
        events?: any[] | undefined;
        modelValue?: unknown[] | undefined;
        firstDayOfWeek?: string | number | undefined;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayValue?: unknown;
        weekdayFormat?: "long" | "short" | "narrow" | undefined;
        dayIndex?: number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            $stable?: boolean;
        } | {
            'interval-body'?: ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-event'?: ((arg: {
                height: string;
                margin: string;
                eventClass: string;
                event: any;
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-title'?: ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            interval?: ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
            'day-body'?: ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event?: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                title: string;
                clickNext: Function;
                clickPrev: Function;
                clickToday: Function;
            }) => import("vue").VNodeChild) | undefined;
            'day-interval'?: ((arg: {
                day?: CalendarDay;
                dayIndex: number;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            title?: ((arg: {
                title?: string;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'interval-body'?: false | ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-event'?: false | ((arg: {
                height: string;
                margin: string;
                eventClass: string;
                event: any;
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            'interval-title'?: false | ((arg: {
                interval: {
                    label: string;
                    start: unknown;
                    end: unknown;
                    events: any[];
                };
            }) => import("vue").VNodeChild) | undefined;
            interval?: false | ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
            'day-body'?: false | ((arg: {
                day?: CalendarDay;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            'day-title'?: false | ((arg: {
                title?: number | string;
            }) => import("vue").VNodeChild) | undefined;
            'day-event'?: false | ((arg: {
                day?: CalendarDay;
                allDay: boolean;
                event?: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                title: string;
                clickNext: Function;
                clickPrev: Function;
                clickToday: Function;
            }) => import("vue").VNodeChild) | undefined;
            'day-interval'?: false | ((arg: {
                day?: CalendarDay;
                dayIndex: number;
                events?: Array<any>;
            }) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: {
                title?: string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:interval-body"?: false | ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:interval-event"?: false | ((arg: {
            height: string;
            margin: string;
            eventClass: string;
            event: any;
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:interval-title"?: false | ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:interval"?: false | ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
        "v-slot:day-body"?: false | ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-title"?: false | ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-event"?: false | ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event?: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            title: string;
            clickNext: Function;
            clickPrev: Function;
            clickToday: Function;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:day-interval"?: false | ((arg: {
            day?: CalendarDay;
            dayIndex: number;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: {
            title?: string;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onNext?: ((...args: any[]) => any) | undefined;
        onPrev?: ((...args: any[]) => any) | undefined;
        onToday?: ((...args: any[]) => any) | undefined;
    }, {
        daysInMonth: import("vue").ComputedRef<CalendarDay[]>;
        daysInWeek: import("vue").ComputedRef<CalendarDay[]>;
        genDays: (days: Date[], today: Date) => CalendarDay[];
    }, {}, {}, {}, {
        text: string;
        disabled: boolean;
        day: Record<string, any>;
        nextIcon: string;
        prevIcon: string;
        hideHeader: boolean;
        viewMode: "day" | "month" | "week";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        firstDayOfWeek: string | number;
        intervalDivisions: number;
        intervalDuration: number;
        intervalHeight: number;
        intervalFormat: string | Function;
        intervalStart: number;
        hideDayHeader: boolean;
        intervals: number;
        hideWeekNumber: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    text: string;
    disabled: boolean;
    day: Record<string, any>;
    nextIcon: string;
    prevIcon: string;
    hideHeader: boolean;
    viewMode: "day" | "month" | "week";
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "static" | "dynamic";
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
    hideWeekNumber: boolean;
} & {
    max?: unknown;
    min?: unknown;
    title?: string | undefined;
    month?: string | number | undefined;
    year?: string | number | undefined;
    events?: any[] | undefined;
    modelValue?: unknown[] | undefined;
    firstDayOfWeek?: string | number | undefined;
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    displayValue?: unknown;
    weekdayFormat?: "long" | "short" | "narrow" | undefined;
    dayIndex?: number | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        $stable?: boolean;
    } | {
        'interval-body'?: ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        'interval-event'?: ((arg: {
            height: string;
            margin: string;
            eventClass: string;
            event: any;
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        'interval-title'?: ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        interval?: ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
        'day-body'?: ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        'day-title'?: ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
        'day-event'?: ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event?: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        header?: ((arg: {
            title: string;
            clickNext: Function;
            clickPrev: Function;
            clickToday: Function;
        }) => import("vue").VNodeChild) | undefined;
        'day-interval'?: ((arg: {
            day?: CalendarDay;
            dayIndex: number;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        title?: ((arg: {
            title?: string;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        'interval-body'?: false | ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        'interval-event'?: false | ((arg: {
            height: string;
            margin: string;
            eventClass: string;
            event: any;
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        'interval-title'?: false | ((arg: {
            interval: {
                label: string;
                start: unknown;
                end: unknown;
                events: any[];
            };
        }) => import("vue").VNodeChild) | undefined;
        interval?: false | ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
        'day-body'?: false | ((arg: {
            day?: CalendarDay;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        'day-title'?: false | ((arg: {
            title?: number | string;
        }) => import("vue").VNodeChild) | undefined;
        'day-event'?: false | ((arg: {
            day?: CalendarDay;
            allDay: boolean;
            event?: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        header?: false | ((arg: {
            title: string;
            clickNext: Function;
            clickPrev: Function;
            clickToday: Function;
        }) => import("vue").VNodeChild) | undefined;
        'day-interval'?: false | ((arg: {
            day?: CalendarDay;
            dayIndex: number;
            events?: Array<any>;
        }) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: {
            title?: string;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:interval-body"?: false | ((arg: {
        interval: {
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:interval-event"?: false | ((arg: {
        height: string;
        margin: string;
        eventClass: string;
        event: any;
        interval: {
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:interval-title"?: false | ((arg: {
        interval: {
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:interval"?: false | ((arg: Record<string, unknown>) => import("vue").VNodeChild) | undefined;
    "v-slot:day-body"?: false | ((arg: {
        day?: CalendarDay;
        events?: Array<any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:day-title"?: false | ((arg: {
        title?: number | string;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:day-event"?: false | ((arg: {
        day?: CalendarDay;
        allDay: boolean;
        event?: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: {
        title: string;
        clickNext: Function;
        clickPrev: Function;
        clickToday: Function;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:day-interval"?: false | ((arg: {
        day?: CalendarDay;
        dayIndex: number;
        events?: Array<any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: {
        title?: string;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onPrev?: ((...args: any[]) => any) | undefined;
    onToday?: ((...args: any[]) => any) | undefined;
}, {
    daysInMonth: import("vue").ComputedRef<CalendarDay[]>;
    daysInWeek: import("vue").ComputedRef<CalendarDay[]>;
    genDays: (days: Date[], today: Date) => CalendarDay[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    next: null;
    prev: null;
    today: null;
    'update:modelValue': null;
}, string, {
    text: string;
    disabled: boolean;
    day: Record<string, any>;
    nextIcon: string;
    prevIcon: string;
    hideHeader: boolean;
    viewMode: "day" | "month" | "week";
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "static" | "dynamic";
    firstDayOfWeek: string | number;
    intervalDivisions: number;
    intervalDuration: number;
    intervalHeight: number;
    intervalFormat: string | Function;
    intervalStart: number;
    hideDayHeader: boolean;
    intervals: number;
    hideWeekNumber: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    'interval-body': (arg: {
        interval: {
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        };
    }) => import("vue").VNode[];
    'interval-event': (arg: {
        height: string;
        margin: string;
        eventClass: string;
        event: any;
        interval: {
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        };
    }) => import("vue").VNode[];
    'interval-title': (arg: {
        interval: {
            label: string;
            start: unknown;
            end: unknown;
            events: any[];
        };
    }) => import("vue").VNode[];
    interval: (arg: Record<string, unknown>) => import("vue").VNode[];
    'day-body': (arg: {
        day?: CalendarDay;
        events?: Array<any>;
    }) => import("vue").VNode[];
    'day-title': (arg: {
        title?: number | string;
    }) => import("vue").VNode[];
    'day-event': (arg: {
        day?: CalendarDay;
        allDay: boolean;
        event?: Record<string, unknown>;
    }) => import("vue").VNode[];
    header: (arg: {
        title: string;
        clickNext: Function;
        clickPrev: Function;
        clickToday: Function;
    }) => import("vue").VNode[];
    'day-interval': (arg: {
        day?: CalendarDay;
        dayIndex: number;
        events?: Array<any>;
    }) => import("vue").VNode[];
    title: (arg: {
        title?: string;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: import("vue").PropType<"month" | "week" | "day">;
        default: string;
    };
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
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
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
    allowedDates: import("vue").PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    displayValue: import("vue").PropType<unknown>;
    modelValue: import("vue").PropType<unknown[]>;
    month: (StringConstructor | NumberConstructor)[];
    max: import("vue").PropType<unknown>;
    min: import("vue").PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    weekdays: {
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: {
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    };
    firstDayOfWeek: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    weekdayFormat: import("vue").PropType<"long" | "short" | "narrow" | undefined>;
    hideHeader: BooleanConstructor;
    hideWeekNumber: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    nextIcon: {
        type: StringConstructor;
        default: string;
    };
    prevIcon: {
        type: StringConstructor;
        default: string;
    };
    title: StringConstructor;
    text: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: import("vue").PropType<"month" | "week" | "day">;
        default: string;
    };
    day: {
        type: ObjectConstructor;
        default: () => {};
    };
    dayIndex: NumberConstructor;
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
    intervalDivisions: {
        type: NumberConstructor;
        default: number;
    };
    intervalDuration: {
        type: NumberConstructor;
        default: number;
    };
    intervalHeight: {
        type: NumberConstructor;
        default: number;
    };
    intervalFormat: {
        type: (FunctionConstructor | StringConstructor)[];
        default: string;
    };
    intervalStart: {
        type: NumberConstructor;
        default: number;
    };
    hideDayHeader: BooleanConstructor;
    intervals: {
        type: NumberConstructor;
        default: number;
    };
    allowedDates: import("vue").PropType<unknown[] | ((date: unknown) => boolean)>;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    displayValue: import("vue").PropType<unknown>;
    modelValue: import("vue").PropType<unknown[]>;
    month: (StringConstructor | NumberConstructor)[];
    max: import("vue").PropType<unknown>;
    min: import("vue").PropType<unknown>;
    showAdjacentMonths: BooleanConstructor;
    year: (StringConstructor | NumberConstructor)[];
    weekdays: {
        type: import("vue").PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: {
        type: import("vue").PropType<"dynamic" | "static">;
        default: string;
    };
    firstDayOfWeek: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    weekdayFormat: import("vue").PropType<"long" | "short" | "narrow" | undefined>;
    hideHeader: BooleanConstructor;
    hideWeekNumber: BooleanConstructor;
}>>;
export type VCalendar = InstanceType<typeof VCalendar>;
