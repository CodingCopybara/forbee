import type { PropType } from 'vue';
export interface CalendarProps {
    allowedDates: unknown[] | ((date: unknown) => boolean) | undefined;
    disabled: boolean;
    displayValue?: unknown;
    modelValue: unknown[] | undefined;
    max: unknown;
    min: unknown;
    showAdjacentMonths: boolean;
    month: number | string | undefined;
    weekdays: number[];
    year: number | string | undefined;
    weeksInMonth: 'dynamic' | 'static';
    firstDayOfWeek: number | string | undefined;
    weekdayFormat: 'long' | 'short' | 'narrow' | undefined;
    'onUpdate:modelValue': ((value: unknown[]) => void) | undefined;
    'onUpdate:month': ((value: number) => void) | undefined;
    'onUpdate:year': ((value: number) => void) | undefined;
}
export type CalendarDay = {
    date: Date;
    formatted: string;
    isAdjacent: boolean;
    isDisabled: boolean;
    isEnd: boolean;
    isHidden: boolean;
    isSame: boolean;
    isSelected: boolean;
    isStart: boolean;
    isToday: boolean;
    isWeekEnd: boolean;
    isWeekStart: boolean;
    isoDate: string;
    localized: string;
    month: number;
    year: number;
};
export type CalendarWeekdays = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare const makeCalendarProps: <Defaults extends {
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
} = {}>(defaults?: Defaults | undefined) => {
    allowedDates: unknown extends Defaults["allowedDates"] ? PropType<unknown[] | ((date: unknown) => boolean)> : {
        type: PropType<unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : unknown[] | ((date: unknown) => boolean) | Defaults["allowedDates"]>;
        default: unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : Defaults["allowedDates"] | NonNullable<unknown[] | ((date: unknown) => boolean)>;
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    displayValue: unknown extends Defaults["displayValue"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["displayValue"] ? unknown : unknown>;
        default: unknown extends Defaults["displayValue"] ? unknown : {} | Defaults["displayValue"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? PropType<unknown[]> : {
        type: PropType<unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"];
    };
    month: unknown extends Defaults["month"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["month"] ? string | number : string | number | Defaults["month"]>;
        default: unknown extends Defaults["month"] ? string | number : NonNullable<string | number> | Defaults["month"];
    };
    max: unknown extends Defaults["max"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    showAdjacentMonths: unknown extends Defaults["showAdjacentMonths"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"]>;
        default: unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"];
    };
    year: unknown extends Defaults["year"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["year"] ? string | number : string | number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? string | number : NonNullable<string | number> | Defaults["year"];
    };
    weekdays: unknown extends Defaults["weekdays"] ? {
        type: PropType<CalendarWeekdays[]>;
        default: () => number[];
    } : Omit<{
        type: PropType<CalendarWeekdays[]>;
        default: () => number[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["weekdays"] ? CalendarWeekdays[] : CalendarWeekdays[] | Defaults["weekdays"]>;
        default: unknown extends Defaults["weekdays"] ? CalendarWeekdays[] : CalendarWeekdays[] | Defaults["weekdays"];
    };
    weeksInMonth: unknown extends Defaults["weeksInMonth"] ? {
        type: PropType<"dynamic" | "static">;
        default: string;
    } : Omit<{
        type: PropType<"dynamic" | "static">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["weeksInMonth"] ? "static" | "dynamic" : "static" | "dynamic" | Defaults["weeksInMonth"]>;
        default: unknown extends Defaults["weeksInMonth"] ? "static" | "dynamic" : NonNullable<"static" | "dynamic"> | Defaults["weeksInMonth"];
    };
    firstDayOfWeek: unknown extends Defaults["firstDayOfWeek"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["firstDayOfWeek"] ? string | number : string | number | Defaults["firstDayOfWeek"]>;
        default: unknown extends Defaults["firstDayOfWeek"] ? string | number : NonNullable<string | number> | Defaults["firstDayOfWeek"];
    };
    weekdayFormat: unknown extends Defaults["weekdayFormat"] ? PropType<"long" | "short" | "narrow" | undefined> : {
        type: PropType<unknown extends Defaults["weekdayFormat"] ? "long" | "short" | "narrow" | undefined : "long" | "short" | "narrow" | Defaults["weekdayFormat"] | undefined>;
        default: unknown extends Defaults["weekdayFormat"] ? "long" | "short" | "narrow" | undefined : Defaults["weekdayFormat"] | NonNullable<"long" | "short" | "narrow" | undefined>;
    };
};
export declare function useCalendar(props: CalendarProps): {
    displayValue: import("vue").ComputedRef<unknown>;
    daysInMonth: import("vue").ComputedRef<CalendarDay[]>;
    daysInWeek: import("vue").ComputedRef<CalendarDay[]>;
    genDays: (days: Date[], today: Date) => CalendarDay[];
    model: import("vue").Ref<readonly unknown[], readonly unknown[]> & {
        readonly externalValue: unknown[] | undefined;
    };
    weeksInMonth: import("vue").ComputedRef<unknown[][]>;
    weekdayLabels: import("vue").ComputedRef<string[]>;
    weekNumbers: import("vue").ComputedRef<(number | null)[]>;
};
