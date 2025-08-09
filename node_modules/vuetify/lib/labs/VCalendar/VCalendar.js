import { mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode, normalizeClass as _normalizeClass } from "vue";
// Styles
import "./VCalendar.css";

// Components
import { makeVCalendarDayProps, VCalendarDay } from "./VCalendarDay.js";
import { makeVCalendarHeaderProps, VCalendarHeader } from "./VCalendarHeader.js";
import { VCalendarMonthDay } from "./VCalendarMonthDay.js"; // Composables
import { makeCalendarProps, useCalendar } from "../../composables/calendar.js";
import { useDate } from "../../composables/date/date.js"; // Utilities
import { computed, nextTick } from 'vue';
import { chunkArray, genericComponent, getPrefixedEventHandlers, pick, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCalendarProps = propsFactory({
  hideHeader: Boolean,
  hideWeekNumber: Boolean,
  ...makeCalendarProps(),
  ...makeVCalendarDayProps(),
  ...makeVCalendarHeaderProps()
}, 'VCalendar');
export const VCalendar = genericComponent()({
  name: 'VCalendar',
  props: makeVCalendarProps(),
  emits: {
    next: null,
    prev: null,
    today: null,
    'update:modelValue': null
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      daysInMonth,
      daysInWeek,
      genDays,
      model,
      displayValue,
      weekNumbers,
      weekdayLabels
    } = useCalendar(props);
    function onClickNext() {
      if (props.viewMode === 'month') {
        model.value = [adapter.addMonths(displayValue.value, 1)];
      } else if (props.viewMode === 'week') {
        model.value = [adapter.addDays(displayValue.value, 7)];
      } else if (props.viewMode === 'day') {
        model.value = [adapter.addDays(displayValue.value, 1)];
      }
      nextTick(() => {
        emit('next', model.value[0]);
      });
    }
    function onClickPrev() {
      if (props.viewMode === 'month') {
        model.value = [adapter.addMonths(displayValue.value, -1)];
      } else if (props.viewMode === 'week') {
        model.value = [adapter.addDays(displayValue.value, -7)];
      } else if (props.viewMode === 'day') {
        model.value = [adapter.addDays(displayValue.value, -1)];
      }
      nextTick(() => {
        emit('prev', model.value[0]);
      });
    }
    function onClickToday() {
      const date = adapter.date();
      model.value = [date];
      nextTick(() => {
        emit('today', model.value[0]);
      });
    }
    const title = computed(() => {
      return adapter.format(displayValue.value, 'monthAndYear');
    });
    useRender(() => {
      const calendarDayProps = VCalendarDay.filterProps(props);
      const calendarHeaderProps = VCalendarHeader.filterProps(props);
      const weekdaysCount = daysInWeek.value.length;
      return _createElementVNode("div", {
        "class": _normalizeClass(['v-calendar', {
          'v-calendar-monthly': props.viewMode === 'month',
          'v-calendar-weekly': props.viewMode === 'week',
          'v-calendar-day': props.viewMode === 'day'
        }])
      }, [_createElementVNode("div", null, [!props.hideHeader && (slots.header?.({
        title: title.value,
        clickNext: onClickNext,
        clickPrev: onClickPrev,
        clickToday: onClickToday
      }) ?? _createVNode(VCalendarHeader, _mergeProps({
        "key": "calendar-header"
      }, calendarHeaderProps, {
        "title": title.value,
        "onClick:next": onClickNext,
        "onClick:prev": onClickPrev,
        "onClick:toToday": onClickToday
      }), {
        title: slots.title
      }))]), _createElementVNode("div", {
        "class": _normalizeClass(['v-calendar__container', `days__${weekdaysCount}`])
      }, [props.viewMode === 'month' && !props.hideDayHeader && _createElementVNode("div", {
        "class": _normalizeClass(['v-calendar-weekly__head', `days__${weekdaysCount}`, ...(!props.hideWeekNumber ? ['v-calendar-weekly__head-weeknumbers'] : [])]),
        "key": "calendarWeeklyHead"
      }, [!props.hideWeekNumber ? _createElementVNode("div", {
        "key": "weekNumber0",
        "class": "v-calendar-weekly__head-weeknumber"
      }, null) : '', weekdayLabels.value.map(weekday => _createElementVNode("div", {
        "class": _normalizeClass(`v-calendar-weekly__head-weekday${!props.hideWeekNumber ? '-with-weeknumber' : ''}`)
      }, [weekday]))]), props.viewMode === 'month' && _createElementVNode("div", {
        "key": "VCalendarMonth",
        "class": _normalizeClass(['v-calendar-month__days', `days${!props.hideWeekNumber ? '-with-weeknumbers' : ''}__${weekdaysCount}`, ...(!props.hideWeekNumber ? ['v-calendar-month__weeknumbers'] : [])])
      }, [chunkArray(daysInMonth.value, weekdaysCount).map((week, wi) => [!props.hideWeekNumber ? _createElementVNode("div", _mergeProps({
        "class": "v-calendar-month__weeknumber"
      }, getPrefixedEventHandlers(attrs, ':weekNumber', () => ({
        weekNumber: weekNumbers.value[wi],
        week
      }))), [weekNumbers.value[wi]]) : '', week.map(day => _createVNode(VCalendarMonthDay, _mergeProps({
        "key": adapter.toJsDate(day.date).getTime()
      }, calendarDayProps, {
        "day": day,
        "title": adapter.format(day.date, 'dayOfMonth'),
        "events": props.events?.filter(e => adapter.isSameDay(day.date, e.start) || adapter.isSameDay(day.date, e.end))
      }, attrs), {
        ...pick(slots, ['day-body', 'day-event', 'day-title'])
      }))])]), props.viewMode === 'week' && daysInWeek.value.map((day, i) => slots['day-interval'] ? slots['day-interval']?.({
        ...calendarDayProps,
        day,
        dayIndex: i,
        events: props.events?.filter(e => adapter.isSameDay(e.start, day.date) || adapter.isSameDay(e.end, day.date))
      }) : _createVNode(VCalendarDay, _mergeProps(calendarDayProps, {
        "day": day,
        "dayIndex": i,
        "events": props.events?.filter(e => adapter.isSameDay(e.start, day.date) || adapter.isSameDay(e.end, day.date))
      }, attrs), {
        ...pick(slots, ['interval', 'interval-body', 'interval-event', 'interval-title'])
      })), props.viewMode === 'day' && (slots['day-interval'] ? slots['day-interval']({
        day: genDays([displayValue.value], adapter.date())[0],
        dayIndex: 0,
        events: props.events?.filter(e => adapter.isSameDay(e.start, genDays([displayValue.value], adapter.date())[0].date) || adapter.isSameDay(e.end, genDays([displayValue.value], adapter.date())[0].date))
      }) : _createVNode(VCalendarDay, _mergeProps(calendarDayProps, {
        "day": genDays([model.value[0]], adapter.date())[0],
        "dayIndex": 0,
        "events": props.events?.filter(e => adapter.isSameDay(e.start, genDays([model.value[0]], adapter.date())[0].date) || adapter.isSameDay(e.end, genDays([model.value[0]], adapter.date())[0].date))
      }, attrs), null))])]);
    });
    return {
      daysInMonth,
      daysInWeek,
      genDays
    };
  }
});
//# sourceMappingURL=VCalendar.js.map