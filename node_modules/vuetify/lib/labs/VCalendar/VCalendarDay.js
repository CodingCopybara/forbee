import { mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VCalendarDay.css";

// Components
import { makeVCalendarIntervalProps, VCalendarInterval } from "./VCalendarInterval.js";
import { VBtn } from "../../components/VBtn/index.js"; // Composables
import { useDate } from "../../composables/date/index.js"; // Utilities
import { computed } from 'vue';
import { genericComponent, getPrefixedEventHandlers, pick, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCalendarDayProps = propsFactory({
  hideDayHeader: Boolean,
  intervals: {
    type: Number,
    default: 24
  },
  ...makeVCalendarIntervalProps()
}, 'VCalendarDay');
export const VCalendarDay = genericComponent()({
  name: 'VCalendarDay',
  inheritAttrs: false,
  props: makeVCalendarDayProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const adapter = useDate();
    const intervals = computed(() => [...Array.from({
      length: props.intervals
    }, (v, i) => i).filter((_, index) => props.intervalDuration * (index + props.intervalStart) < 1440)]);
    useRender(() => {
      const calendarIntervalProps = VCalendarInterval.filterProps(props);
      return _createElementVNode("div", {
        "class": "v-calendar-day__container"
      }, [!props.hideDayHeader && _createElementVNode("div", _mergeProps({
        "key": "calendar-week-name",
        "class": "v-calendar-weekly__head-weekday"
      }, getPrefixedEventHandlers(attrs, ':day', () => props.day)), [adapter.format(props.day.date, 'weekdayShort'), _createElementVNode("div", null, [_createVNode(VBtn, _mergeProps(getPrefixedEventHandlers(attrs, ':date', () => props.day), {
        "class": props.day?.isToday ? 'v-calendar-day-label__today' : undefined,
        "icon": true,
        "text": adapter.format(props.day.date, 'dayOfMonth'),
        "variant": props.day?.isToday ? undefined : 'text'
      }), null)])]), intervals.value.map((_, index) => slots.interval?.(calendarIntervalProps) ?? _createVNode(VCalendarInterval, _mergeProps({
        "index": index
      }, calendarIntervalProps, attrs, getPrefixedEventHandlers(attrs, ':interval', () => calendarIntervalProps)), {
        ...pick(slots, ['interval-body', 'interval-event', 'interval-title'])
      }))]);
    });
    return {
      intervals
    };
  }
});
//# sourceMappingURL=VCalendarDay.js.map