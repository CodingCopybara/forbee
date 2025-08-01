import { mergeProps as _mergeProps, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
// Styles
import "./VCalendarMonthDay.css";

// Components
import { VCalendarEvent } from "./VCalendarEvent.js";
import { VBtn } from "../../components/VBtn/index.js"; // Utilities
import { genericComponent, getPrefixedEventHandlers, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVCalendarMonthDayProps = propsFactory({
  active: Boolean,
  color: String,
  day: {
    type: Object
  },
  disabled: Boolean,
  events: Array,
  title: [Number, String]
}, 'VCalendarMonthDay');
export const VCalendarMonthDay = genericComponent()({
  name: 'VCalendarMonthDay',
  inheritAttrs: false,
  props: makeVCalendarMonthDayProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    useRender(() => {
      return _createElementVNode("div", _mergeProps({
        "class": ['v-calendar-month__day']
      }, getPrefixedEventHandlers(attrs, ':day', () => props)), [!props.day?.isHidden ? _createElementVNode("div", {
        "key": "title",
        "class": "v-calendar-weekly__day-label"
      }, [slots['day-title']?.({
        title: props.title
      }) ?? _createVNode(VBtn, _mergeProps({
        "class": props.day?.isToday ? 'v-calendar-weekly__day-label__today' : undefined,
        "color": props.color,
        "disabled": props.disabled,
        "icon": true,
        "size": "x-small",
        "variant": props.day?.isToday ? undefined : 'flat',
        "text": `${props.title}`
      }, getPrefixedEventHandlers(attrs, ':date', () => props)), null)]) : undefined, !props.day?.isHidden ? _createElementVNode("div", {
        "key": "content",
        "class": "v-calendar-weekly__day-content"
      }, [slots['day-body']?.({
        day: props.day,
        events: props.events
      }) ?? _createElementVNode("div", null, [_createElementVNode("div", {
        "class": "v-calendar-weekly__day-alldayevents-container"
      }, [props.events?.filter(event => event.allDay).map(event => slots['day-event'] ? slots['day-event']({
        day: props.day,
        allDay: true,
        event
      }) : _createVNode(VCalendarEvent, _mergeProps({
        "day": props.day,
        "event": event,
        "allDay": true
      }, attrs), null))]), _createElementVNode("div", {
        "class": "v-calendar-weekly__day-events-container"
      }, [props.events?.filter(event => !event.allDay).map(event => slots['day-event'] ? slots['day-event']({
        day: props.day,
        event,
        allDay: false
      }) : _createVNode(VCalendarEvent, _mergeProps({
        "day": props.day,
        "event": event
      }, attrs), null))])])]) : undefined]);
    });
    return {};
  }
});
//# sourceMappingURL=VCalendarMonthDay.js.map