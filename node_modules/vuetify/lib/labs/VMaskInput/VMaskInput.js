import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.js"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.js";
import { makeMaskProps, useMask } from "../../composables/mask.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, onBeforeMount, ref, toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js"; // Types
export const makeVMaskInputProps = propsFactory({
  ...makeVTextFieldProps(),
  ...makeMaskProps()
}, 'VMaskInput');
export const VMaskInput = genericComponent()({
  name: 'VMaskInput',
  props: makeVMaskInputProps(),
  emits: {
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const vTextFieldRef = ref();
    const {
      maskText,
      updateRange,
      unmaskText
    } = useMask(props, vTextFieldRef);
    const returnMaskedValue = computed(() => props.mask && props.returnMaskedValue);
    const model = useProxiedModel(props, 'modelValue', undefined,
    // Always display masked value in input when mask is applied
    val => props.mask ? maskText(unmaskText(val)) : val, val => {
      if (props.mask) {
        const valueBeforeChange = unmaskText(model.value);
        // E.g. mask is #-# and the input value is '2-23'
        // model-value should be enforced to '2-2'
        const enforcedMaskedValue = maskText(unmaskText(val));
        const newUnmaskedValue = unmaskText(enforcedMaskedValue);
        if (newUnmaskedValue === valueBeforeChange) {
          vTextFieldRef.value.value = enforcedMaskedValue;
        }
        val = newUnmaskedValue;
        updateRange();
        return returnMaskedValue.value ? maskText(val) : val;
      }
      return val;
    });
    const validationValue = toRef(() => returnMaskedValue.value ? model.value : unmaskText(model.value));
    onBeforeMount(() => {
      if (props.returnMaskedValue) {
        emit('update:modelValue', model.value);
      }
    });
    useRender(() => {
      const textFieldProps = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps(textFieldProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "ref": vTextFieldRef,
        "validationValue": validationValue.value
      }), {
        ...slots
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});
//# sourceMappingURL=VMaskInput.js.map