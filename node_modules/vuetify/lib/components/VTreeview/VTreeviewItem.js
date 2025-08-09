import { Fragment as _Fragment, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VTreeviewItem.css";

// Components
import { VBtn } from "../VBtn/index.js";
import { VListItemAction } from "../VList/index.js";
import { makeVListItemProps, VListItem } from "../VList/VListItem.js";
import { VProgressCircular } from "../VProgressCircular/index.js"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { computed, inject, ref, toRaw } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
import { VTreeviewSymbol } from "./shared.js";
export const makeVTreeviewItemProps = propsFactory({
  loading: Boolean,
  hideActions: Boolean,
  indentLines: Array,
  toggleIcon: IconValue,
  ...makeVListItemProps({
    slim: true
  })
}, 'VTreeviewItem');
export const VTreeviewItem = genericComponent()({
  name: 'VTreeviewItem',
  props: makeVTreeviewItemProps(),
  emits: {
    toggleExpand: value => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const visibleIds = inject(VTreeviewSymbol, {
      visibleIds: ref()
    }).visibleIds;
    const vListItemRef = ref();
    const isActivatableGroupActivator = computed(() => vListItemRef.value?.root.activatable.value && vListItemRef.value?.isGroupActivator);
    const vListItemRefIsClickable = computed(() => vListItemRef.value?.link.isClickable.value || props.value != null && !!vListItemRef.value?.list);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || vListItemRefIsClickable.value || isActivatableGroupActivator.value));
    const isFiltered = computed(() => visibleIds.value && !visibleIds.value.has(toRaw(vListItemRef.value?.id)));
    function activateGroupActivator(e) {
      if (isClickable.value && isActivatableGroupActivator.value) {
        vListItemRef.value?.activate(!vListItemRef.value?.isActivated, e);
      }
    }
    function onClickAction(e) {
      e.preventDefault();
      e.stopPropagation();
      emit('toggleExpand', e);
    }
    useRender(() => {
      const listItemProps = VListItem.filterProps(props);
      const hasPrepend = slots.prepend || props.toggleIcon || props.indentLines;
      return _createVNode(VListItem, _mergeProps({
        "ref": vListItemRef
      }, listItemProps, {
        "active": vListItemRef.value?.isActivated || undefined,
        "class": ['v-treeview-item', {
          'v-treeview-item--activatable-group-activator': isActivatableGroupActivator.value,
          'v-treeview-item--filtered': isFiltered.value
        }, props.class],
        "ripple": false,
        "onClick": activateGroupActivator
      }), {
        ...slots,
        prepend: hasPrepend ? slotProps => {
          return _createElementVNode(_Fragment, null, [props.indentLines && props.indentLines.length > 0 ? _createElementVNode("div", {
            "key": "indent-lines",
            "class": "v-treeview-indent-lines",
            "style": {
              '--v-indent-parts': props.indentLines.length
            }
          }, [props.indentLines.map(type => _createElementVNode("div", {
            "class": _normalizeClass(`v-treeview-indent-line v-treeview-indent-line--${type}`)
          }, null))]) : '', !props.hideActions && _createVNode(VListItemAction, {
            "start": true
          }, {
            default: () => [props.toggleIcon ? _createVNode(VBtn, {
              "density": "compact",
              "icon": props.toggleIcon,
              "loading": props.loading,
              "variant": "text",
              "onClick": onClickAction
            }, {
              loader: () => _createVNode(VProgressCircular, {
                "indeterminate": "disable-shrink",
                "size": "20",
                "width": "2"
              }, null)
            }) : _createElementVNode("div", {
              "class": "v-treeview-item__level"
            }, null)]
          }), slots.prepend?.(slotProps)]);
        } : undefined
      });
    });
    return forwardRefs({}, vListItemRef);
  }
});
//# sourceMappingURL=VTreeviewItem.js.map