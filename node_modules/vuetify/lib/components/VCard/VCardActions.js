import { normalizeClass as _normalizeClass, normalizeStyle as _normalizeStyle, createElementVNode as _createElementVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js"; // Utilities
import { genericComponent, useRender } from "../../util/index.js";
export const VCardActions = genericComponent()({
  name: 'VCardActions',
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: 'text'
      }
    });
    useRender(() => _createElementVNode("div", {
      "class": _normalizeClass(['v-card-actions', props.class]),
      "style": _normalizeStyle(props.style)
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VCardActions.js.map