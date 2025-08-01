import { createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VBadge } from "../../components/VBadge/index.js";
import { VChip } from "../../components/VChip/index.js"; // Utilities
import { genericComponent, getPrefixedEventHandlers, propsFactory, useRender } from "../../util/index.js";
export const makeVCalendarEventProps = propsFactory({
  allDay: Boolean,
  day: Object,
  event: Object
}, 'VCalendarEvent');
export const VCalendarEvent = genericComponent()({
  name: 'VCalendarEvent',
  inheritAttrs: false,
  props: makeVCalendarEventProps(),
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    useRender(() => _createVNode(VChip, _mergeProps({
      "color": props.allDay ? 'primary' : undefined,
      "density": "comfortable",
      "label": props.allDay,
      "width": "100%"
    }, getPrefixedEventHandlers(attrs, ':event', () => ({
      allDay: props.allDay,
      day: props.day,
      event: props.event
    }))), {
      default: () => [_createVNode(VBadge, {
        "inline": true,
        "dot": true,
        "color": props.event?.color
      }, null), props.event?.title]
    }));
    return {};
  }
});
//# sourceMappingURL=VCalendarEvent.js.map