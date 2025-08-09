import { mergeProps as _mergeProps, createElementVNode as _createElementVNode, createVNode as _createVNode, normalizeStyle as _normalizeStyle } from "vue";
// Styles
import "./VCalendarInterval.css";

// Components
import { VCalendarIntervalEvent } from "./VCalendarIntervalEvent.js"; // Composables
import { useDate } from "../../composables/date/index.js"; // Utilities
import { computed } from 'vue';
import { convertToUnit, genericComponent, getPrefixedEventHandlers, propsFactory, useRender } from "../../util/index.js";
export const makeVCalendarIntervalProps = propsFactory({
  day: {
    type: Object,
    default: () => ({})
  },
  dayIndex: Number,
  events: Array,
  intervalDivisions: {
    type: Number,
    default: 2
  },
  intervalDuration: {
    type: Number,
    default: 60
  },
  intervalHeight: {
    type: Number,
    default: 48
  },
  intervalFormat: {
    type: [String, Function],
    default: 'fullTime12h'
  },
  intervalStart: {
    type: Number,
    default: 0
  }
}, 'VCalendarInterval');
export const VCalendarInterval = genericComponent()({
  name: 'VCalendarInterval',
  inheritAttrs: false,
  props: {
    index: {
      type: Number,
      required: true
    },
    ...makeVCalendarIntervalProps()
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const interval = computed(() => {
      const start = adapter.addMinutes(adapter.startOfDay(props.day.date), props.intervalDuration * (props.index + props.intervalStart));
      const end = adapter.addMinutes(adapter.startOfDay(props.day.date), props.intervalDuration * (props.index + props.intervalStart + 1) - 1);
      return {
        ...props.day,
        label: adapter.format(start, 'fullTime24h'),
        start,
        end,
        events: props.events ? props.events.filter(e => !e.allDay && (adapter.isEqual(start, e.start) || adapter.isWithinRange(e.start, [start, end]) || adapter.isWithinRange(start, [e.start, e.end]) || adapter.isEqual(end, e.end))).map(e => {
          return {
            ...e,
            first: adapter.isEqual(start, e.start) || adapter.isWithinRange(e.start, [start, end]),
            last: adapter.isEqual(end, e.end) || adapter.isWithinRange(e.end, [start, end])
          };
        }) : []
      };
    });
    useRender(() => {
      return props.dayIndex === 0 ? _createElementVNode("div", {
        "class": "v-calendar-day__row-with-label",
        "style": _normalizeStyle(`height: ${convertToUnit(props.intervalHeight)}`)
      }, [_createElementVNode("div", _mergeProps({
        "class": "v-calendar-day__row-label"
      }, getPrefixedEventHandlers(attrs, ':time', () => props)), [slots['interval-title']?.({
        interval: interval.value
      }) ?? (props.index ? props.intervalFormat ? typeof props.intervalFormat === 'string' ? adapter.format(interval.value.start, 'hours12h') : props.intervalFormat(interval.value) : interval.value.label : '12 AM')]), _createElementVNode("div", {
        "class": "v-calendar-day__row-hairline"
      }, null), _createElementVNode("div", _mergeProps({
        "class": ['v-calendar-day__row-content', interval.value.events.some(e => !e.last) ? 'v-calendar-day__row-content-through' : '']
      }, getPrefixedEventHandlers(attrs, ':interval', () => interval.value)), [slots['interval-body']?.({
        interval: interval.value
      }) ?? _createElementVNode("div", null, [interval.value.events?.map(event => _createVNode(VCalendarIntervalEvent, _mergeProps({
        "event": event,
        "interval": interval.value,
        "intervalDivisions": props.intervalDivisions,
        "intervalDuration": props.intervalDuration,
        "intervalHeight": props.intervalHeight
      }, attrs), {
        ...(slots['interval-event'] ? {
          'interval-event': _ref2 => {
            let {
              height,
              margin,
              eventClass,
              event,
              interval
            } = _ref2;
            return slots['interval-event']?.({
              height,
              margin,
              eventClass,
              event,
              interval
            });
          }
        } : {})
      }))])])]) : _createElementVNode("div", {
        "class": "v-calendar-day__row-without-label",
        "style": _normalizeStyle(`height: ${convertToUnit(props.intervalHeight)}`)
      }, [_createElementVNode("div", _mergeProps({
        "class": ['v-calendar-day__row-content', interval.value.events.some(e => !e.last) ? 'v-calendar-day__row-content-through' : '']
      }, getPrefixedEventHandlers(attrs, ':interval', () => interval.value)), [slots['interval-body']?.({
        interval: interval.value
      }) ?? interval.value.events?.map(event => _createVNode(VCalendarIntervalEvent, _mergeProps({
        "event": event,
        "interval": interval.value,
        "intervalDivisions": props.intervalDivisions,
        "intervalDuration": props.intervalDuration,
        "intervalHeight": props.intervalHeight
      }, attrs), {
        ...(slots['interval-event'] ? {
          'interval-event': _ref3 => {
            let {
              height,
              margin,
              eventClass,
              event,
              interval
            } = _ref3;
            return slots['interval-event']?.({
              height,
              margin,
              eventClass,
              event,
              interval
            });
          }
        } : {})
      }))])]);
    });
    return {
      interval
    };
  }
});
//# sourceMappingURL=VCalendarInterval.js.map